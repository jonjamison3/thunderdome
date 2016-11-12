<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        \Illuminate\Auth\AuthenticationException::class,
        \Illuminate\Auth\Access\AuthorizationException::class,
        \Symfony\Component\HttpKernel\Exception\HttpException::class,
        \Illuminate\Database\Eloquent\ModelNotFoundException::class,
        \Illuminate\Session\TokenMismatchException::class,
        \Illuminate\Validation\ValidationException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if ($exception instanceof NotFoundHttpException)
        {
        $curr_file = \Request::path();
            $file_ex = pathinfo($curr_file, PATHINFO_EXTENSION);
            $target = ['js', 'ico', 'jpeg', 'jpg', 'ttf', 'eot', 'woff', 'svg', 'woff2'];

            if(in_array($file_ex, $target))
            { 
                $path = '/public/angularApp/dist/';
                if($file_ex == 'ico') $path = '/public/angularApp/src/';
                $file = $path.$curr_file;

                return redirect($file);
            }

            if($request->is('api/*')) 
            {
                return response(['success'=> 'false', 'reason'=>'Page not found', 'code'=>'404', 'path'=> $curr_file]);
            }

            if($request->is('*'))
            {
               setcookie('url', $curr_file, time() + (60*20));

               return redirect()->home();
            }

            return parent::render($request, $e);
            return response()->view('errors.404', [], 404);
        }
    }
    /**
     * Convert an authentication exception into an unauthenticated response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Auth\AuthenticationException  $exception
     * @return \Illuminate\Http\Response
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if ($request->expectsJson()) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }

        return redirect()->guest('login');
    }
}
