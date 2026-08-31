<?php
/**
 * GET /api/testimonials.php
 *
 * Returns all student testimonials, most recent first.
 */

require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/database.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    send_json(405, ['success' => false, 'message' => 'Only GET requests are allowed.']);
}

try {
    $db = (new Database())->getConnection();

    $stmt = $db->query(
        'SELECT id, student_name, course, testimonial, rating, created_at
         FROM testimonials ORDER BY created_at DESC, id DESC'
    );
    $testimonials = $stmt->fetchAll();

    send_json(200, ['success' => true, 'data' => $testimonials]);
} catch (Throwable $e) {
    send_json(500, ['success' => false, 'message' => 'Unable to fetch testimonials right now.']);
}
