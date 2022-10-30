<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
          $table->string('name')->after('active');
          $table->string('profile_photo_path', 2048)->nullable()->after('password');
          $table->timestamp('email_verified_at')->nullable()->after('profile_photo_path');

        });
        \DB::statement('UPDATE users SET name = CONCAT(firstname, " ", lastname)');

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
          $table->dropColumn('name');
          $table->dropColumn('profile_photo_path');
          $table->dropColumn('email_verified_at');

        });
    }
};
