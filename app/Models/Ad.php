<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    use HasFactory;

    // Specify the fillable fields for mass assignment
    protected $fillable = [
        'pet_name', 
        'pet_type', 
        'breed', 
        'age', 
        'gender', 
        'price', 
        'description', 
        'pet_photos', 
        'seller_name', 
        'phone_number', 
        'location',
    ];

    // Cast 'pet_photos' as an array
    protected $casts = [
        'pet_photos' => 'array',
    ];
}
