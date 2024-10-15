<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('pets', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('breed');
        $table->string('species');
        $table->text('description');
        $table->string('owner_name');
        $table->string('owner_contact');
        $table->string('district');
        $table->decimal('price', 8, 2);
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pets');
    }
};
