<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->middleware('auth');
        return view('home');
    }
    /**
     * Show the angular application.
     *
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        return view('angularApp.index');
    }
}