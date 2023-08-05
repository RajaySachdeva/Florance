<?php
    require('db_conn.php');

    $query = 'SELECT * FROM tblItems';
    $results = @mysqli_query($dbc,$query);
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Florence Shop - Home</title>
    <link
      rel="stylesheet"
      
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.5/css/jquery.dataTables.css" />
    <script src="https://cdn.datatables.net/1.13.5/js/jquery.dataTables.js"></script>
    <style>
        
      body {
        margin: 0;
        padding: 0;
        font-family: "Arial", sans-serif;
        background-color: #f9f9f9;
        color: #333;
      }

      #header {
        background-color: #ef84b3;
        color: #fff;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      #logo img {
        height: 50px;
      }

      #header-icons a:last-child {
        margin-left: 0;
      }

      #navigation {
        background-color: #ef84b3;
        padding: 10px 0;
        text-align: center;
      }

      #navigation ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      #navigation li {
        display: inline-block;
      }

      #navigation li a {
        display: inline-block;
        padding: 10px 20px;
        margin: 5px;
        color: #fff;
        text-decoration: none;
        background-color: #ef84b3;
        border-radius: 20px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
        transition: background-color 0.3s ease;
      }

      #navigation li a:hover {
        background-color: #c95b88;
      }

      #content {
        padding: 40px;
        text-align: center;
      }

      main {
        margin: 20px;
        text-align: center;
        font-family: "Arial", sans-serif;
      }

      .icon {
        display: inline-block;
        position: fixed;
        top: 20px;
        right: 20px;
        padding-left: 10px;
        margin-right: 10px;
        color: white;
      }

      .product {
        display: inline-block;
        margin: 20px;
      }

      .product p {
        color: #555;
        font-size: 14px;
        margin-top: 10px;
      }

      .product a {
        text-decoration: none;
      }

      footer {
        background-color: #f1f1f1;
        padding: 20px;
        text-align: center;
        font-size: 12px;
        color: #555;
      }

      /* Added Styles */

      h1 {
        color: #ef84b3;
        font-size: 36px;
        margin-bottom: 20px;
      }

      h2 {
        color: #ef84b3;
        font-size: 24px;
        margin-bottom: 20px;
      }

      .product img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease;
      }

      .product img:hover {
        transform: scale(1.05);
      }

      footer p {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <body>
      <div class="icon">
        <a href="cart.html"><i class="fa fa-shopping-cart" style="font-size: 40px; color: white;"></i></a>
        <a href="search.html"><i class="fa fa-search" style="font-size: 36px; color: white;"></i></a>
        <a href="login.html"><i class="fa fa-user-o" style="font-size: 36px; color: white;"></i></a>
  
      </div>

    <header id="header">
      <div id="logo"><img src="logo.png" alt="Logo"></div>
    </header>

    <nav id="navigation">
      <ul>
        <li><a href="userDetails.php">Users</a></li>
        <li><a href="AdminItemsList.php" >Items</a></li>
        <li><a href="AdminDiscussions.php">Discussions</a></li>
        <li><a href="AdminOrders.html">Orders</a></li>
        <li><a href="adminFeedback.php">Feedback</a></li>
      </ul>
    </nav>

    <div id="content">
      <h1>Welcome to Florence Shop</h1>
    </div>

    <main>
      <h2>Items List</h2>
      <table id="myTable"class="cell-border" cellspacing="0" width="90%" class="display">
        <thead>
            <tr align="left">
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php
                while($row = mysqli_fetch_array($results, MYSQLI_ASSOC)){
                    $str_to_print = "";
                    $str_to_print = "<tr> <td>{$row['item_id']}</td>";
                    $str_to_print .= "<td> {$row['name']}</td>";
                    $str_to_print .= "<td> CAD  $ {$row['price']}</td>";
                    if($row['approved']==1){
                    $str_to_print .= "<td> <a
                     href='adminEditItems.php?item_id={$row['item_id']}'>Details</a>|<a class='delete' href='adminchangeItemStatus.php?item_id={$row['item_id']}&status={$row['approved']}'>Disapprove</a></tr>";
                }else if($row['approved']==0)
                {
                    $str_to_print .= "<td> <a href='adminEditItems.php?item_id={$row['item_id']}'>Details</a>|<a class='delete' href='adminchangeItemStatus.php?item_id={$row['item_id']}&status={$row['approved']}'>Approve</a></tr>";
                }
                    echo $str_to_print;
                }
            ?>
        </tbody>
    </table>
    </main>
    <script>
        $(document).ready(function () {
            if($('#myTable').length==1){
                //alert("This is an alert message!");
                $('#myTable').DataTable()
            }
//             $('.delete').click(function() {
            
//     if (confirm('Are you sure?')) {
      
//         var url = $(this).attr('href');
//         $('#content').load(url);
//     }
//   });
        });
    </script>
    <footer>
      <p>&copy; 2023 Florence Shop. All rights reserved.</p>
    </footer>

    
  </body>
</html>
