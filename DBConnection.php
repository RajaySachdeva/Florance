<?php
    define('DB_USER', 'florance');
    define('DB_PASSWORD', 'Portal@123');
    define('DB_HOST', 'db4free.net:3306/florance');
    define('DB_NAME', 'florance');

    $dbc = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
        OR die('Could not connect to MySQL: ' . mysqli_connect_error());
    mysqli_set_charset($dbc, 'utf8');

    function prepare_string($dbc, $string) {
        $string = mysqli_real_escape_string($dbc, trim($string));
        return $string;
    }
?>