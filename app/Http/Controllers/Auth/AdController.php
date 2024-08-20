<?php

use App\Models\Ad;
use Illuminate\Http\Request;

class AdController extends Controller
{
    public function index()
    {
        return Ad::with('pet')->get();
    }

    public function store(Request $request)
    {
        $ad = Ad::create($request->all());
        return response()->json($ad, 201);
    }
}