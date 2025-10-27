<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BakedGoodResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'name'        => $this->name,
            'category'    => $this->category->name, // Assuming there's a relationship set in the model
            'price'       => $this->price,
            'description' => $this->description,
            'image'       => $this->image,
            'in_stock'    => $this->in_stock,
        ];
    }
}
