<?php
    require('db_conn.php');

    $error = null;
    if(!empty($_GET['user_id'])){
        $user_id = $_GET['user_id'];
    } else {
        $user_id = null;
        $error = "<p>Error! User Id not found.</p>";
    }

    if($error == null){
        
        $query = "DELETE FROM users WHERE user_id = '$user_id';"; // replace with paramertized query using mysqli_stmt_bind_param
        print($query);
        $result = mysqli_query($dbc, $query);
        
        if($result){
            header("Location: userDetails.php");
            exit;
        } else {
            echo "</br><p>Some error in Deleting the record</p>";
        }
    } else {
        echo $error;
    }
