<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DayCareCenter extends Model
{
    use HasFactory;

    protected $table = 'daycarecenters';

    protected $primaryKey = 'dayCareCenterId';

    protected $fillable = [
        'userId',
        'dayCareCenterName',
        'dayCareCenterDistrict',
        'dayCareCenterCity',
        'dayCareCenterContactNumber',
        'dayCareCenterEmail',
        'noOfRooms',
    ];
}
