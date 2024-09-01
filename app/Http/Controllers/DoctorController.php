<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Doctor;

class DoctorController extends Controller
{
    public function addDoctor(Request $request)
    {
        $validatedData = $request->validate([
        'doctorName' => 'required|string|max:255',
        'doctorDistrict' => 'required|string|max:255',
        'doctorCity' => 'required|string|max:255',
        'doctorContactNumber' => 'required|string|max:255|regex:/^\+?[0-9]{7,15}$/',
        'doctorEmail' => 'required|string|email|max:255',
        ]);


        $doctor = Doctor::create([
            'doctorName' => $validatedData['doctorName'],
            'doctorDistrict' => $validatedData['doctorDistrict'],
            'doctorCity' => $validatedData['doctorCity'],
            'doctorContactNumber' => $validatedData['doctorContactNumber'],
            'doctorEmail' => $validatedData['doctorEmail'],
            
        ]);

        //return redirect()->route('dashboard')->with('success', 'Added successfully.');
        return response()->json(['success' => true]);

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

        return response()->json(['doctors' => $doctors]);
    }
}
