<?php
	//Salvar como conexao.php
	$servidor="localhost";
	$usuario="root";
	$senha="";
	$db="bd_contato";
	
	$conn = mysqli_connect($servidor, $usuario, $senha, $db);
	
	mysqli_select_db($conn, $db);
?>
