<?php

session_start();
$_SESSION['name']=$_POST['name'];
$_SESSION['pass1']=$_POST['pass1'];
$_SESSION['pno1']=$_POST['pno1'];
include ('dbconnect.php');

$name=$_SESSION['name'];
$password=$_SESSION['pass1'];

$pno=$_SESSION['pno1'];
echo '$name';
    $reg="INSERT into userinfo (user_ID,username,phone,pass) values (' ','$name','$pno','$password')";
    mysqli_query($conn,$reg);
    echo "registration susseccfull";
    header('location:index.php');


?>
