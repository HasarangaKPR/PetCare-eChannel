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
        Schema::create('daycarecenterbookings', function (Blueprint $table) {
            $table->id('bookingID');
            $table->integer('dayCareCenterId'); // Daycare center ID
            $table->String('dayCareCenterName'); // Daycare center Name
            $table->string('dayCareCenterEmail'); // Daycare center Address
            $table->integer('userId'); // User ID
            $table->string('customersName'); // Customer name
            $table->string('customersEmail'); // Customer email
            $table->integer('room_number'); // Room number
            $table->date('start_date'); // Booking start date
            $table->date('end_date'); // Booking end date
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('daycarecenterbookings');
    }
};
