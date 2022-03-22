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
  $estatus = $_GET['estatus'];

  // Query verificacion
  $query = "SELECT gen.cve_genero, gen.nombre, gen.ban_activo 
              FROM cbddesarrollo.cbd_cata_genero AS gen ";
  if($estatus != "") {
    $query .= " WHERE gen.ban_activo = " . $estatus;
  }

  $result = pg_query($query);
  $numFilas = pg_num_rows($result);

  $genero = array();

  if($numFilas > 0) {

      while ($row = pg_fetch_assoc($result)) {
        $genero[] = $row;
      }
  }
  die(json_encode($genero));
}

disconnect($dbconn);

?>