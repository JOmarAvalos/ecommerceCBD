<?php

$db = [
    'host' => 'localhost',
    'port' => '5432',
    'username' => 'disofgis_omar',
    'password' => 'omaravalos',
    'db' => 'disofgis_cbd' 
];

// detalles de la conexion
$conn_string = "host={$db['host']} port={$db['port']} dbname={$db['db']} user={$db['username']} password={$db['password']} options='--client_encoding=UTF8'";

// establecemos una conexion con el servidor postgresSQL
$dbconn = pg_connect($conn_string) or die( "Error al conectar: ".pg_last_error() );

// Revisamos el estado de la conexion en caso de errores. 
if(!$dbconn) {
    echo "Error: No se ha podido conectar a la base de datos<br>";
} else {
    echo "Conexión exitosa<br>";

    $user = "ADMINGENERAL";
    $pass = "ADMINGENERAL";


    $query  = "SELECT * FROM cbddesarrollo.cbd_usuarios WHERE usuario = '".$user."' and contrasena = '".$pass."'";
    echo $query . "<br>";
    $result = pg_query($query) or die('Error message: ' . pg_last_error());
    echo $result . "----<br>";

    $numFilas = pg_num_rows($result);
    echo "---".$numFilas;

    echo "<table>";
    while($row = pg_fetch_assoc($result)){
        echo "<tr>";
        echo "<td align='center' width='200'>" . $row['cve_usuario'] . "</td>";
        echo "<td align='center' width='200'>" . $row['nombre'] . "</td>";
        echo "<td align='center' width='100'>" . $row['paterno'] . "</td>";
        echo "<td align='center' width='100'>" . $row['materno'] . "</td>";
        echo "</tr>";}
    echo "</table>";

    

}

// Close connection
pg_close($dbconn);

?>