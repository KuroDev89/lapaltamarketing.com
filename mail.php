<?php
if(isset($_POST['submit'])){
$destino="contactopaltamkt@gmail.com";
$nombre=$_POST["first_name"];
$correo=$_POST["email"];
$telf=$_POST["phone"];
$web=$_POST["digital_environment"];
$servi=$_POST["Servicios"];
$mesage=$_POST["message"];

if ($_POST['name1'] != ""){
 // Es un SPAMbot
 exit();
 
} else {
 // Es un usuario real, proceder a enviar el formulario.
 
}

$contenido="Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono: " . $telf . "\nEcosistema Digital: "  . $web . "\nServicio Solicitado: "  .  $servi . "\nMensaje: "  . $mesage;
mail($destino, "Contacto", $contenido);
 
header("Location:gracias.html");
}


?>