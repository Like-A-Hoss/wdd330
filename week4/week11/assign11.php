<?PHP
    $qty1 = $_GET['Product1qty'];
    $qty2 = $_GET['Product2qty'];
    $qty3 = $_GET['Product3qty'];
    $qty4 = $_GET['Product4qty'];
    $qty5 = $_GET['Product5qty'];
    $qty6 = $_GET['Product6qty'];
    $qty7 = $_GET['Product7qty'];
    $qty8 = $_GET['Product8qty'];
    $qty9 = $_GET['Product9qty'];
    $qty10 = $_GET['Product10qty'];
    $qty11 = $_GET['Product11qty'];
    $qty12 = $_GET['Product12qty'];
    $price1 = 19.99;
    $price2 = 24.99;
    $price3 = 54.99;
    $price4 = 33.99;
    $price5 = 79.99;
    $price6 = 44.99;
    $price7 = 29.99;
    $price8 = 19.99;
    $price9 = 19.99;
    $price10 = 29.99;
    $price11 = 29.99;
    $price12 = 5.99;
    $total1 = $qty1 * $price1;
    $total2 = $qty2 * $price2;
    $total3 = $qty3 * $price3;
    $total4 = $qty4 * $price4;
    $total5 = $qty5 * $price5;
    $total6 = $qty6 * $price6;
    $total7 = $qty7 * $price7;
    $total8 = $qty8 * $price8;
    $total9 = $qty9 * $price9;
    $total10 = $qty10 * $price10;
    $total11 = $qty11 * $price11;
    $total12 = $qty12 * $price12;

    $subTotal = $total1 + $total2 + $total3 + $total4 + $total5 + $total6 + $total7 + $total8 + $total9 + $total10 + $total11 + $total12;
    $shipping = 7.49;
    $tax = $subTotal * 0.051;
    $tax = round($tax, 2);
    $final = $subTotal + $tax +$shipping

?>

    <link rel="stylesheet" type="text/css" href="../StyleSheet.css" />
    <script>
        function onLoad() {
            var goBtn = document.getElementById('process');
            goBtn.disabled = true;

        }

        function ccCheck() {
            var goBtn = document.getElementById('process');
            let cc = document.getElementById('cc').value
            if (cc[0] == "4" && cc.length == 16) {
                document.getElementById('ccIcon').innerHTML = "<img src='Visa_logo_card.png' width='25px' height='auto'>";
                goBtn.disabled = false;
            }
            else if (cc[0] == "5" && cc.length == 16) {
                document.getElementById('ccIcon').innerHTML = "<img src='MasterCard_logo.png' width='25px' height='auto'>";
                goBtn.disabled = false;
            }
            else if (cc[0] == "3" && cc[1] == 4 || cc[1] == 7 && cc.length == 15) {
                document.getElementById('ccIcon').innerHTML = "<img src='american_express_logo.png' width='25px' height='auto'>";
                goBtn.disabled = false;
            }
            else if (cc[0] == "6" && cc.length == 16) {
                document.getElementById('ccIcon').innerHTML = "<img src='discover.jpg' width='25px' height='auto'>";
                goBtn.disabled = false;
            }
            else {
                let message = "Invalid Credit Card";
                message = message.fontcolor('red');
                document.getElementById('ccIcon').innerHTML = message;
                goBtn.disabled = true;
            }
        }
    </script>
</head>
<body>
    <article>
        <table width="200px" align="center">
            <tr><th>Item</th><th>Unit Price</th><th>qty</th><th>unit<br />total</th></tr>
         <?PHP
         if($qty1 > 0){
            print "<tr><td>Hill B</td><td>$price1</td><td>$qty1</td><td>$total1</td></tr> ";
        }
        if($qty2 > 0){
            print "<tr><td>Magic Well</td><td>$price2</td><td>$qty2</td><td>$total2</td></tr> ";
        }
        if($qty3 > 0){
            print "<tr>></td><td>Hill B</td><td>$price3</td><td>$qty3</td><td>$total3</td></tr> ";
        }
        if($qty4 > 0){
            print "<tr></td><td>Gothic Space Electric Alter</td><td>$price4</td><td>$qty4</td><td>$total4</td></tr> ";
        }
        if($qty5 > 0){
            print "<tr><td>Gothic Space Temple</td><td>$price5</td><td>$qty5</td><td>$total5</td></tr> ";
        }
        if($qty6 > 0){
            print "<tr></td><td>GOthic Space Walls</td><td>$price6</td><td>$qty6</td><td>$total6</td></tr> ";
        }
        if($qty7 > 0){
            print "<tr></td><td>Temple Wall</td><td>$price7</td><td>$qty7</td><td>$total7</td></tr> ";
        }
        if($qty8 > 0){
            print "<tr></td><td>Arch Wall Right</td><td>$price8</td><td>$qty8</td><td>$total8</td></tr> ";
        }
        if($qty9 > 0){
            print "<tr><td>Arch Wall Left</td><td>$price9</td><td>$qty9</td><td>$total9</td></tr> ";
        }
        if($qty10 > 0){
            print "<tr><td>Space Apartments</td><td>$price10</td><td>$qty10</td><td>$total10</td></tr> ";
        }
        if($qty11 > 0){
            print "<tr><td>Science Fiction Buildings/td><td>$price11</td><td>$qty11</td><td>$total11</td></tr> ";
        }
        if($qty12 > 0){
            print "<tr><td>Shipping Container</td><td>$price12</td><td>$qty12</td><td>$total12</td></tr> ";
        }
        print "Subtotal: $subTotal <br />";
        print "tax: $tax <br />";
        print "Shipping:$shipping by USPS Priority Mail <br />";
        print "Total Bill: $final <br />";
    ?>
          
        </table>
         <form action="assign11a.php" method="post" onload="onLoad()">
               <label for='firstName'>First Name:</label><input type='text' id='firstName' /><label for='lastName'>Last Name:</label><input type='text' id='lastName' /><br />
               <label for='phone'>Phone Number:</label><input type='tel' id='phone' /><br />
               <label for='address'>Address</label><textarea id='address'></textarea><label for='cc'> Creditcard Number</label> <input type='number' id='cc' size='16' onblur='ccCheck()' /><div id='ccIcon'></div><label>Experation Date</label><input type='number' min='1' max='12' id='month' value='1' /><input type='number' min='2021' max='2024' value='2021' /> <br />
               <button type="submit" name="btnCancel">cancel</button><button type='submit' id="process" name='process'>submit</button>
      </form>
        <div onload=""

    </article>
   
   

</body>
</html>