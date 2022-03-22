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
    $query = "SELECT cata.cve_categoria_articulo, cata.nombre, cata.imagen 
                FROM cbddesarrollo.cbd_cata_categoria_articulo AS cata 
               WHERE cata.ban_activo = 1 ";
    if($id != "") {
        $query .= " AND cata.cve_categoria_articulo = " . $id;
    }  
    $query .= " ORDER BY cata.nombre "; 

    $result = pg_query($query);
    $numFilas = pg_num_rows($result);

    $inventario = array();

    if($numFilas > 0) {

        while ($row = pg_fetch_assoc($result)) {
          $inventario[] = $row;
        }
    }
    die(json_encode($inventario));
}

disconnect($dbconn);

?>