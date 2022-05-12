<?PHP
$order = false;
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Finalize</title>
    <link type="text/css" href="../StyleSheet.css" />
    <style type="text/css">
        img{
            align-self:center;
        }
    </style>
    
</head>
<body>
    <article>
        <?PHP
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if(isset($_POST['btnCancel'])){
            print "<h1>You Order is Terminated</h1>
        <div><img src='terminatedOrder.jpg' alt='Elf Sniper' /><br />
        <p>Per your request we have eliminated that order.  Click <a href='assign11.html'>here to start over</a></p>
        </div>";
        }Else{
        print "<h1>Your order is Completed</h1><br />
        <img src='orderSubmitted.jpg' />";
}
}
?>
        

    </article>
    

</body>
</html>