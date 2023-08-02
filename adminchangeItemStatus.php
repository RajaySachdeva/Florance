<?php
    require('db_conn.php');

    $error = null;
    if(!empty($_GET['item_id'])){
        $item_id = $_GET['item_id'];
    } else if(!empty($_GET['status'])) {
        $status = $_GET['status'];
        
    }else{
        $error = "<p>Error! User Id or Status not found.</p>";
    }

    if($error == null){
        $query="";
        if($status==1){
            $query="Update tblItems set approved=0 where item_id ='$item_id';";

        }else if($status==0){
            $query="Update tblItems set approved=1 where item_id ='$item_id';";
        }
       // $query = "DELETE FROM users WHERE user_id = '$user_id';"; // replace with paramertized query using mysqli_stmt_bind_param
        print($query);
        $result = mysqli_query($dbc, $query);
        
        if($result){
            header("Location: AdminItemsList.php");
            exit;
        } else {
            echo "</br><p>Some error in updating the record</p>";
        }
    } else {
        echo $error;
    }