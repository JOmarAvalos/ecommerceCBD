<?php

include "dbConfig.php";
include "dbUtils.php";

$dbConn =  connect($db);

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    // Variables de entrada
    $usuario = $_GET['usuario'];
    $contrasena = $_GET['contrasena'];

    // Comprobar existecia
    if($usuario == ""){
        $response["success"] = 0;
        $response["message"] = "Falta informacion (usuario), vuelva a intentarlo.";
        die(json_encode($response));
    }
    if($contrasena == ""){
        $response["success"] = 0;
        $response["message"] = "Falta informacion (contraseña), vuelva a intentarlo.";
        die(json_encode($response));
    }

    // Query verificacion
    $result = pg_query("SELECT * FROM cbddesarrollo.cbd_usuarios WHERE usuario = '".$usuario."' and contrasena = MD5('".$contrasena."')");
    $numFilas = pg_num_rows($result);

    if ($numFilas == '1') {
        $response["success"] = 1;
        $response["message"] = "";
        die(json_encode($response));
    }else{
        $response["success"] = 0;
        $response["message"] = "Datos incorrectos, vuelva a intentarlo.";
        die(json_encode($response));
    }
    
}else{
    $response["success"] = 0;
    $response["message"] = "Falla en comunicación, vuelva a intentarlo.";
    die(json_encode($response));
}

disconnect($dbconn);

?>