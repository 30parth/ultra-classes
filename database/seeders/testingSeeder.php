<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Seeder;

class testingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'name' => 'John Doe',
            'email' => 'email@example.com',
            'password' => bcrypt('password'),
        ]);

        Student::create([
            'user_id' => $user->id,
            'name' => 'John Doe',
            'dob' => '2000-01-01',
            'gender' => 'male',
            'guardian_name' => 'John Doe',
            'guardian_contact' => '1234567890',
            'address' => '123 Main St',
            'admission_date' => '2022-01-01',
            'status' => 'active',
            'photo_path' => null,
        ]);
    }
}
