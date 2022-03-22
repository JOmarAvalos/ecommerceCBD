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
  $query = "SELECT scat.cve_subcategoria_articulo, scat.nombre, scat.ban_activo 
              FROM cbddesarrollo.cbd_cata_subcategoria_articulo AS scat 
             WHERE 1 = 1 ";
  if($estatus != "") {
    $query .= " AND scat.ban_activo = " . $estatus;
  }
  if($id != "") {
    $query .= " AND scat.cve_subcategoria_articulo = " . $id;
  }  

  $result = pg_query($query);
  $numFilas = pg_num_rows($result);

  $subcategoria = array();

  if($numFilas > 0) {

      while ($row = pg_fetch_assoc($result)) {
        $subcategoria[] = $row;
      }
  }
  die(json_encode($subcategoria));
}

disconnect($dbconn);

?>