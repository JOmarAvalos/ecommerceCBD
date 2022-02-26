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
  $nombre        = trim($_GET['nombre']);
  $paterno       = trim($_GET['paterno']);
  $materno       = trim($_GET['materno']);
  $email         = trim($_GET['email']);
  $telefono      = trim($_GET['telefono']);
  $fchnacimiento = trim($_GET['fchnacimiento']);
  $genero        = trim($_GET['genero']);
  $ubicacion     = trim($_GET['ubicacion']);
  $tipo          = trim($_GET['tipo']);
  $estatus       = trim($_GET['estatus']);


  // Query insert
  $query = "INSERT INTO cbddesarrollo.cbd_clientes (
             nombre, 
             paterno, 
             materno, 
             email, 
             contrasena,
             telefono,
             fch_nacimiento,
             id_genero,
             id_ubicacion,
             id_tipo_cliente,
             id_usuario_crea,
             fch_creacion,
             ban_activo
          ) VALUES (
            '".$nombre."', 
            '".$paterno."', 
            '".$materno."', 
            '".$email."',
            md5('".$contrasena."'), 
            '".$telefono."',
            '".$fchnacimiento."', 
             ".$genero.",
             ".$ubicacion.",
             ".$tipo.",
             1,
             now(),
             ".$estatus."
          )";

  $result = pg_query($query);

  if ($result) {

    $resArray = array('success' => 1, 'message' => '');
    die(json_encode($resArray));

  } else {

    $resArray = array('success' => 0, 'message' => 'No guardo el registro     '.$query);
    die(json_encode($resArray));

  }

}

disconnect($dbconn);

?>