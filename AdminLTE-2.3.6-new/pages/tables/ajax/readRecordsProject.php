<?php
	// include Database connection file 
	include("db_connection.php");

	// Design initial table header 
	$data = '<table class="table table-bordered table-striped">
						<tr>
						<th> </th>
							<th>id</th>
					  <th>project_name</th>
                      <th>project_desc</th>
                      <th>project_company_id</th>
					  <th>project_price</th>
					  <th>project_team</th>
					  <th>project_status</th>
					  <th>user_id</th>
							<th>Update</th>
							<th>Delete</th>
							<th>INVOICE</th>
						</tr>';

	$query = "SELECT * FROM projects";

	if (!$result = mysql_query($query)) {
        exit(mysql_error());
    }

    // if query results contains rows then featch those rows 
    if(mysql_num_rows($result) > 0)
    {
    	$number = 1;
    	while($row = mysql_fetch_assoc($result))
    	{
    		$data .= '<tr>
			<td><div class="checkbox">
  <label><input type="checkbox" value="'. $number . '"></label>
</div></td>
				<td>'. $row['id'] . '</td>
			     <td>'. $row['project_name'] . '</td>
				 <td>'. $row['project_desc'] . '</td>
				 <td>'. $row['project_company_id'] . '</td>
				 <td>'. $row['project_price'] . '</td>
				 <td>'. $row['project_team'] . '</td>
				 <td>'. $row['project_status'] . '</td>
                <td>'. $row['user_id'] . '</td>
				
				
				<td>
					<button onclick="GetProjectDetails('.$row['id'].')" class="btn btn-warning">Update</button>
				</td>
				<td>
					<button onclick="DeleteProject('.$row['id'].')" class="btn btn-danger">Delete</button>
				</td>
				<td>
					<button onclick="GetINVOICEDetails('.$row['id'].')" class="btn btn-warning">invoice</button>
				</td>
    		</tr>';
			$number++;
    		
    	}
		//$data .='<button onclick="GetProjectDetails('.$row['id'].')" class="btn btn-warning">INVOICE</button>';
		}
    else
    {
    	// records now found 
    	
    }

    $data .= '</table>';

    echo $data;
?>