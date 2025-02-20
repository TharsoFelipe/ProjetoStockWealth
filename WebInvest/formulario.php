<?php
	//Salvar como formulario.php
	include("conexao.php");
	
	$nome = $_POST['nome'];
	$sobrenome = $_POST['sobrenome'];
	$email = $_POST['email'];
	$telefone = $_POST['telefone'];
	$experiencia = $_POST['experiencia'];
	$novidades = $_POST['novidades'];
	

	$sql = "INSERT INTO tb_contato(nome, sobrenome, email, telefone, experiencia, novidades) VALUES('$nome', '$sobrenome', '$email', '$telefone', '$experiencia', '$novidades')";
	
	mysqli_query($conn, $sql);
	mysqli_close($conn);
	header('Location:projetoInvest.html');
?>