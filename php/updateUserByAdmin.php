<?php
	if ($_COOKIE['user'] == '') {
		header("location: /");	
	}
	else	{
		$login = $_COOKIE['user'];

		$mysql = new mysqli('mioamormioua.com','root','root','register-bd');

		$result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login' ");

		$user = $result->fetch_assoc();
	}

	$statusNew = filter_var(trim($_POST['status']), FILTER_SANITIZE_STRING);
	
	if ($statusNew =='') {
		header("location: /");
	}else {
		$result = $mysql->query("UPDATE `users` SET `status` = '$statusNew' WHERE `login` = '$login'");
	}

	$mysql->close();
	header("location: http://mioamormioua.com/profile.php");

?>

