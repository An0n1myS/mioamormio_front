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

	$nameNew = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
	$mailNew = filter_var(trim($_POST['mail']), FILTER_SANITIZE_STRING);
	if ($nameNew == $mailNew) {
		header("location: /");
	}elseif ($nameNew == ''){
		$result = $mysql->query("UPDATE `users` SET `mail` = '$mailNew' WHERE `login` = '$login'");
	} elseif ($mailNew == '') {
		$result = $mysql->query("UPDATE `users` SET `name` = '$nameNew' WHERE `login` = '$login'");
	} else{
		$result = $mysql->query("UPDATE `users` SET `name` = '$nameNew', `mail` = '$mailNew' WHERE `login` = '$login'");
	}

	$mysql->close();
	header("location: http://mioamormioua.com/profile.php");

?>

