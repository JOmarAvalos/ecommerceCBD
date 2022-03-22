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
  $estatus       = trim($_GET['estatus']);


  // Query insert
  $query = "INSERT INTO cbddesarrollo.cbd_cata_subcategoria_articulo (
             nombre, 
             ban_activo
          ) VALUES (
            '".$nombre."', 
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

}

disconnect($dbconn);

?>