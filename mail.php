<?php
if(isset($_POST["submit"])){

$to = "sulakkanaid@gmail.com";
$nm = $_POST["nm"];
$from=$_POST["email"];
$msg=$_POST["msg"];
$headers = "From: $from";

mail($to,$subject,$msg,$headers);
echo "Email successfully sent.";
}
?>