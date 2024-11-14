<?php
include "connection.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

if(!$_POST["id"]){
echo"something is not right";
exit;
}
$id=$_POST["id"];



$query=$connection->prepare("SELECT * FROM users WHERE user_id=? ");
if(!$query){
    echo"issue with the query ".$connection->error;
    exit;
}
$query->bind_param("s",$id);
$query->execute();
if($result=$query->get_result()){
    $user=$result->fetch_assoc();

    $response=["budget"=>$user["budget"],
    "name"=>$user["name"],
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