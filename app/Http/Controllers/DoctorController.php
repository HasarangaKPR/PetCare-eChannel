<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Doctor;
use App\Models\User;
use App\Models\DoctorAppointment;
use Carbon\Carbon;

class DoctorController extends Controller
{
        public function updateDoctor(Request $request)
    {
        $validatedData = $request->validate([
            'doctorName' => 'required|string|max:255',
            'doctorDistrict' => 'required|string|max:255',
            'doctorCity' => 'required|string|max:255',
            'doctorContactNumber' => 'required|string|max:255|regex:/^\+?[0-9]{7,15}$/',
            'doctorEmail' => 'required|string|email|max:255',
            'averageTime' => 'required|integer',
            'openTime' => 'required|date_format:H:i',
            'closeTime' => 'required|date_format:H:i',
        ]);

        // Find the doctor by ID
        $userId = $request->input('userId');
        $doctorId = Doctor::where('userId', $userId)->first();

        // Update doctor details
        $doctorId->update($validatedData);

        // Return a success response
        return response()->json(['success' => true, 'message' => 'Successfully Updated.']);
    }

        public function searchDoctor(Request $request)
    {
        $district = $request->input('doctorDistrict');
        $city = $request->input('doctorCity');

        $query = Doctor::query();

        if ($district) {
            $query->where('doctorDistrict', $district);
        }
        if ($city) {
            $query->where('doctorCity', $city);
        }
        $doctors = $query->get();

        $date = $request->input('date');
        $appointmentTime = $request->input('appointmentTime');

        $availability = [];
    
        foreach ($doctors as $doctor) {
            $doctorId = $doctor->doctorId;
    
            // Check if the doctor has a booking at the given date & time
            $isBooked = DoctorAppointment::where('doctorId', $doctorId)
                ->where('date', $date)
                ->where('appointmentTime', $appointmentTime)
                ->exists();
    
            // Get doctor details
            $doctorName = Doctor::where('doctorId', $doctorId)->value('doctorName');
            $doctorContactNumber = Doctor::where('doctorId', $doctorId)->value('doctorContactNumber');
            $openTime = Doctor::where('doctorId', $doctorId)->value('openTime');
            $closeTime = Doctor::where('doctorId', $doctorId)->value('closeTime');
    
            // Check if the appointment time is within the doctor's working and available time
            if ($isBooked || $appointmentTime < $openTime || $appointmentTime > $closeTime) {               
            } else {
                $availability[] = [
                                    'doctorId' => $doctor->doctorId,
                                    'name' => $doctor->doctorName,
                                    'averageTime' => $doctor->averageTime,
                                    'openTime' => $doctor->openTime,
                                    'closeTime' => $doctor->closeTime,
                                    'contact' => $doctor->doctorContactNumber,
                                ];
            }
        }
    
        //return response()->json(['success' => true, 'availability' => $availability]);
        if($date && $appointmentTime){
            return response()->json(['doctors' => $availability]);
        }
        
    }


        public function viewDoctors()
    {
        $doctors = User::where('userType', 'doctor')->get();
        return response()->json(['users' => $doctors]);
    }
    }
