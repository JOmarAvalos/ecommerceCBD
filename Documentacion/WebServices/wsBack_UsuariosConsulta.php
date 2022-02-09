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
  $id = $_GET['id'];

  // Query verificacion
  $query = "SELECT usu.cve_usuario, usu.usuario, usu.nombre, usu.paterno, usu.materno, 
                   usu.email, cpe.nombre as perfil, usu.ban_activo 
              FROM cbddesarrollo.cbd_usuarios AS usu
              LEFT JOIN cbddesarrollo.cbd_cata_perfil AS cpe ON cpe.cve_perfil = usu.id_perfil ";
  if($id != "") {
    $query .= " WHERE usu.cve_usuario = " . $id;
  }

  $result = pg_query($query);
  $numFilas = pg_num_rows($result);

  $usuarios = array();

  if($numFilas > 0) {

      while ($row = pg_fetch_assoc($result)) {
        $usuarios[] = $row;
      }
  }
  die(json_encode($usuarios));
}

disconnect($dbconn);

?>