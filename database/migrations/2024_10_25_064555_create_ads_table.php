<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ads', function (Blueprint $table) {
            $table->id();
            $table->string('pet_name');
            $table->string('pet_type');
            $table->string('breed')->nullable();
            $table->integer('age')->nullable();
            $table->string('gender')->nullable();
            $table->decimal('price', 8, 2);
            $table->text('description')->nullable();
            $table->json('pet_photos')->nullable(); // Store multiple image paths as JSON
            $table->string('seller_name');
            $table->string('phone_number');
            $table->string('location');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ads');
    }
}
