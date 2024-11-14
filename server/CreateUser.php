<?php
include "connection.php";

if(!$_POST["name"]||!$_POST["email"]||!$_POST["password"]||!$_POST["budget"]){
echo"something is not right";
exit;
}
$name=$_POST["name"];
$email=$_POST["email"];
$password=$_POST["password"];
$budget=$_POST["budget"];

$hash_password=password_hash($password,PASSWORD_DEFAULT);

$check=$connection->prepare("SELECT * FROM users WHERE email=?");
$check->bind_param("s", $email);
if($check->execute()){
    echo"email already exists";
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