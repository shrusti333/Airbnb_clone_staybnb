<?php
session_start();


include ('dbconnect.php');

$_SESSION['pass']=$_POST['pass'];
$_SESSION['pno']=$_POST['pno'];
$pno=$_SESSION['pno'];
$password=$_SESSION['pass'];

$s1=" SELECT* from userinfo where phone='$pno' and pass='$password'";
$result1=mysqli_query($conn,$s1);
$data=mysqli_fetch_assoc($result1);
$num1=mysqli_num_rows($result1);
if($num1 == 1){
    $_SESSION['uid']=$data['User_ID'];
    echo $_SESSION['uid'];

}
else{
    
    echo "login unsusseccfull";
  
}
?>