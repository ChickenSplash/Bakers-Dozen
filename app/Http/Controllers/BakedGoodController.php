<?php

namespace App\Http\Controllers;

use App\Models\BakedGood;
use App\Http\Requests\StoreBakedGoodRequest;
use App\Http\Requests\UpdateBakedGoodRequest;
use App\Http\Resources\BakedGoodResource;
use Inertia\Inertia;

class BakedGoodController extends Controller
{
    /**
     * Home page
     */
    public function home()
    {
        return Inertia::render('BakedGoods/home', [
            'bakedGoods' => BakedGoodResource::collection(
                BakedGood::with('category')->get(),
            ),
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('BakedGoods/index', [
            'bakedGoods' =>  BakedGoodResource::collection(
                BakedGood::with('category')->get(),
            ),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBakedGoodRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(BakedGood $bakedGood)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BakedGood $bakedGood)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBakedGoodRequest $request, BakedGood $bakedGood)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BakedGood $bakedGood)
    {
        //
    }
}
