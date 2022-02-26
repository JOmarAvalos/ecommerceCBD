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
  $query = "SELECT cli.cve_cliente, cli.nombre, cli.paterno, cli.materno, cli.email, 
                   cli.telefono, 
                   to_char(cli.fch_nacimiento, 'YYYY-MM-DD') AS fch_nacimiento, 
                   cli.fch_creacion, cli.id_genero, 
                   cli.id_ubicacion, cli.id_tipo_cliente, cli.ban_activo, cge.nombre AS genero, 
                   cub.estado AS ubicacion, ctc.nombre AS tipocliente
              FROM cbddesarrollo.cbd_clientes AS cli 
              LEFT JOIN cbddesarrollo.cbd_cata_genero AS cge ON cge.cve_genero = cli.id_genero
              LEFT JOIN cbddesarrollo.cbd_cata_ubicacion AS cub ON cub.cve_ubicacion = cli.id_ubicacion
              LEFT JOIN cbddesarrollo.cbd_cata_tipo_cliente AS ctc ON ctc.cve_tipo_cliente = cli.id_tipo_cliente ";
  if($id != "") {
    $query .= " WHERE cli.cve_cliente = " . $id;
  }                      

  $result = pg_query($query);
  $numFilas = pg_num_rows($result);

  $clientes = array();

  if($numFilas > 0) {

      while ($row = pg_fetch_assoc($result)) {
        $clientes[] = $row;
      }
  }
  die(json_encode($clientes));
}

disconnect($dbconn);

?>