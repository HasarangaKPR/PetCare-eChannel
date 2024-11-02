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
        Schema::create('daycarecenters', function (Blueprint $table) {
            $table->id('dayCareCenterId');
            $table->integer('userId');
            $table->string('dayCareCenterName')->nullable();
            $table->string('dayCareCenterDistrict')->nullable();
            $table->string('dayCareCenterCity')->nullable();
            $table->string('dayCareCenterContactNumber')->nullable();
            $table->string('dayCareCenterEmail')->nullable();
            $table->integer('noOfRooms')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('daycarecenters');
    }
};
