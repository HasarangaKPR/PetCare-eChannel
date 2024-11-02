<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DayCareCenterBooking;
use App\Models\DayCareCenter;
use App\Models\User;

class DayCareCenterBookingController extends Controller
{
    // public function addDayCareCenterBooking(Request $request){
    //     $validatedData = $request->validate([
    //         'dayCareCenterId' => 'required|integer',
    //         'userId' => 'required|integer',
    //         'startDate' => 'required|date',
    //         'endDate' => 'required|date',
    //         'status' => 'required|string|max:255',
    //         ]);
    
    
    //         DayCareCenterBooking::create($validatedData);
    
    //         //return redirect()->route('dashboard')->with('success', 'Added successfully.');
    //         return response()->json(['success' => true]);
    // }
    public function bookRoom(Request $request)
{
    // Validate the incoming request
    $validatedData = $request->validate([
        'dayCareCenterId' => 'integer|max:255',
        'start_date' => 'required|date',
        'end_date' => 'required|date|after_or_equal:start_date',
    ]);

    // Check for conflicting bookings across all rooms
    $conflictingBookings = DayCareCenterBooking::where(function ($query) use ($validatedData) {
        $query->whereBetween('start_date', [$validatedData['start_date'], $validatedData['end_date']])
              ->orWhereBetween('end_date', [$validatedData['start_date'], $validatedData['end_date']])
              ->orWhere(function ($query) use ($validatedData) {
                  $query->where('start_date', '<', $validatedData['start_date'])
                        ->where('end_date', '>', $validatedData['end_date']);
              });
    })->get();

    // Create an array to hold booked room numbers
    $bookedRoomNumbers = $conflictingBookings->pluck('room_number')->toArray();

    //get no of rooms from database
    $dayCareCenterId = $validatedData['dayCareCenterId'];
    $noOfRooms = DayCareCenter::where('dayCareCenterId', $dayCareCenterId)->value('noOfRooms');

    // Find the first available room number
    $roomNumber = null;
    for ($i = 1; $i <= $noOfRooms; $i++) {
        if (!in_array($i, $bookedRoomNumbers)) {
            $roomNumber = $i;
            break;
        }
    }

    // If no available room is found, return a conflict response
    if ($roomNumber === null) {
        return response()->json([
            'message' => 'No rooms are available for the selected dates',
        ], 409);
    }

    //get userId & name & email
    $userId = auth()->id();
    $customersName = User::where('id', $userId)->value('name');
    $customersEmail = User::where('id', $userId)->value('email');
  

    //get daycarecenter name & email
    $dayCareCenter = DayCareCenter::find($dayCareCenterId);
    $dayCareCenterName = DayCareCenter::where('dayCareCenterId', $dayCareCenterId)->value('dayCareCenterName');
    $dayCareCenterEmail = DayCareCenter::where('dayCareCenterId', $dayCareCenterId)->value('dayCareCenterEmail');

    // If an available room is found, create a new booking
    $booking = DayCareCenterBooking::create([
        'dayCareCenterId' => $validatedData['dayCareCenterId'],
        'dayCareCenterName' => $dayCareCenterName,
        'dayCareCenterEmail' => $dayCareCenterEmail,
        'userId' => $userId,
        'customersName' => $customersName,
        'customersEmail' => $customersEmail,
        'start_date' => $validatedData['start_date'],
        'end_date' => $validatedData['end_date'],
        'room_number' => $roomNumber,
    ]);

    return response()->json(['message' => 'Room booked successfully', 'room_number' => $booking->room_number], 201);
}

public function displayToDayCareCenterAppointment(Request $request)
    {
        //get logged doctorId
        $userId = auth()->id();
        // $userId = $request->input('userId');
        $dayCareCenterId = DayCareCenter::where('userId', $userId)->value('dayCareCenterId');

        //get all appointments for the doctor
        $bookings = DayCareCenterBooking::where('dayCareCenterId', $dayCareCenterId)
        ->orderBy('start_date', 'asc')
        ->get();
       

        return response()->json(['bookings' => $bookings]);
    }
    
    public function displayToUserDayCareCenterAppointment(Request $request)
    {
        $userId = $request->input('userId');

        $bookings = DayCareCenterBooking::where('userId', $userId)->get();
        return response()->json(['bookings' => $bookings]);
    }
    


}
