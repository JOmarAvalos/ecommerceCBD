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

  // Query verificacion
  $query = "SELECT ubi.cve_ubicacion, ubi.estado, ubi.ban_activo 
              FROM cbddesarrollo.cbd_cata_ubicacion AS ubi 
             WHERE ubi.pais = 'México'
               AND ubi.ban_activo = 1 ";

  $result = pg_query($query);
  $numFilas = pg_num_rows($result);

  $ubicaciones = array();

  if($numFilas > 0) {

      while ($row = pg_fetch_assoc($result)) {
        $ubicaciones[] = $row;
      }
  }
  die(json_encode($ubicaciones));
}

disconnect($dbconn);

?>