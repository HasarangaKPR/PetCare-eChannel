<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DayCareCenter;

class DayCareCenterController extends Controller
{
    public function addDayCareCenter(Request $request)
    {
        $validatedData = $request->validate([
        'dayCareCenterName' => 'required|string|max:255',
        'dayCareCenterDistrict' => 'required|string|max:255',
        'dayCareCenterCity' => 'required|string|max:255',
        'dayCareCenterContactNumber' => 'required|string|max:255|regex:/^\+?[0-9]{7,15}$/',
        'dayCareCenterEmail' => 'required|string|email|max:255',
        'noOfRooms' => 'required|integer',
        ]);


        DayCareCenter::create($validatedData);

        //return redirect()->route('dashboard')->with('success', 'Added successfully.');
        return response()->json(['success' => true]);

    }
}
