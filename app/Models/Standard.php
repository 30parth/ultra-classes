<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Standard extends Model
{
    use softDeletes;

    protected $fillable = [
        'standard_name',
        'standard_code',
        'status',
    ];
}
