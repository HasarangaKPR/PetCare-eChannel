<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PetAd extends Model
{
    use HasFactory;
    protected $table = 'pet_ads';
    protected $fillable = [
        //'adId',
        'name',
        'address',
        'breed',
        'description',
        'contactnumber',
        'price',



    ];
}
