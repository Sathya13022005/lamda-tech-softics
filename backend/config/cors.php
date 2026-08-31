<?php
/**
 * Shared CORS + JSON response setup, included at the top of every endpoint.
 *
 * For local development with `npm run dev` (Vite on port 5173) talking to
 * XAMPP's PHP on port 80, the browser treats those as different origins,
 * so CORS headers are required even though both run on "localhost".
 */

// Allow the Vite dev server origin. Add your production domain here too
// once the site is deployed.
$allowedOrigins = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: {$origin}");
} else {
    // Same-origin requests (no Origin header) or production same-domain setup.
    header('Access-Control-Allow-Origin: *');
}

header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Browsers send a pre-flight OPTIONS request before POST with JSON body.
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

function send_json(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    echo json_encode($payload);
    exit;
}
