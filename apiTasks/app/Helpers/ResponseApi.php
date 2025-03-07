<?php

namespace App\Helpers;

use Symfony\Component\HttpFoundation\Response;

class ResponseApi
{
    public static function response_success($message, $data, $response = Response::HTTP_OK) {
        return response([
            'status' => true,
            'message' => $message,
            'data' => $data
        ], $response);
    }

    public static function response_error($message, $error, $response = Response::HTTP_INTERNAL_SERVER_ERROR) {
        return response([
            'status' => false,
            'message' => $message,
            'error' => $error
        ], $response);
    }
}