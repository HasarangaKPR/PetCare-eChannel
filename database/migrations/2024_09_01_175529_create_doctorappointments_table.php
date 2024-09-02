<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('doctorappointments', function (Blueprint $table) {
            $table->id('appointmentId');
            $table->string('userId');
            $table->string('doctorId');
            $table->date('date');
            $table->time('appointmentTime');
            $table->time('endTime')->default('12:00');
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctorappointments');
    }
};
