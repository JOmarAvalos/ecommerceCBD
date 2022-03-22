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

    // Variables 
    $mayoreo = array();
    $mayoreoInt = array();

    // Query verificacion
    $query = "SELECT may.cve_venta_mayoreo, may.nombre, may.email, may.mensaje, may.fch_creacion, 
                     may.fch_modificacion, may.id_usuario_modifica, may.ban_activo 
                FROM cbddesarrollo.cbd_ventas_mayoreo AS may 
               WHERE may.cve_venta_mayoreo = " . $id;
    $result = pg_query($query);
    $numFilas = pg_num_rows($result);

    

    if($numFilas > 0) {


        // Query interno
        $queryInt = "SELECT mays.cve_venta_mayoreo_seguimiento, mays.mensaje, mays.id_usuario_crea, mays.fch_creacion
                       FROM cbddesarrollo.cbd_ventas_mayoreo_seguimiento AS mays
                      WHERE mays.id_venta_mayoreo = " . $id ." 
                      ORDER BY mays.cve_venta_mayoreo_seguimiento";
        $resultInt = pg_query($queryInt);
        $numFilasInt = pg_num_rows($resultInt);

        // Resultado query interno
        if($numFilasInt > 0) {
            while ($rowInt= pg_fetch_assoc($resultInt)) {
              $mayoreoInt[] = $rowInt;
            }
        }

        while( $row = pg_fetch_object ($result)) {
            $mayoreo=array(
                'cve_venta_mayoreo' => $row->cve_venta_mayoreo,
                'nombre'            => $row->nombre,
                'email'             => $row->email,
                'mensaje'           => $row->mensaje,
                'fch_creacion'      => $row->fch_creacion,
                'fch_modificacion'  => $row->fch_modificacion,
                'ban_activo'        => $row->ban_activo,
                'comentarios'       => $mayoreoInt
            );
        }


    }
    die(json_encode($mayoreo));
}

disconnect($dbconn);

?>