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
            $table->string('userId')->nullable();
            $table->integer('doctorId')->nullable();
            $table->date('date')->nullable();
            $table->time('appointmentTime')->nullable();
            $table->time('endTime')->nullable();
            $table->string('status')->nullable();
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
