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

    // Variable de entrada
    $name = $_GET['name'];

    // Query verificacion
    $query = "SELECT distinct(art.sabor) 
                FROM cbddesarrollo.cbd_articulos AS art  
               WHERE 1 = 1 ";
    if($name != "") {
        $query .= " AND art.nombre = '" . $name ."'";
    }  
    $query .= " ORDER BY art.sabor ";


    $result = pg_query($query);
    $numFilas = pg_num_rows($result);

    $articuloSabor = array();

    if($numFilas > 0) {

        while ($row = pg_fetch_assoc($result)) {
            $articuloSabor[] = $row;
        }
    }
    die(json_encode($articuloSabor));
}

disconnect($dbconn);

?>