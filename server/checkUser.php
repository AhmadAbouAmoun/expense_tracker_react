<?php
include "connection.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

if(!$_POST["email"]||!$_POST["password"]){
echo"something is not right";
exit;
}
$email=$_POST["email"];
$password=$_POST["password"];



$query=$connection->prepare("SELECT user_id FROM users WHERE email=? ");
if(!$query){
    echo"issue with the query ".$connection->error;
    exit;
}
$query->bind_param("s",$email);
$query->execute();
if($result=$query->get_result()){
    $user=$result->fetch_assoc();

    $response=["id"=>$user["user_id"],
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