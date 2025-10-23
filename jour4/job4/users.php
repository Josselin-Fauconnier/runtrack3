<?php
header('Content-Type: application/json');

require_once 'config/database.php';

try {
    $config = $db_configuration;
    
    $pdo = new PDO(
        "mysql:host={$config['host']};dbname={$config['database']}", 
        $config['username'], 
        $config['password']
    );
    
    $stmt = $pdo->query("SELECT id, nom, prenom, email FROM utilisateurs");
    $utilisateurs = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($utilisateurs);
    
} catch(Exception $e) {
    echo json_encode(['error' => 'Erreur de connexion']);
}
?>