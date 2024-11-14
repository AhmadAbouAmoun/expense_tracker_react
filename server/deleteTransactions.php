<?php
include "connection.php";
$id=$_POST["user_id"];
$query=$connection->prepare("DELETE FROM transaction WHERE user_id=$id");
$query->execute();
$response = [
    "status" => "success",
];
echo json_encode($response);