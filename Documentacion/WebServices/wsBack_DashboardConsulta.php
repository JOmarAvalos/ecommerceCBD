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



	// Query Clientes Total
    $result = pg_query("SELECT count(*) as totalClientes
    					  FROM cbddesarrollo.cbd_clientes ")



    // Query Pedidos Total
    $result = pg_query("SELECT count(*) as totalPedidos
    					  FROM cbddesarrollo.cbd_pedidos ")



    // Query Inventario Total
    $result = pg_query("SELECT count(*) as totalInventario
    					  FROM cbddesarrollo.cbd_articulos ")



    // Query Mayoreo mensajes Total





}else{
    $response["success"] = 0;
    $response["message"] = "Falla en comunicación, vuelva a intentarlo.";
    die(json_encode($response));
}

disconnect($dbconn);