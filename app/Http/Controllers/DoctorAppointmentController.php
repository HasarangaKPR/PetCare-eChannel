<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DoctorAppointment;

class DoctorAppointmentController extends Controller
{
    public function addDoctorAppointment(Request $request)
    {
        $validatedData = $request->validate([
        //'appointmentId' => 'required|string|max:255',
        'userId' => 'required|string|max:255',
        'doctorId' => 'required|string|max:255',
        'date' => 'required|date',
        'time' => 'required|date_format:H:i',
        'status' => 'required|string|max:255',
        ]);

        $doctorId = $request->input('doctorId');
        $date = $request->input('date');
        $time = $request->input('time');
        $isBooked = DoctorAppointment::where('doctorId', $doctorId)->where('date', $date)->where('time', $time)->exists();

        if($isBooked){
            return response()->json(['success' => false , 'message' => 'This time is not available yet.']);
        }else{

        $doctorappointment = DoctorAppointment::create([
            //'appointmentId' => $validatedData['appointmentId'],
            'userId' => $validatedData['userId'],
            'doctorId' => $validatedData['doctorId'],
            'date' => $validatedData['date'],
            'time' => $validatedData['time'],
            'status' => $validatedData['status'],
            
        ]);
         //return redirect()->route('dashboard')->with('success', 'Added successfully.');
         return response()->json(['success' => true , 'message' => 'The appointment has been successfully created.']);
        }

    }

    public function displayToDoctorAppointment(Request $request)
    {
        $channellingCenterId = $request->input('doctorId');

        $appointments = DoctorAppointment::where('doctorId', $channellingCenterId)->get();
        return response()->json(['appointments' => $appointments]);
    }
    
    public function displayToUserDoctorAppointment(Request $request)
    {
        $userId = $request->input('userId');

        $appointments = DoctorAppointment::where('userId', $userId)->get();
        return response()->json(['appointments' => $appointments]);
    }
}
