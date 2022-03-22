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
    $query = "SELECT art.sku, cca.nombre AS categoria, art.descripcion_corta, art.presentacion, 
                     art.precio 
                FROM cbddesarrollo.cbd_articulos AS art
                LEFT JOIN cbddesarrollo.cbd_cata_marcas AS cma ON cma.cve_marca = art.id_marca
                LEFT JOIN cbddesarrollo.cbd_cata_categoria_articulo AS cca ON cca.cve_categoria_articulo = art.id_categoria_articulo
                LEFT JOIN cbddesarrollo.cbd_cata_subcategoria_articulo AS csa ON csa.cve_subcategoria_articulo = art.id_subcategoria_articulo ";
    if($id != "") {
        $query .= " WHERE art.cve_articulo = " . $id;
    }  

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