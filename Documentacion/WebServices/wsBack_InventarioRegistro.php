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
  $marca              = trim($_GET['marca']);
  $sku                = trim($_GET['sku']);
  $nombre             = trim($_GET['nombre']);
  $categoria          = trim($_GET['categoria']);
  $subcategoria       = trim($_GET['subcategoria']);
  $concentracion      = trim($_GET['concentracion']);
  $presentacion       = trim($_GET['presentacion']);
  $sabor              = trim($_GET['sabor']);
  $descripcionCorta   = trim($_GET['descripcioncorta']);
  $descripcionLarga   = trim($_GET['descripcionlarga']);
  $precio             = trim($_GET['precio']);
  $precioConDescuento = trim($_GET['preciocondescuento']);
  $inventarioCantidad = trim($_GET['inventariocantidad']);
  $estatus            = trim($_GET['estatus']);


  // Query insert
  $query = "INSERT INTO cbddesarrollo.cbd_articulos (
             id_marca,
             sku,
             nombre,
             id_categoria_articulo,
             id_subcategoria_articulo,
             concentracion,
             presentacion,
             sabor,
             descripcion_corta,
             descripcion_larga,
             precio,
             precio_con_descuento,
             inventario_cantidad,
             id_usuario_crea,
             fch_creacion,
             orden,
             ban_activo
          ) VALUES (
             ".$marca.", 
            '".$sku."', 
            '".$nombre."', 
             ".$categoria.", 
             ".$subcategoria.",
            '".$concentracion."', 
            '".$presentacion."', 
            '".$sabor."',
            '".$descripcionCorta."',
            '".$descripcionLarga."',
             ".$precio.",
             ".$precioConDescuento.",
             ".$inventarioCantidad.",
             1,
             now(),
             1,
             ".$estatus."
          )";

  $result = pg_query($query);

  if ($result) {

    $resArray = array('success' => 1, 'message' => '');
    die(json_encode($resArray));

  } else {

    $resArray = array('success' => 0, 'message' => 'No guardo el registro     '.$query);
    die(json_encode($resArray));

  }

}

disconnect($dbconn);

?>