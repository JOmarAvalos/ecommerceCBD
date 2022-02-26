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
  $usuario    = trim($_GET['usuario']);
  $contrasena = trim($_GET['contrasena']);
  $nombre     = trim($_GET['nombre']);
  $paterno    = trim($_GET['paterno']);
  $materno    = trim($_GET['materno']);
  $email      = trim($_GET['email']);
  $perfil     = trim($_GET['perfil']);
  $estatus    = trim($_GET['estatus']);



  // Query validador
  $query = "SELECT *  
              FROM cbddesarrollo.cbd_usuarios AS usu
              WHERE usu.usuario = '" . $usuario . "'";

  $result = pg_query($query);
  $numFilas = pg_num_rows($result);

  if($numFilas == 0) {

    // Query insert
    $query = "INSERT INTO cbddesarrollo.cbd_usuarios (
               usuario, 
               contrasena, 
               nombre, 
               paterno, 
               materno, 
               email, 
               id_perfil,
               id_usuario_crea,
               fch_creacion,
               ban_activo
            ) VALUES (
              '".$usuario."', 
              md5('".$contrasena."'), 
              '".$nombre."', 
              '".$paterno."', 
              '".$materno."', 
              '".$email."', 
               ".$perfil.",
               1,
               now(),
               ".$estatus."
            )";

    $result = pg_query($query);

    if ($result) {

      $resArray = array('success' => 1, 'message' => '');
      die(json_encode($resArray));

    } else {

      $resArray = array('success' => 0, 'message' => 'No guardo el registro');
      die(json_encode($resArray));

    }
  } else {

    $resArray = array('success' => 0, 'message' => 'El nombre de usuario ya existe');
    die(json_encode($resArray));

  }

}

disconnect($dbconn);

?>