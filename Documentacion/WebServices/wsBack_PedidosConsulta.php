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
    $query = "SELECT ped.cve_pedido, ped.telefono_contacto, ped.subtotal, ped.descuento, ped.iva, 
                     ped.costo_envio, ped.total, ped.guia_envio, ped.numero_referencia_pago, ped.fecha_creacion,
                     ped.fch_envio, ped.fch_cancelacion, ped.fch_devolucion, cli.cve_cliente, cli.nombre as clienteNombre,
                     cli.paterno as clientePaterno, cli.materno as clienteMaterno, ccp.nombre as pedidoEstatus, 
                     den.nombre_persona_recibe AS DENombreRecibe, den.pais AS DEPais, den.estado AS DEEstado, den.municipio AS DEMunicipio, 
                     den.colonia AS DEColonia, den.calle AS DECalle, den.numero_exterior AS DENumeroExterior, 
                     den.numero_interior AS DENumeroInterior, den.cp AS DECp, den.telefono AS DETelefono, den.instruccion_extra AS DEInstruccionExtra,
                     dfa.nombre AS DFNombre, dfa.rfc AS DFRfc, dfa.pais AS DFPais, dfa.estado AS DFEstado, dfa.municipio AS DFMunicipio, 
                     dfa.colonia AS DFColonia, dfa.calle AS DFCalle, dfa.numero_exterior AS DFNumeroExterior, 
                     dfa.numero_interior AS DFNumeroInterior, dfa.cp AS DFCp, dfa.telefono AS DFTelefono, cmp.nombre AS MetodoPago
                FROM cbddesarrollo.cbd_pedidos AS ped 
                LEFT JOIN cbddesarrollo.cbd_clientes AS cli ON cli.cve_cliente = ped.id_cliente
                LEFT JOIN cbddesarrollo.cbd_cata_pedio_estatus AS ccp ON ccp.cve_pedido_estatus = ped.id_pedido_estatus
                LEFT JOIN cbddesarrollo.cbd_direcciones_entrega AS den ON den.cve_direccion_entrega = ped.id_direccion_entrega
                LEFT JOIN cbddesarrollo.cbd_direcciones_facturacion AS dfa ON dfa.cve_direccion_facturacion = ped.id_direccion_facturacion
                LEFT JOIN cbddesarrollo.cbd_cata_metodo_pago AS cmp ON cmp.cve_metodo_pago = ped.id_metodo_pago ";
    if($id != "") {
        $query .= " WHERE ped.cve_pedido = " . $id;
    }    

    $result = pg_query($query);
    $numFilas = pg_num_rows($result);

    $pedidos = array();

    if($numFilas > 0) {

        while ($row = pg_fetch_assoc($result)) {
          $pedidos[] = $row;
        }
    }
    die(json_encode($pedidos));
}

disconnect($dbconn);

?>