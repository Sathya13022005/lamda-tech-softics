<?php
/**
 * GET /api/courses.php
 * GET /api/courses.php?category=Web%20Development
 *
 * Returns all courses, optionally filtered by category.
 */

require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/database.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    send_json(405, ['success' => false, 'message' => 'Only GET requests are allowed.']);
}

try {
    $db = (new Database())->getConnection();

    $category = $_GET['category'] ?? null;

    if ($category) {
        $stmt = $db->prepare(
            'SELECT id, course_name, description, duration, level, technologies, category, created_at
             FROM courses WHERE category = :category ORDER BY id ASC'
        );
        $stmt->bindValue(':category', $category, PDO::PARAM_STR);
    } else {
        $stmt = $db->prepare(
            'SELECT id, course_name, description, duration, level, technologies, category, created_at
             FROM courses ORDER BY id ASC'
        );
    }

    $stmt->execute();
    $courses = $stmt->fetchAll();

    send_json(200, ['success' => true, 'data' => $courses]);
} catch (Throwable $e) {
    send_json(500, ['success' => false, 'message' => 'Unable to fetch courses right now.']);
}
