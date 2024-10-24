<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DayCareCenterBooking;

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

    // Find the first available room number (1 to 100)
    $roomNumber = null;
    for ($i = 1; $i <= 100; $i++) {
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

    // If an available room is found, create a new booking
    $booking = DayCareCenterBooking::create([
        'start_date' => $validatedData['start_date'],
        'end_date' => $validatedData['end_date'],
        'room_number' => $roomNumber,
    ]);

    return response()->json(['message' => 'Room booked successfully', 'room_number' => $booking->room_number]);
}


}
