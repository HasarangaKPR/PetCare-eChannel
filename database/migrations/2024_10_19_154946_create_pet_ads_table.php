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
        Schema::create('pet_ads', function (Blueprint $table) {
            $table->id('adId');
            $table->string('pet_name');
            $table->string('pet_type');
            $table->string('breed');
            $table->integer('age');
            $table->string('gender');
            $table->decimal('price',8,2);
            $table->text('description')->nullable();
           $table->string('pet_photos')->nullable();
            $table->string('seller_name');
            $table->string('phone_number');
            $table->string('location');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pet_ads');
    }
};
