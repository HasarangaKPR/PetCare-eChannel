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
            'doctorAddress' => 'required|string|max:255',
            'doctorCity' => 'required|string|max:255',
            'doctorContactNumber' => 'required|string|max:255|regex:/^\+?[0-9]{7,15}$/',
            'doctorEmail' => 'required|string|email|max:255',
            'averageTime' => 'required|integer',
            'openTime' => 'required|date_format:H:i',
            'closeTime' => 'required|date_format:H:i',
            //'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Add validation for profile photo
        ]);

            // $photoPath = null;
            // if ($request->hasFile('photo')) {
            //     $photoPath = $request->file('photo')->store('photos', 'public');
            //     $validatedData['photo'] = $photoPath; // Add the photo path to the data
            // }

        //get logged doctorId
        //$userId = $request->input('userId');
        $userId = auth()->id();
        $doctorId = Doctor::where('userId', $userId)->first();

        // Update doctor details
        $doctorId->update($validatedData);

        // Return a success response
        // return response()->json(['success' => true, 'message' => 'Successfully Updated.']);
    }

        public function searchDoctor(Request $request)
    {
        $doctorName = $request->input('doctorName');
        $city = $request->input('doctorCity');

        $query = Doctor::query();

        if ($doctorName) {
            $query->where('doctorName', $doctorName);
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
    
    
            // Get doctor details
            $doctorName = Doctor::where('doctorId', $doctorId)->value('doctorName');
            $doctorContactNumber = Doctor::where('doctorId', $doctorId)->value('doctorContactNumber');
            $openTime = Doctor::where('doctorId', $doctorId)->value('openTime');
            $closeTime = Doctor::where('doctorId', $doctorId)->value('closeTime');
            $address = Doctor::where('doctorId', $doctorId)->value('doctorAddress');
            $city = Doctor::where('doctorId', $doctorId)->value('doctorCity');


            //Set end time for the appointment
            $averageTime=Doctor::where('doctorId', $doctorId)->value('averageTime');
            $appointmentTime = $request->input('appointmentTime');
            $appointmentTime = Carbon::createFromFormat('H:i', $appointmentTime);
            $endTime = $appointmentTime->copy()->addMinutes($averageTime);

            $isBooked = DoctorAppointment::where('doctorId', $doctorId)->where('date', $date)
            ->whereRaw('appointmentTime < ? AND endTime > ?', [$endTime, $appointmentTime])->exists();
            
            $appointmentTime = $request->input('appointmentTime');
    
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
                                    'city' => $city,
                                    'address' => $address,
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

    public function cityDoctors(Request $request)
    {
        $city = $request->input('city');

        if ($city) {
            $doctors = Doctor::where('doctorCity', $city)->get();
        } else {
            $doctors = Doctor::all();
        }

        return response()->json(['doctors' => $doctors]);
    }

    public function deleteDoctor(Request $request, $userId) {
        // Get doctor associated with the user
        $doctor = Doctor::where('userId', $userId)->first();
        $user = User::find($userId);
    
            //delete data from doctor & user tables
            $user->delete();
            $doctor->delete();
    
        // Return a success response
        return response()->json(['success' => true, 'message' => 'Successfully Deleted.']);
    }
    
    
}
