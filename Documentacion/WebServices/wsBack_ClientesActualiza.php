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
  $id            = trim($_GET['id']);
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


  // Query update
  $query  = " UPDATE cbddesarrollo.cbd_clientes SET ";
  $query .= "    nombre              = '".$nombre."', ";
  $query .= "    paterno             = '".$paterno."', ";
  $query .= "    materno             = '".$materno."', ";
  $query .= "    email               = '".$email."',  ";
  $query .= "    telefono            = '".$telefono."',  ";
  $query .= "    fch_nacimiento      = '".$fchnacimiento."',  ";
  $query .= "    id_genero           =  ".$genero.", ";
  $query .= "    id_ubicacion        =  ".$ubicacion.", ";
  $query .= "    id_tipo_cliente     =  ".$tipo.", ";
  $query .= "    id_usuario_modifica = 1, ";
  $query .= "    fch_modificacion    = now(), ";
  $query .= "    ban_activo          = ".$estatus."";
  $query .= " WHERE cve_cliente      = ".$id."";


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