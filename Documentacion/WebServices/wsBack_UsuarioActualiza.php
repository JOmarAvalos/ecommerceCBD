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
  $id         = trim($_GET['id']);
  $contrasena = trim($_GET['contrasena']);
  $nombre     = trim($_GET['nombre']);
  $paterno    = trim($_GET['paterno']);
  $materno    = trim($_GET['materno']);
  $email      = trim($_GET['email']);
  $perfil     = trim($_GET['perfil']);
  $estatus    = trim($_GET['estatus']);


  // Query update
  $query  = " UPDATE cbddesarrollo.cbd_usuarios SET ";
  $query .= "    nombre              = '".$nombre."', ";
  $query .= "    paterno             = '".$paterno."', ";
  $query .= "    materno             = '".$materno."', ";
  $query .= "    email               = '".$email."',  ";
  $query .= "    id_perfil           =  ".$perfil.", ";
  $query .= "    id_usuario_modifica = 1, ";
  $query .= "    fch_modificacion    = now(), ";
                  
  if ($contrasena <> "") {
    $query .= "  contrasena  = md5('".$contrasena."'), ";
  }

  $query .= "    ban_activo = ".$estatus."";
  $query .= " WHERE cve_usuario = ".$id."";


  $result = pg_query($query);


  if ($result) {

    $resArray = array('success' => 1, 'message' => '');
    die(json_encode($resArray));

  } else {

    $resArray = array('success' => 0, 'message' => 'No actualizo el registro');
    die(json_encode($resArray));

  }

}

disconnect($dbconn);

?>