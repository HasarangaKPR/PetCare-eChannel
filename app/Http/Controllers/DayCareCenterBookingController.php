<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DayCareCenterBooking;

class DayCareCenterBookingController extends Controller
{
    public function addDayCareCenterBooking(Request $request){
        $validatedData = $request->validate([
            'dayCareCenterId' => 'required|integer',
            'userId' => 'required|integer',
            'startDate' => 'required|date',
            'endDate' => 'required|date',
            'status' => 'required|string|max:255',
            ]);
    
    
            DayCareCenterBooking::create($validatedData);
    
            //return redirect()->route('dashboard')->with('success', 'Added successfully.');
            return response()->json(['success' => true]);
    }
}
