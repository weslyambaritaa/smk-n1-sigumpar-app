<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AutoLoginForDemo
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        // Auto login untuk demo guru mapel
        if (!Auth::check()) {
            // Create a demo user using User model
            $user = new User();
            $user->id = 1;
            $user->name = 'Ivana Pasaribu';
            $user->email = 'ivanapasaribu17@gmail.com';
            
            // Set user in auth
            Auth::setUser($user);
        }

        return $next($request);
    }
}
