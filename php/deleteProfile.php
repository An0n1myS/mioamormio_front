<?php
	
	$login = $_COOKIE['user'];

	$mysql = new mysqli('mioamormioua.com','root','root','register-bd');

	$result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login' ");

	$deleteAcc = $mysql->query("DELETE FROM `users` WHERE `login` = '$login' ");

	$mysql->close();
	setcookie('user', $user['name'], time() - 3600, "/");
	header("location: /");
?>