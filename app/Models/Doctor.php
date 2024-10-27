<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $table = 'doctors';

    protected $fillable = [
        'userId',
        'doctorName',
        'doctorDistrict',
        'doctorCity',
        'doctorContactNumber',
        'doctorEmail',
        'averageTime',
        'openTime',
        'closeTime',
    ];
}
