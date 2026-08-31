<?php
/**
 * Database connection for Lamda Tech Softics.
 *
 * Uses PDO with prepared statements throughout the API. Update the
 * constants below to match your local XAMPP / MySQL setup.
 */

class Database
{
    private $host = 'localhost';
    private $dbName = 'lamda_tech_softics';
    private $username = 'root';
    private $password = ''; // Default XAMPP MySQL password is empty.
    private $charset = 'utf8mb4';

    public function getConnection(): PDO
    {
        $dsn = "mysql:host={$this->host};dbname={$this->dbName};charset={$this->charset}";

        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ];

        try {
            return new PDO($dsn, $this->username, $this->password, $options);
        } catch (PDOException $e) {
            // Never leak DB credentials or raw exception details to the client.
            http_response_code(500);
            header('Content-Type: application/json');
            echo json_encode([
                'success' => false,
                'message' => 'Database connection failed. Please check the server configuration.',
            ]);
            exit;
        }
    }
}
