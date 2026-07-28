<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'dob',
        'gender',
        'address',
        'admission_date',
        'status',
        'photo_path',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
