<?php

 
    /*if($_GET){
        $user_id = $_GET['user_id'];
		
	
		 // print_r($_GET);       
    }else{
      echo "Url has no user";
    }
	
	 //include Database connection file 
		

	if(isset($_POST))
	{
		// include Database connection file 
		

		// get values 
		/*$company_id = $_POST['company_id'];
        $company_name = $_POST['company_name'];
		$company_address = $_POST['company_address'];
        $company_phone = $_POST['company_phone'];
        $company_email = $_POST['company_email'];
		$user_id = $_POST['id'];*/
		
	
		
   /*$query = mysql_query("SELECT * FROM company WHERE user_id = '$user_id'");

   // fetch the result / convert resulte in to array 

   WHILE ($rows = mysql_fetch_array($query)):
  
	  $user_id = $rows['user_id'];
      $company_id = $rows['company_id'];
	  $company_name = $rows['company_name']; // print_r($_GET);       
	  $company_address = $rows['company_address'];
	

	  echo "$user_id";
	  echo "$company_name";
	  echo "$company_address";
	  echo "$company_id";
	  
     endwhile;
	}*/

include("ajax/db_connection.php");

$number = 1;
$total = 0;

    foreach($_POST['checkboxName'] as $value)
{
    echo $value.'<br>';
	
	$query = mysql_query("SELECT * FROM projects WHERE id = '$value'");
	WHILE ($rows = mysql_fetch_array($query)):
	  ${"project_name$number"} = $rows['project_name'];
      ${"project_desc$number"} = $rows['project_desc'];
	  ${"project_company_id$number"} = $rows['project_company_id']; // print_r($_GET);       
	  ${"project_price$number"} = $rows['project_price'];
	  ${"project_status$number"} = $rows['project_status'];
	  
	  

	  echo "${"project_name$number"}";
	  
	
	endwhile;
	$query1 = mysql_query("SELECT * FROM company WHERE company_id = '${"project_company_id$number"}'");
	WHILE ($rows = mysql_fetch_array($query1)):
	  ${"company_id$number"} = $rows['company_id'];
      ${"company_name$number"} = $rows['company_name'];
	  ${"company_address$number"} = $rows['company_address']; // print_r($_GET);       
	  ${"company_phone$number"} = $rows['company_phone'];
	  ${"company_email$number"} = $rows['company_email'];
	  
	  
	

	  echo "${"company_id$number"}";
	  $total = $total + ${"project_price$number"};
	  
	$number++;
	endwhile;
	
}
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>AdminLTE 2 | Invoice</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.6 -->
  <link rel="stylesheet" href="../../bootstrap/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="../../dist/css/AdminLTE.min.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>
<body onload="window.print();">
<div class="wrapper">
  <!-- Main content -->
  <!-- Main content -->
    <section class="invoice">
       <p><img alt="" src="http://localhost/sales-management/INVOICE.png" style="height:110px; width:720px" /></p>

<table align="left" border="0" cellpadding="0" cellspacing="0" style="height:200px; width:720px">
	<tbody>
		<tr>
			<td style="width:360px; text-align:center;">
			<p> <strong> INVOICE TO</strong></p>

			<p> <?php echo ${"company_name1"}; ?></p>
			
			<p> <?php echo ${"company_address1"}; ?></p>
			</td>
			<td style="height:100px; text-align:justify; vertical-align:middle; white-space:nowrap">
			<table align="center" border="0" cellpadding="0" cellspacing="0" style="height:100px; width:375px">
				<tbody>
					<tr>
						<td style="width:180px; text-align:center;"><strong>INVOICE NO.</strong></td>
						<td style="width:180px; text-align:center;">&nbsp;</td>
					</tr>
					<tr>
						<td style="width:180px; text-align:center;"><strong>INVOICE DATE.</strong></td>
						<td style="width:180px; text-align:center;"><?php echo date("d/m/Y"); ?></td>
					</tr>
					<tr>
						<td style="width:180px; text-align:center;"><strong>PO No.</strong></td>
						<td style="width:180px; text-align:center;">&nbsp;</td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
		<tr>
			<td style="white-space:nowrap; width:360px"></td>
			<td style="width:360px; text-align:center;">
			<p><strong> TOTAL AMOUNT</strong></p>

			<p><?php echo $total +($total * 0.16)?></p>
			</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<table align="left" border="0" cellpadding="0" cellspacing="0" style="width:720px">
	<tbody>
		<tr>
			<td style="height:50px; text-align:center; vertical-align:middle; white-space:nowrap; width:360px" align="center"><strong>Item Description</strong></td>
			<td style="text-align:center; vertical-align:middle; white-space:nowrap; width:120px" align="center"> <strong>Unite Prise</strong></td>
			<td style="text-align:center; vertical-align:middle; white-space:nowrap; width:120px" align="center"> <strong>Qty</strong></td>
			<td align="center"><strong>Total</strong></td>
		</tr>
		<?php
		
		$data = "";
		for ($x = 1; $x < $number; $x++){
		
		$data .='<tr>
			
				<td align="center">'. ${"project_name$x"} . '</td>
			     <td align="center">'. ${"project_price$x"} . '</td>
				 <td align="center"> 1 </td>
				 <td align="center">'. ${"project_price$x"} . '</td>
				 
				
				
    		</tr>';
			
		}
		echo $data;
		
		?>
	</tbody>
</table>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<table border="0" cellpadding="0" cellspacing="0" style="width:720px;">
	<tbody>
		<tr>
			<td style="background-color:black; width:180px; text-align:center;"> <strong><font color="white">PIN No.</font></strong></td>
			<td style="background-color:black; width:180px; text-align:center;"><font color="white">Po...................</font></td>
			<td style="background-color:black; width:180px; text-align:center;"><strong><font color="white">Subtotal</font></strong></td>
			<td style="background-color:black; width:180px; text-align:center;"><font color="white"><?php echo $total ?></font></td>
		</tr>
		<tr>
			<td style="background-color:black; width:180px; text-align:center;"> <strong><font color="white">Served By:</font></strong></td>
			<td style="background-color:black; width:180px; text-align:center;"><font color="white">Bhavya barot</font></td>
			<td style="background-color:black; width:180px; text-align:center;"> <strong><font color="white">TAX: VAT 16%</font></strong></td>
			<td style="background-color:black; width:180px; text-align:center;"><font color="white"><?php echo $total * 0.16 ?></font></td>
		</tr>
		
	</tbody>
</table>

<table border="0" cellpadding="0" cellspacing="0" style="width:720px">
	<tbody>
		<tr>
			<td style="background-color:black; width:180px; text-align:center;"><strong><font color="white">MOBILE</font></strong></td>
			<td style="background-color:black; width:180px; text-align:center;"><font color="white">8054565454</font></td>
			<td style="background-color:black; width:180px; text-align:center;"> <strong><font color="white">GRAND TOTAL</font></strong></td>
<td style="background-color:black; width:180px; text-align:center;"><font color="white"><?php echo $total +($total * 0.16)?></font></td>
		</tr>
		<tr>
			<td style="background-color:black; width:180px; text-align:center;"><strong><font color="white">EMAIL</font></strong></td>
			<td style="background-color:black; width:180px; text-align:center;"><font color="white">abc@biocart.io</font></td>
			<td style="background-color:black; width:180px; text-align:center;"><font color="white"></font></td>
			<td style="background-color:black; width:180px; text-align:center;"><font color="white"></font></td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<hr />
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<strong> &nbsp;Sign&amp;Omcal Stamp</strong></p>

<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>

<p>&nbsp;</p>

<hr />
<p>&nbsp;</p>

<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<strong> THANK YOU</strong></p>

<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;we really appreciate your business</p>

<hr />
<p>&nbsp;</p>

<p>&nbsp;</p>

<hr />
<p>&nbsp;</p>

      <!-- this row will not appear when printing -->
      <div class="row no-print">
        <div class="col-xs-12">
          <a href="invoice-print.html" target="_blank" class="btn btn-default"><i class="fa fa-print"></i> Print</a>
          <button type="button" class="btn btn-success pull-right"><i class="fa fa-credit-card"></i> Submit Payment
          </button>
          <button type="button" class="btn btn-primary pull-right" style="margin-right: 5px;">
            <i class="fa fa-download"></i> Generate PDF
          </button>
        </div>
      </div>
    </section>
    <!-- /.content -->
  <!-- /.content -->
</div>
<!-- ./wrapper -->
</body>
</html>
