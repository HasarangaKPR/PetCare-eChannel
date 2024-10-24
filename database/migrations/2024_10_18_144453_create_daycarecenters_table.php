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
            $table->string('dayCareCenterName');
            $table->string('dayCareCenterDistrict');
            $table->string('dayCareCenterCity');
            $table->string('dayCareCenterContactNumber');
            $table->string('dayCareCenterEmail');
            $table->integer('noOfRooms');
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
