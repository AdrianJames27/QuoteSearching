<?php

namespace App\Http\Controllers;

use App\Models\Quote;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function getAllQuotes()
    {
        $quotes = Quote::all();
        return view('quote-list', compact('quotes'));
    }

    public function getQuotes(Request $request)
    {
        $keyword = $request->keyword;
        $quotes = '';
        
        if ($keyword) {
            $quotes = Quote::where('quote', 'like', '%' . $keyword . '%')
                    ->orWhere('author', 'like', '%' . $keyword . '%')->get();
        } else {
            $quotes = Quote::all();        
        }

        return view('quote-list', compact('quotes'));
    }
}
