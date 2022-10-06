<?php
	$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
	$name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
	$pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);
	$mail = filter_var(trim($_POST['mail']), FILTER_SANITIZE_STRING);
	$status = "user";


	if (mb_strlen($login) < 5 || mb_strlen($login) > 90) {
		echo "Недопустимая длина логина";
		exit();
	} else if (mb_strlen($name) < 3 || mb_strlen($name) > 50) {
		echo "Недопустимая длина имени";
		exit();
	}	else if (mb_strlen($pass) < 8 || mb_strlen($pass) > 50) {
		echo "Недопустимая длина пароля (от 8 до 50 символов)";
		exit();
	}	else if (mb_strlen($mail) < 8 || mb_strlen($mail) > 90) {
		echo "Недопустимая длина адреса почты";
		exit();
	}	

	$pass = md5($pass."g11vgh1");

	$mysql = new mysqli('mioamormioua.com','root','root','register-bd');
	$result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login' ");
	$user = $result->fetch_assoc();
	if(count($user) == 0) {
		$mysql->query("INSERT INTO `users` (`login`, `pass`, `name`, `mail`, `status`) VALUES('$login', '$pass', '$name', '$mail', '$status') ");
	}
	else {
		echo "Пользователь с таким ником уже зарегестрирован";
		exit();
	}
	$mysql->close();

	header("location: /");
?>
