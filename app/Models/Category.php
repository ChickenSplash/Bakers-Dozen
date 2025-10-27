<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function bakedGoods()
    {
        return $this->hasMany(BakedGood::class);
    }
}
