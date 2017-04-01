<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return Response
     */
    public function index()
    {
        return redirect('/app');
    }
    public function logoout() {
        Auth::logout(); 
        return redirect('/');
    }

    /**
     * Show the angular2 application
     *
     * @return Response
     */
    public function app(Request $request){
        $params = $this->getParams($request);
        return view('angular.index', $params);
    }

    private function getParams(Request $request){
        $url_path = (isset($request->url)) ? "'". $request->url ."'" : '""';  

        return compact(['url_path']);
    }
}
