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
    $cat = $_GET['cat'];

    // Query verificacion
    $query = "SELECT art.cve_articulo, art.id_marca, art.sku, art.nombre, art.concentracion, art.presentacion, art.sabor, 
                     art.descripcion_corta, art.descripcion_larga, art.precio, art.precio_con_descuento, art.inventario_cantidad, 
                     art.orden, art.id_categoria_articulo, art.id_subcategoria_articulo, art.imagen_principal,
                     art.ban_activo, cma.nombre AS marca, cca.nombre AS categoria 
                FROM cbddesarrollo.cbd_articulos AS art
                LEFT JOIN cbddesarrollo.cbd_cata_marcas AS cma ON cma.cve_marca = art.id_marca
                LEFT JOIN cbddesarrollo.cbd_cata_categoria_articulo AS cca ON cca.cve_categoria_articulo = art.id_categoria_articulo 
               WHERE 1 = 1 
                 AND art.ban_activo = 1 ";
    if($id != "") {
        $query .= " AND art.cve_articulo = " . $id;
    }  
    if($cat != "") {
        $query .= " AND cca.cve_categoria_articulo = " . $cat;
    }  
    $query .= " ORDER BY art.nombre ";

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