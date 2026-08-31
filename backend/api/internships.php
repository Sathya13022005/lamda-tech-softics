<?php
/**
 * GET /api/internships.php
 *
 * Returns all internship programs.
 */

require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/database.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    send_json(405, ['success' => false, 'message' => 'Only GET requests are allowed.']);
}

try {
    $db = (new Database())->getConnection();

    $stmt = $db->query(
        'SELECT id, internship_name, duration, technologies, description, created_at
         FROM internships ORDER BY id ASC'
    );
    $internships = $stmt->fetchAll();

    send_json(200, ['success' => true, 'data' => $internships]);
} catch (Throwable $e) {
    send_json(500, ['success' => false, 'message' => 'Unable to fetch internships right now.']);
}
