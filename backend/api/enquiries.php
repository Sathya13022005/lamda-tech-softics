<?php
/**
 * POST /api/enquiries.php
 * Body (JSON): { name, email, phone, course, message? }
 *
 * Validates and stores a course enquiry / contact form submission.
 */

require_once __DIR__ . '/../config/cors.php';
require_once __DIR__ . '/../config/database.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send_json(405, ['success' => false, 'message' => 'Only POST requests are allowed.']);
}

$raw = file_get_contents('php://input');
$input = json_decode($raw, true);

if (!is_array($input)) {
    send_json(400, ['success' => false, 'message' => 'Invalid request body. Expected JSON.']);
}

// ---- Validation -----------------------------------------------------
$errors = [];

$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$course = trim($input['course'] ?? '');
$message = trim($input['message'] ?? '');

if ($name === '') {
    $errors[] = 'Name is required.';
} elseif (mb_strlen($name) > 100) {
    $errors[] = 'Name must be under 100 characters.';
}

if ($email === '') {
    $errors[] = 'Email is required.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email address is required.';
}

if ($phone === '') {
    $errors[] = 'Phone number is required.';
} elseif (!preg_match('/^[0-9+\-\s]{7,15}$/', $phone)) {
    $errors[] = 'A valid phone number is required.';
}

if ($course === '') {
    $errors[] = 'Please select a course.';
}

if (mb_strlen($message) > 1000) {
    $errors[] = 'Message must be under 1000 characters.';
}

if (!empty($errors)) {
    send_json(422, ['success' => false, 'message' => implode(' ', $errors), 'errors' => $errors]);
}

// ---- Persist ----------------------------------------------------------
try {
    $db = (new Database())->getConnection();

    $stmt = $db->prepare(
        'INSERT INTO enquiries (name, email, phone, course, message)
         VALUES (:name, :email, :phone, :course, :message)'
    );

    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':phone' => $phone,
        ':course' => $course,
        ':message' => $message !== '' ? $message : null,
    ]);

    send_json(201, [
        'success' => true,
        'message' => 'Thank you! Your enquiry has been submitted successfully.',
        'data' => ['id' => (int) $db->lastInsertId()],
    ]);
} catch (Throwable $e) {
    send_json(500, ['success' => false, 'message' => 'Unable to submit your enquiry right now. Please try again shortly.']);
}
