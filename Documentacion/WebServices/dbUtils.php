<?php

// Abrir conexion a la base de datos
function connect($db)
{
    // Detalles de la conexion
    $conn_string = "host={$db['host']} port={$db['port']} dbname={$db['db']} user={$db['username']} password={$db['password']} options='--client_encoding=UTF8'";

    // Establecemos una conexion con el servidor postgresSQL
    $dbconn = pg_connect($conn_string) or die( "Error al conectar: ".pg_last_error() );
}

// Cerrar conexion a la base de datos
function disconnect($dbconn)
{
    pg_close($dbconn);
}

?>
