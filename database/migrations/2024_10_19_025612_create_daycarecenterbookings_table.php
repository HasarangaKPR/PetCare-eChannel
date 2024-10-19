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
            $table->integer('dayCareCenterId');
            $table->integer('userId');
            $table->date('startDate');
            $table->date('endDate');
            $table->string('status');
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
