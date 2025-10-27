<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BakedGood extends Model
{
    /** @use HasFactory<\Database\Factories\BakedGoodFactory> */
    use HasFactory;

    public function bakedGoods()
    {
        return $this->hasMany(BakedGood::class);
    }
}
