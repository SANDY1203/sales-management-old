
//PROJECT section
function addRecordProject() {
    // get values
	var id = $("#id").val();
    var project_name = $("#project_name").val();
    var project_desc = $("#project_desc").val();
    var project_company_id = $("#project_company_id").val();
	var project_price = $("#project_price").val();
	var project_team = $("#project_team").val();
	var project_status = $("#project_status").val();
	var user_id = $("#user_id3").val();
	

    // Add record
    $.post("ajax/addRecordProject.php", {
		id: id,
        project_name: project_name,
        project_desc: project_desc,
        project_company_id: project_company_id,
        project_price: project_price,
        project_team: project_team,
		project_status: project_status,
        user_id: user_id
		
    }, function (data, status) {
        // close the popup
        $("#add_new_record_modal5").modal("hide");

        // read records again
        readRecordsProject();

        // clear fields from the popup
        $("#id").val("");
        $("#project_name").val("");
        $("#project_desc").val("");
        $("#project_company_id").val("");
        $("#project_price").val("");
        $("#project_team").val("");
		$("#project_status").val("");
     	$("#user_id3").val("");
    });
}

// READ records
function readRecordsProject() {
	var user123 = $("#mainuserid123").val();
    $.get("ajax/readRecordsProject.php?user_id="+user123, {}, function (data, status) {
        $(".records_content5").html(data);
    });
}


function DeleteProject(id) {
    var conf = confirm("Are you sure, do you really want to delete Project?");
    if (conf == true) {
        $.post("ajax/deleteProject.php", {
                id: id
            },
            function (data, status) {
                // reload Contact by using readRecords();
                readRecordsProject();
            }
        );
    }
}

function GetProjectDetails(id) {
    // Add User ID to the hidden field for furture usage
    $("#hidden_project_id").val(id);
    $.post("ajax/readProjectDetails.php", {
            id: id
        },
        function (data, status) {
            // PARSE json data
            var user = JSON.parse(data);
            // Assing existing values to the modal popup fields
            $("#update_project_name").val(user.project_name);
            $("#update_project_desc").val(user.project_desc);
            $("#update_project_company_id").val(user.project_company_id);
            $("#update_project_price").val(user.project_price);
            $("#update_project_team").val(user.project_team);
			$("#update_project_status").val(user.project_status);
            $("#update_user_id2").val(user.user_id);
        }
    );
    // Open modal popup
    $("#update_project_modal").modal("show");
}

function UpdateProjectDetails() {
    // get values
    var project_name = $("#update_project_name").val();
    var project_desc = $("#update_project_desc").val();
    var project_company_id = $("#update_project_company_id").val();
    var project_price = $("#update_project_price").val();
	var project_team = $("#update_project_team").val();
    var project_status = $("#update_project_status").val();
    var user_id = $("#update_user_id2").val();


    // get hidden field value
    var id = $("#hidden_project_id").val();

    // Update the details by requesting to the server using ajax
    $.post("ajax/updateProjectDetails.php", {
           id: id,
        project_name: project_name,
        project_desc: project_desc,
        project_company_id: project_company_id,
        project_price: project_price,
        project_team: project_team,
		project_status: project_status,
        user_id: user_id,
        },
        function (data, status) {
            // hide modal popup
            $("#update_project_modal").modal("hide");
            // reload contact by using readRecords();
            readRecordsProject();
        }
    );
}

$(document).ready(function () {
    // READ recods on page load
    readRecordsProject(); // calling function
});


//TEAM section

function addRecordTeam() {
    // get values
	var team_id = $("#team_id").val();
    var team_name = $("#team_name").val();
    var team_lead = $("#team_lead").val();
    
	

    // Add record
    $.post("ajax/addRecordTeam.php", {
		team_id: team_id,
        team_name: team_name,
		team_lead: team_lead

    }, function (data, status) {
        // close the popup
        $("#add_new_record_modal10").modal("hide");

        // read records again
        readRecordsTeam();

        // clear fields from the popup
        $("#team_id").val("");
        $("#team_name").val("");
        $("#team_lead").val("");
       

    });
}

// READ records
function readRecordsTeam() {
    $.get("ajax/readRecordsTeam.php", {}, function (data, status) {
        $(".records_content10").html(data);
    });
}


function DeleteTeam(team_id) {
    var conf = confirm("Are you sure, do you really want to delete Team?");
    if (conf == true) {
        $.post("ajax/deleteTeam.php", {
                team_id: team_id
            },
            function (data, status) {
                // reload Contact by using readRecords();
                readRecordsTeam();
            }
        );
    }
}

function GetTeamDetails(team_id) {
    // Add User ID to the hidden field for furture usage
    $("#hidden_team_id").val(team_id);
    $.post("ajax/readTeamDetails.php", {
            team_id: team_id
        },
        function (data, status) {
            // PARSE json data
            var user = JSON.parse(data);
            // Assing existing values to the modal popup fields
            
            $("#update_team_name").val(user.team_name);
            $("#update_team_lead").val(user.team_lead);
           
			
        }
    );
    // Open modal popup
    $("#update_team_modal10").modal("show");
}

function UpdateTeamDetails() {
    // get values
    
    var team_name = $("#update_team_name").val();
    var team_lead = $("#update_team_lead").val();
    

    // get hidden field value
    var team_id = $("#hidden_team_id").val();

    // Update the details by requesting to the server using ajax
    $.post("ajax/updateTeamDetails.php", {
           team_id: team_id,
        team_name: team_name,
		team_lead: team_lead
        },
        function (data, status) {
            // hide modal popup
            $("#update_team_modal10").modal("hide");
            // reload contact by using readRecords();
            readRecordsTeam();
        }
    );
}

$(document).ready(function () {
    // READ recods on page load
    readRecordsTeam(); // calling function
});






//TEAM MEMBERS section

function addRecordTeam_Members() {
    // get values
	var team_m_id = $("#team_m_id").val();
    var team_m_first_name = $("#team_m_first_name").val();
    var team_m_last_name = $("#team_m_last_name").val();
    var team_m_position = $("#team_m_position").val();
    var team_m_employement_status = $("#team_m_employement_status").val();
    var team_id = $("#team_id").val();
    
	

    // Add record
    $.post("ajax/addRecordTeam_Members.php", {
		team_m_id: team_m_id,
        team_m_first_name: team_m_first_name,
		team_m_last_name: team_m_last_name,
		team_m_position: team_m_position,
		team_m_employement_status: team_m_employement_status,
		team_id: team_id
		
		

    }, function (data, status) {
        // close the popup
        $("#add_new_record_modal7").modal("hide");

        // read records again
        readRecordsTeam_Members();

        // clear fields from the popup
        $("#team_m_id").val("");
        $("#team_m_first_name").val("");
        $("#team_m_last_name").val("");
        $("#team_m_position").val("");
        $("#team_m_employement_status").val("");
        $("#team_id").val("");
       

    });
}

// READ records
function readRecordsTeam_Members() {
    $.get("ajax/readRecordsTeam_Members.php", {}, function (data, status) {
        $(".records_content7").html(data);
    });
}


function DeleteTeam_Members(team_m_id) {
    var conf = confirm("Are you sure, do you really want to delete Team Members?");
    if (conf == true) {
        $.post("ajax/deleteTeam_Members.php", {
                team_m_id: team_m_id
            },
            function (data, status) {
                // reload Contact by using readRecords();
                readRecordsTeam_Members();
            }
        );
    }
}

function GetTeam_MembersDetails(team_m_id) {
    // Add User ID to the hidden field for furture usage
    $("#hidden_team_members_id").val(team_m_id);
    $.post("ajax/readTeam_MembersDetails.php", {
            team_m_id: team_m_id
        },
        function (data, status) {
            // PARSE json data
            var user = JSON.parse(data);
            // Assing existing values to the modal popup fields
            $("#update_team_m_id").val(user.team_m_id);
            $("#update_team_m_first_name").val(user.team_m_first_name);
            $("#update_team_m_last_name").val(user.team_m_last_name);
            $("#update_team_m_position").val(user.team_m_position);
            $("#update_team_m_employement_status").val(user.team_m_employement_status);
            $("#update_team_id").val(user.team_id);
           
			
        }
    );
    // Open modal popup
    $("#update_team_members_modal").modal("show");
}



function UpdateTeam_MembersDetails() {
    // get values
    

    var team_m_first_name = $("#update_team_m_first_name").val();
    var team_m_last_name = $("#update_team_m_last_name").val();
    var team_m_position = $("#update_team_m_position").val();
    var team_m_employement_status = $("#update_team_m_employement_status").val();
    var team_id = $("#update_team_id").val();
    

    // get hidden field value
    var team_m_id = $("#hidden_team_members_id").val();

    // Update the details by requesting to the server using ajax
    $.post("ajax/updateTeam_MembersDetails.php", {
           team_m_id: team_m_id,
        team_m_first_name: team_m_first_name,
		team_m_last_name: team_m_last_name,
		team_m_position: team_m_position,
		team_m_employement_status: team_m_employement_status,
		team_id: team_id
        },
        function (data, status) {
            // hide modal popup
            $("#update_team_members_modal").modal("hide");
            // reload contact by using readRecords();
            readRecordsTeam_Members();
        }
    );
}

$(document).ready(function () {
    // READ recods on page load
    readRecordsTeam_Members(); // calling function
});







