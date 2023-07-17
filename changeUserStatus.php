<?php
    require('db_conn.php');

    $error = null;
    if(!empty($_GET['user_id'])){
        $user_id = $_GET['user_id'];
    } else if(!empty($_GET['status'])) {
        $status = $_GET['status'];
        
    }else{
        $error = "<p>Error! User Id not found.</p>";
    }

    if($error == null){
        $query="";
        if($status==1){
            $query="Update users set Approved=0 where user_id ='$user_id';";

        }else if($status==0){
            $query="Update users set Approved=1 where user_id ='$user_id';";
        }
       // $query = "DELETE FROM users WHERE user_id = '$user_id';"; // replace with paramertized query using mysqli_stmt_bind_param
        print($query);
        $result = mysqli_query($dbc, $query);
        
        if($result){
            header("Location: userDetails.php");
            exit;
        } else {
            echo "</br><p>Some error in updating the record</p>";
        }
    } else {
        echo $error;
    }