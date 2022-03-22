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
  $id      = $_GET['id'];
  $estatus = $_GET['estatus'];

  // Query verificacion
  $query = "SELECT tcl.cve_tipo_cliente, tcl.nombre, tcl.ban_activo 
              FROM cbddesarrollo.cbd_cata_tipo_cliente AS tcl 
             WHERE 1 = 1 ";
  if($estatus != "") {
    $query .= " AND tcl.ban_activo = " . $estatus;
  }
  if($id != "") {
    $query .= " AND tcl.cve_tipo_cliente = " . $id;
  }    

  $result = pg_query($query);
  $numFilas = pg_num_rows($result);

  $clienteTipo = array();

  if($numFilas > 0) {

      while ($row = pg_fetch_assoc($result)) {
        $clienteTipo[] = $row;
      }
  }
  die(json_encode($clienteTipo));
}

disconnect($dbconn);

?>