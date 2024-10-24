<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DayCareCenterBooking extends Model
{
    use HasFactory;

    protected $table = 'daycarecenterbookings';

    protected $fillable = [
        'dayCareCenterId',
        'userId',
        'startDate',
        'endDate',
        'status',
    ];
}
