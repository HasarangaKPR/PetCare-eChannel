<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DoctorAppointment;
use App\Models\Doctor;
use App\Models\User;
use Carbon\Carbon;
use App\Mail\AppointmentConfirmationMail;
use Illuminate\Support\Facades\Mail;

class DoctorAppointmentController extends Controller
{
    public function addDoctorAppointment(Request $request)
    {
        $validatedData = $request->validate([
        //'appointmentId' => 'required|string|max:255',
        // 'userId' => 'required|string|max:255',
        // 'doctorId' => 'required|string|max:255',
        // 'date' => 'required|date',
        // 'appointmentTime' => 'required|date_format:H:i',
        // 'status' => 'required|string|max:255',

        //'userId' => 'string|max:255',
        'doctorId' => 'integer|max:255',
        'date' => 'required|date',
        'appointmentTime' => 'required|date_format:H:i',
        //'status' => 'string|max:255',
        ]);


        //Set end time for the appointment
        $doctorId = $request->input('doctorId');
        $averageTime=Doctor::where('doctorId', $doctorId)->value('averageTime');
        $appointmentTime = $request->input('appointmentTime');
        $appointmentTime = Carbon::createFromFormat('H:i', $appointmentTime);
        $endTime = $appointmentTime->copy()->addMinutes($averageTime);

        //get customer name
        $userId = auth()->id();
        $customerName = User::where('id', $userId)->value('name');

        
        // Check if the time slot is already booked
        //$doctorId = $request->input('doctorId');
        $date = $request->input('date');
        $appointmentTime = $request->input('appointmentTime');

        
        //$isBooked = DoctorAppointment::where('doctorId', $doctorId)->where('date', $date)->where('appointmentTime', $appointmentTime)->exists();
        
        $isBooked = DoctorAppointment::where('doctorId', $doctorId)->where('date', $date)
        ->whereRaw('appointmentTime < ? AND endTime > ?', [$endTime, $appointmentTime])->exists();


        //Set open time and close time for the doctor
        $openTime = Doctor::where('doctorId', $doctorId)->value('openTime');
        $closeTime = Doctor::where('doctorId', $doctorId)->value('closeTime');
        
        
        // Check if the appointment time is within the doctor's working and available time
        if($isBooked || $appointmentTime < $openTime || $appointmentTime > $closeTime){
            return response()->json(['success' => false , 'message' => 'This time is not available yet.']);
        }else{

        $doctorappointment = DoctorAppointment::create([
            'userId' => $userId,
            'doctorId' => $validatedData['doctorId'],
            'date' => $validatedData['date'],
            'appointmentTime' => $validatedData['appointmentTime'],
            'endTime' => $endTime,
            //'status' => $validatedData['status'],
            'customerName' => $customerName,
            
        ]);
         // Send confirmation email to the user
         $userEmail = User::where('id', $userId)->value('email');
         $doctor = Doctor::find($doctorId);
         Mail::to($userEmail)->send(new AppointmentConfirmationMail($doctorAppointment, $doctor));
         
         //return redirect()->route('dashboard')->with('success', 'Added successfully.');
         return response()->json(['success' => true , 'message' => 'The appointment has been successfully created.']);
        }

    }

    public function displayToDoctorAppointment(Request $request)
    {
        //get logged doctorId
        $userId = auth()->id();
        $doctorId = Doctor::where('userId', $userId)->value('doctorId');

        //get all appointments for the doctor
        $appointments = DoctorAppointment::where('doctorId', $doctorId)
        ->orderBy('date', 'asc')
        ->orderBy('appointmentTime', 'asc')
        ->get();
        return response()->json(['appointments' => $appointments]);
    }
    
    public function displayToUserDoctorAppointment(Request $request)
    {
        $userId = $request->input('userId');

        $appointments = DoctorAppointment::where('userId', $userId)->get();
        return response()->json(['appointments' => $appointments]);
    }
}
