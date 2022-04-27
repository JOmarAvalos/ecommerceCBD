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
    $cat  = $_GET['cat'];
    $name = $_GET['name'];

    // Query verificacion
    $query = "SELECT distinct(art.nombre),  
                     cma.nombre AS marca, 
                     cca.nombre AS categoria,
                     art.descripcion_larga 
                FROM cbddesarrollo.cbd_articulos AS art
                LEFT JOIN cbddesarrollo.cbd_cata_marcas AS cma ON cma.cve_marca = art.id_marca
                LEFT JOIN cbddesarrollo.cbd_cata_categoria_articulo AS cca ON cca.cve_categoria_articulo = art.id_categoria_articulo 
               WHERE 1 = 1 
                 AND art.ban_activo = 1 ";
    if($cat != "") {
        $query .= " AND cca.cve_categoria_articulo = " . $cat;
    }  
    if($name != "") {
        $query .= " AND art.nombre = '" . $name ."'";
    }  
    $query .= " ORDER BY art.nombre ";

    $result = pg_query($query);
    $numFilas = pg_num_rows($result);

    $inventario = array();

    if($numFilas > 0) {

        while ($row = pg_fetch_assoc($result)) {

            // Imagen
            $query_imagen = "SELECT art.imagen_principal 
                               FROM cbddesarrollo.cbd_articulos AS art 
                              WHERE art.nombre = '".$row['nombre']."' 
                               ORDER BY art.cve_articulo 
                               LIMIT 1";
            $result_imagen = pg_query($query_imagen);
            while ($row_imagen = pg_fetch_assoc($result_imagen)) {
                $row['imagen_principal'] = $row_imagen['imagen_principal'];
            }


            // Precio minimo
            $query_precio_minimo = "SELECT MIN(art.precio) 
                                      FROM cbddesarrollo.cbd_articulos AS art 
                                     WHERE art.nombre = '".$row['nombre']."'";
            $result_precio_minimo = pg_query($query_precio_minimo);
            while ($row_precio_minimo = pg_fetch_assoc($result_precio_minimo)) {
                $row['precio_minimo'] = $row_precio_minimo['min'];
            }


            // Precio maximo
            $query_precio_maximo = "SELECT MAX(art.precio) 
                                      FROM cbddesarrollo.cbd_articulos AS art 
                                     WHERE art.nombre = '".$row['nombre']."'";
            $result_precio_maximo = pg_query($query_precio_maximo);
            while ($row_precio_maximo = pg_fetch_assoc($result_precio_maximo)) {
                $row['precio_maximo'] = $row_precio_maximo['max'];
            }

            $inventario[] = $row;

        }

    }
    die(json_encode($inventario));
}

disconnect($dbconn);

?>