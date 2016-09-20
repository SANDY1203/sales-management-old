<?php
session_start();
$username = $_POST['username'];
$password = $_POST['password'];
$dbusername ="null";
$dbpassword = "null";
$dbtype= "null";
if($username && $password)
{
	$connect = mysql_connect("localhost","root","");
	mysql_select_db("sales management");
	$query = mysql_query("select * from users where email='$username'");
	
	while($log = mysql_fetch_assoc($query))
	{
		$dbusername =$log["email"];
		$dbpassword =$log["password"];
		$dbtype =$log["role"];
		$user_id = $log["id"];
	}
	 
	if($dbusername == $username && $dbpassword == $password && $dbtype == "admin")
	{
		
		header("Location: ../../index.html");
	}
	elseif($dbusername == $username && $dbpassword == $password && $dbtype == "sales")
	{
		header("Location: ../../../AdminLTE-2.3.6-new-sales/index.html");
	}
	elseif($dbusername == $username && $dbpassword == $password && $dbtype == "project_manager")
	{
		header("Location: ../../../AdminLTE-2.3.6-new -prom/index.html");
	}
	elseif($dbusername == $username && $dbpassword == $password && $dbtype == "company")
	{
		header("Location: ../../../AdminLTE-2.3.6-new -company/pages/tables/data.php?user_id=".$user_id);
	}
	else
	{
		header("Location: ../../indeex.php");
	}
}


?>