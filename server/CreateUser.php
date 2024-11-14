<?php
include "connection.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

if(!$_POST["name"]||!$_POST["email"]||!$_POST["password"]||!$_POST["budget"]){
echo"something is not right";
exit;
}
$name=$_POST["name"];
$email=$_POST["email"];
$password=$_POST["password"];
$budget=$_POST["budget"];

$hash_password=password_hash($password,PASSWORD_DEFAULT);

$check=$connection->prepare("SELECT email FROM users WHERE email=$email");

if($check){
    echo"user already exists ";
    exit;
}
$query=$connection->prepare("INSERT INTO users(name,budget,email,password) VALUES (?,?,?,?)");
if(!$query){
    echo"issue with the query ".$connection->error;
    exit;
}
$query->bind_param("siss", $name, $budget, $email, $hash_password);

if($query->execute()){
    $user_id = $connection->insert_id;
    $response=["id"=>$user_id,
    "status" => "success",
];
    echo json_encode($response);
}
else{
    echo"Failed " . $query;
}
$query->close();
$connection->close(); 
exit;