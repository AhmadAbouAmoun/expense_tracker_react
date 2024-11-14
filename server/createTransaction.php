<?php
include "connection.php";
header("Access-Control-Allow-Origin: http://localhost:3000");  
header("Access-Control-Allow-Methods: GET, POST");  
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
header("Content-Type: application/json"); 
if(!$_POST["note"]||!$_POST["amount"]){
    $response = [
        "status" => "failed",
        "message" => "transaction failed"
    ];
    echo json_encode($response);

    exit;
}
$type = $_POST["type"];
$amount = $_POST["amount"];
$note=$_POST["note"];
$date=$_POST["date"];
$user_id=$_POST["user_id"];


$query = $connection->prepare("INSERT INTO transaction(type,amount,note,date,user_id) VALUES (?,?,?,?, ?)");

$query->bind_param("sissi", $type, $amount,$note,$date,$user_id); 

if ($query->execute() === TRUE) {
    $transaction_id = $connection->insert_id;
    $response = [
        "status" => "success",
        "message" => "transaction with ID $transaction_id has been added"
    ];
    echo json_encode($response);
} 

$query->close();
$connection->close(); 
exit;
