<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClickLog extends Model
{

    protected $table = 'click_log';

    protected $fillable = ['created_at'];
    
    use HasFactory;
}
