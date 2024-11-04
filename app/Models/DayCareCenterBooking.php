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
        'dayCareCenterName',
        'dayCareCenterEmail',
        'userId',
        'customersName',
        'customersEmail',
        'room_number',
        'start_date',
        'end_date',
    ];
}
