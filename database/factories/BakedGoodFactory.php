<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BakedGood>
 */
class BakedGoodFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->words(2, true),
            'category_id' => Category::inRandomOrder()->value('id'),
            'price' => $this->faker->randomFloat(2, 1, 20), // £1.00 to £20.00
            'description' => $this->faker->sentence(12),
            'image' => $this->faker->imageUrl(640, 480, 'food', true),
            'in_stock' => $this->faker->boolean(80), // 80% chance it’s in stock
        ];
    }
}
