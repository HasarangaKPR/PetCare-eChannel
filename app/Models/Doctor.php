<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $table = 'doctors';

    protected $primaryKey = 'doctorId';

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
        'photo',
    ];
}
