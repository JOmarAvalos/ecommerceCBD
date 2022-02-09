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
    $query = "SELECT art.cve_articulo, art.marca, art.sku, art.nombre, art.concentracion, art.presentacion, art.sabor, 
                     art.descripcion_corta, art.descripcion_larga, art.precio, art.precio_con_descuento, art.inventario_cantidad, art.orden,
                     art.ban_activo, cca.nombre AS categoria, csa.nombre as subcategoria
                FROM cbddesarrollo.cbd_articulos AS art
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