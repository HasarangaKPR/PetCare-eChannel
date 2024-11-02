<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DayCareCenter;
use App\Models\User;

class DayCareCenterController extends Controller
{
    public function updateDayCareCenter(Request $request)
    {
        $validatedData = $request->validate([
        'dayCareCenterName' => 'required|string|max:255',
        'dayCareCenterDistrict' => 'required|string|max:255',
        'dayCareCenterCity' => 'required|string|max:255',
        'dayCareCenterContactNumber' => 'required|string|max:255|regex:/^\+?[0-9]{7,15}$/',
        'dayCareCenterEmail' => 'required|string|email|max:255',
        'noOfRooms' => 'required|integer',
        ]);

        //get logged doctorId
        //$userId = $request->input('userId');
        $userId = auth()->id();
        $dayCareCenterId = DayCareCenter::where('userId', $userId)->first();

        // Update doctor details
        $dayCareCenterId->update($validatedData);


        // DayCareCenter::create($validatedData);

        //return redirect()->route('dashboard')->with('success', 'Added successfully.');
        return response()->json(['success' => true]);

    }

    public function searchDayCareCenter(Request $request)
    {
        $dayCareCenterName = $request->input('dayCareCenterName');
        $dayCareCenterCity = $request->input('dayCareCenterCity');
        $start_date = $request->input('start_date');
        $end_date = $request->input('end_date');
        

        $query = DayCareCenter::query();

        if ($dayCareCenterName) {
            $query->where('dayCareCenterName', $dayCareCenterName);
        }
        if ($dayCareCenterCity) {
            $query->where('dayCareCenterCity', $dayCareCenterCity);
        }
        $dayCareCenters = $query->get();

        if($start_date && $end_date){
            return response()->json(['dayCareCenters' => $dayCareCenters]);
        }
    }

    public function viewDayCare()
    {
        $daycares = User::where('userType', 'daycare')->get();
        return response()->json(['daycares' => $daycares]);
    }
}
