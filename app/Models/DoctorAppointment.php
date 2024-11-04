<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Mail\AppointmentConfirmationMail;
use Illuminate\Support\Facades\Mail;

class DoctorAppointment extends Model
{
    use HasFactory;

    protected $table = 'doctorappointments';

    protected $fillable = [
        'appointmentId',
        'userId',
        'doctorId',
        'doctorName',
        'doctorEmail',
        'customerName',
        'customerEmail',
        'date',
        'appointmentTime',
        'endTime',
        'status',
    ];
}
