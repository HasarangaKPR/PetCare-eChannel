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
        Schema::create('doctors', function (Blueprint $table) {
            $table->id('doctorId');
            $table->string('doctorName');
            $table->string('doctorDistrict');
            $table->string('doctorCity');
            $table->string('doctorContactNumber');
            $table->string('doctorEmail');
            $table->integer('averageTime');
            $table->time('openTime');
            $table->time('closeTime');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctors');
    }
};
