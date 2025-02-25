<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/nova', function () {
    return view('nova');
});

Route::get('/users/{param}/{paramii}', function ($param, $paramii) {
    return $param. '_'. $paramii;
});