<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PetAd extends Model
{
    use HasFactory;
    // Define the table name (optional if the table name matches the pluralized model name)
    protected $table = 'pet_ads';
    // Define the fillable fields to allow mass assignment
    protected $fillable = [
        'pet_name',
        'pet_type',
        'breed',
        'age',
        'gender',
        'price',
        'description',
       // 'pet_photos',
        'seller_name',
        'phone_number',
        'location',
    ];
     // Cast 'pet_photos' as an array
     //protected $casts = [
       // 'pet_photos' => 'array',
    // ];
}
