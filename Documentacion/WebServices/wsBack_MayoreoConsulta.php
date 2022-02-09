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
    $query = "SELECT may.cve_venta_mayoreo, may.nombre, may.email, may.mensaje, may.fch_creacion, may.fch_modificacion, may.id_usuario_modifica,
                     may.ban_activo
                FROM cbddesarrollo.cbd_ventas_mayoreo AS may ";
    if($id != "") {
        $query .= " WHERE may.cve_venta_mayoreo = " . $id;
    } 

    $result = pg_query($query);
    $numFilas = pg_num_rows($result);

    $mayoreo = array();

    if($numFilas > 0) {

        while ($row = pg_fetch_assoc($result)) {
          $mayoreo[] = $row;
        }
    }
    die(json_encode($mayoreo));
}

disconnect($dbconn);

?>