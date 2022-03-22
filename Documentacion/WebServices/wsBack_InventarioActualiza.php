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
  $id                 = trim($_GET['id']);
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


  // Query update
  $query  = " UPDATE cbddesarrollo.cbd_articulos SET ";
  $query .= "    id_marca                 =  ".$marca.", ";
  $query .= "    sku                      = '".$sku."', ";
  $query .= "    nombre                   = '".$nombre."', ";
  $query .= "    id_categoria_articulo    =  ".$categoria.", ";
  $query .= "    id_subcategoria_articulo =  ".$subcategoria.", ";
  $query .= "    concentracion            = '".$concentracion."',  ";
  $query .= "    presentacion             = '".$presentacion."',  ";
  $query .= "    sabor                    = '".$sabor."',  ";
  $query .= "    descripcion_corta        = '".$descripcionCorta."',  ";
  $query .= "    descripcion_larga        = '".$descripcionLarga."',  ";
  $query .= "    precio                   =  ".$precio.", ";
  $query .= "    precio_con_descuento     =  ".$precioConDescuento.", ";
  $query .= "    inventario_cantidad      =  ".$inventarioCantidad.", ";
  $query .= "    id_usuario_modifica      = 1, ";
  $query .= "    fch_modificacion         = now(), ";
  $query .= "    ban_activo               = ".$estatus."";
  $query .= " WHERE cve_articulo          = ".$id."";


  $result = pg_query($query);


  if ($result) {

    $resArray = array('success' => 1, 'message' => '');
    die(json_encode($resArray));

  } else {

    $resArray = array('success' => 0, 'message' => 'No actualizo el registro');
    die(json_encode($resArray));

  }

}

disconnect($dbconn);

?>