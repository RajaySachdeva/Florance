<?php
    require('db_conn.php');

    $query = 'SELECT * FROM users;';
    $results = @mysqli_query($dbc,$query);
?>
<html>
    <head>
        
    </head>
    <body>
        <table width="80%">
            <thead>
                <tr align="left">
                    <th>ID</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>province</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    while($row = mysqli_fetch_array($results, MYSQLI_ASSOC)){
                        $str_to_print = "";
                        $str_to_print = "<tr> <td>{$row['user_id']}</td>";
                        $str_to_print .= "<td> {$row['name']}</td>";
                        $str_to_print .= "<td> {$row['email']}</td>";
                        $str_to_print .= "<td> {$row['phone']}</td>";
                        $str_to_print .= "<td> {$row['province']}</td>";
                        $str_to_print .= "<td> <a href='edit_user.php?user_id={$row['user_id']}'>Edit</a> | <a href='delete_user.php?user_id={$row['user_id']}'>Delete</a></tr>";

                        echo $str_to_print;
                    }
                ?>
            </tbody>
        </table>
    </body>
</html>