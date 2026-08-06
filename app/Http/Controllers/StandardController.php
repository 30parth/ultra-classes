<?php

namespace App\Http\Controllers;

use App\Models\Standard;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StandardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $standards = Standard::all();

        return Inertia::render('standard/index', [
            'standards' => $standards,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('standard/form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'standard_name' => 'required',
            'standard_code' => 'required',
            'status' => 'required',
        ]);

        $standard = Standard::create($request->all());

        return redirect()->route('standard.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Standard $standard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Standard $standard)
    {
        return Inertia::render('standard/form', [
            'standard' => $standard,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Standard $standard)
    {
        $request->validate([
            'standard_name' => 'required',
            'standard_code' => 'required',
            'status' => 'required',
        ]);

        $standard->update($request->all());

        return redirect()->route('standard.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Standard $standard)
    {
        //
    }
}
