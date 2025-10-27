<?php

namespace Database\Seeders;

use App\Models\BakedGood;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BakedGoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        BakedGood::factory()->count(20)->create();
    }
}
