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

  $idVentaMayoreo = trim($_GET['idVentaMayoreo']);
  $mensaje        = trim($_GET['mensaje']);



  // Query insert
  $query = "INSERT INTO cbddesarrollo.cbd_ventas_mayoreo_seguimiento (
             id_venta_mayoreo,
             mensaje,
             id_usuario_crea,
             fch_creacion
          ) VALUES (
             ".$idVentaMayoreo.", 
            '".$mensaje."',
             1,
             now()
          )";

  $result = pg_query($query);

  if ($result) {

    $resArray = array('success' => 1, 'message' => '');
    die(json_encode($resArray));

  } else {

    $resArray = array('success' => 0, 'message' => 'No guardo el registro: '. $query);
    die(json_encode($resArray));

  }
  
}

disconnect($dbconn);

?>