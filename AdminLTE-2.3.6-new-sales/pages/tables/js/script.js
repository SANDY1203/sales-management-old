

//company section

function addRecordCompany() {
    // get values
	var company_id = $("#company_id").val();
    var company_name = $("#company_name").val();
    var company_address = $("#company_address").val();
    var company_phone = $("#company_phone").val();
	var company_email = $("#company_email").val();
	var user_id = $("#user_id").val();

    // Add record
    $.post("ajax/addRecordCompany.php", {
        company_id: company_id,
        company_name: company_name,
        company_address: company_address,
        company_phone: company_phone,
        company_email: company_email,
        user_id: user_id
    }, function (data, status) {
        // close the popup
        $("#add_new_record_modal1").modal("hide");

        // read records again
        readRecordsCompany();

        // clear fields from the popup
        $("#company_id").val("");
        $("#company_name").val("");
        $("#company_address").val("");
        $("#company_phone").val("");
        $("#company_email").val("");
        $("#user_id").val("");
    });
}

// READ records
function readRecordsCompany() {
    $.get("ajax/readRecordsCompany.php", {}, function (data, status) {
        $(".records_content1").html(data);
    });
}


function DeleteCompany(company_id) {
    var conf = confirm("Are you sure, do you really want to delete Company?");
    if (conf == true) {
        $.post("ajax/deleteCompany.php", {
                company_id: company_id
            },
            function (data, status) {
                // reload Company by using readRecords();
                readRecordsCompany();
            }
        );
    }
}

function GetCompanyDetails(company_id) {
    // Add User ID to the hidden field for furture usage
    $("#hidden_company_id").val(company_id);
    $.post("ajax/readCompanyDetails.php", {
            company_id: company_id
        },
        function (data, status) {
            // PARSE json data
            var user = JSON.parse(data);
            // Assing existing values to the modal popup fields
            $("#update_company_name").val(user.company_name);
            $("#update_company_address").val(user.company_address);
            $("#update_company_phone").val(user.company_phone);
            $("#update_company_email").val(user.company_email);
            $("#update_user_id").val(user.user_id);
        }
    );
    // Open modal popup
    $("#update_company_modal").modal("show");
}

function UpdateCompanyDetails() {
    // get values
    var company_name = $("#update_company_name").val();
    var company_address = $("#update_company_address").val();
    var company_phone = $("#update_company_phone").val();
    var company_email = $("#update_company_email").val();
    var user_id = $("#update_user_id").val();

    // get hidden field value
    var company_id = $("#hidden_company_id").val();

    // Update the details by requesting to the server using ajax
    $.post("ajax/updateCompanyDetails.php", {
            company_id: company_id,
            company_name: company_name,
            company_address: company_address,
            company_phone: company_phone,
            company_email: company_email,
            user_id: user_id
        },
        function (data, status) {
            // hide modal popup
            $("#update_company_modal").modal("hide");
            // reload Users by using readRecords();
            readRecordsCompany();
        }
    );
}

$(document).ready(function () {
    // READ recods on page load
    readRecordsCompany(); // calling function
});






//contact section
function addRecordContact() {
    // get values
	var id = $("#id").val();
    var contact_name = $("#contact_name").val();
    var contact_position = $("#contact_position").val();
    var contact_number_one = $("#contact_number_one").val();
	var contact_number_two = $("#contact_number_two").val();
	var contact_email_one = $("#contact_email_one").val();
	var contact_email_two = $("#contact_email_two").val();
	var contact_company_allo = $("#contact_company_allo").val();

    // Add record
    $.post("ajax/addRecordContact.php", {
		id: id,
        contact_name: contact_name,
        contact_position: contact_position,
        contact_number_one: contact_number_one,
        contact_number_two: contact_number_two,
        contact_email_one: contact_email_one,
		contact_email_two: contact_email_two,
        contact_company_allo: contact_company_allo
    }, function (data, status) {
        // close the popup
        $("#add_new_record_modal4").modal("hide");

        // read records again
        readRecordsContact();

        // clear fields from the popup
        $("#id").val("");
        $("#contact_name").val("");
        $("#contact_position").val("");
        $("#contact_number_one").val("");
        $("#contact_number_two").val("");
        $("#contact_email_one").val("");
		$("#contact_email_two").val("");
        $("#contact_company_allo").val("");
    });
}

// READ records
function readRecordsContact() {
    $.get("ajax/readRecordsContact.php", {}, function (data, status) {
        $(".records_content4").html(data);
    });
}


function DeleteContact(id) {
    var conf = confirm("Are you sure, do you really want to delete Contact?");
    if (conf == true) {
        $.post("ajax/deleteContact.php", {
                id: id
            },
            function (data, status) {
                // reload Contact by using readRecords();
                readRecordsContact();
            }
        );
    }
}

function GetContactDetails(id) {
    // Add User ID to the hidden field for furture usage
    $("#hidden_contact_id").val(id);
    $.post("ajax/readContactDetails.php", {
            id: id
        },
        function (data, status) {
            // PARSE json data
            var user = JSON.parse(data);
            // Assing existing values to the modal popup fields
            $("#update_contact_name").val(user.contact_name);
            $("#update_contact_position").val(user.contact_position);
            $("#update_contact_number_one").val(user.contact_number_one);
            $("#update_contact_number_two").val(user.contact_number_two);
            $("#update_contact_email_one").val(user.contact_email_one);
			$("#update_contact_email_two").val(user.contact_email_two);
            $("#update_contact_company_allo").val(user.contact_company_allo);
        }
    );
    // Open modal popup
    $("#update_contact_modal").modal("show");
}

function UpdateContactDetails() {
    // get values
    var contact_name = $("#update_contact_name").val();
    var contact_position = $("#update_contact_position").val();
    var contact_number_one = $("#update_contact_number_one").val();
    var contact_number_two = $("#update_contact_number_two").val();
	var contact_email_one = $("#update_contact_email_one").val();
    var contact_email_two = $("#update_contact_email_two").val();
    var contact_company_allo = $("#update_contact_company_allo").val();

    // get hidden field value
    var id = $("#hidden_contact_id").val();

    // Update the details by requesting to the server using ajax
    $.post("ajax/updateContactDetails.php", {
            id: id,
        contact_name: contact_name,
        contact_position: contact_position,
        contact_number_one: contact_number_one,
        contact_number_two: contact_number_two,
        contact_email_one: contact_email_one,
		contact_email_two: contact_email_two,
        contact_company_allo: contact_company_allo
        },
        function (data, status) {
            // hide modal popup
            $("#update_contact_modal").modal("hide");
            // reload contact by using readRecords();
            readRecordsContact();
        }
    );
}

$(document).ready(function () {
    // READ recods on page load
    readRecordsContact(); // calling function
});











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
    $.get("ajax/readRecordsProject.php", {}, function (data, status) {
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







//PROSERV section

function addRecordProserv() {
    // get values
	var id = $("#id").val();
    var product_name = $("#product_name").val();
    var product_description = $("#product_description").val();
    var product_start_price = $("#product_start_price").val();
	var product_end_price = $("#product_end_price").val();
	var category = $("#category").val();
	

    // Add record
    $.post("ajax/addRecordProserv.php", {
		id: id,
        product_name: product_name,
        product_description: product_description,
        product_start_price: product_start_price,
        product_end_price: product_end_price,
        category: category

    }, function (data, status) {
        // close the popup
        $("#add_new_record_modal99").modal("hide");

        // read records again
        readRecordsProserv();

        // clear fields from the popup
        $("#id").val("");
        $("#product_name").val("");
        $("#product_description").val("");
        $("#product_start_price").val("");
        $("#product_end_price").val("");
        $("#category").val("");

    });
}

// READ records
function readRecordsProserv() {
    $.get("ajax/readRecordsProserv.php", {}, function (data, status) {
        $(".records_content99").html(data);
    });
}


function DeleteProserv(id) {
    var conf = confirm("Are you sure, do you really want to delete Proserv?");
    if (conf == true) {
        $.post("ajax/deleteProserv.php", {
                id: id
            },
            function (data, status) {
                // reload Contact by using readRecords();
                readRecordsProserv();
            }
        );
    }
}

function GetProservDetails(id) {
    // Add User ID to the hidden field for furture usage
    $("#hidden_id").val(id);
    $.post("ajax/readProservDetails.php", {
            id: id
        },
        function (data, status) {
            // PARSE json data
            var user = JSON.parse(data);
            // Assing existing values to the modal popup fields
            $("#update_product_name").val(user.product_name);
            $("#update_product_description").val(user.product_description);
            $("#update_product_start_price").val(user.product_start_price);
            $("#update_product_end_price").val(user.product_end_price);
            $("#update_category").val(user.category);
			
        }
    );
    // Open modal popup
    $("#update_proserv_modal99").modal("show");
}

function UpdateProservDetails() {
    // get values
    var product_name = $("#update_product_name").val();
    var product_description = $("#update_product_description").val();
    var product_start_price = $("#update_product_start_price").val();
    var product_end_price = $("#update_product_end_price").val();
	var category = $("#update_category").val();


    // get hidden field value
    var id = $("#hidden_id").val();

    // Update the details by requesting to the server using ajax
    $.post("ajax/updateProservDetails.php", {
            id: id,
        product_name: product_name,
        product_description: product_description,
        product_start_price: product_start_price,
        product_end_price: product_end_price,
        category: category
        },
        function (data, status) {
            // hide modal popup
            $("#update_proserv_modal99").modal("hide");
            // reload contact by using readRecords();
            readRecordsProserv();
        }
    );
}

$(document).ready(function () {
    // READ recods on page load
    readRecordsProserv(); // calling function
});









//PROSERV_PROJECT section

function addRecordProserv_Project() {
    // get values
	var id = $("#id").val();
    var proserv_id = $("#proserv_id1").val();
    var project_contractor_id = $("#project_contractor_id1").val();
    var project_price = $("#project_price1").val();
	var project_team = $("#project_team1").val();
	var project_status = $("#project_status1").val();
	var category_proserv_project = $("#category_proserv_project1").val();
	

    // Add record
    $.post("ajax/addRecordProserv_Project.php", {
		id: id,
        proserv_id: proserv_id,
        project_contractor_id: project_contractor_id,
        project_price: project_price,
        project_team: project_team,
        project_status: project_status,
		category_proserv_project: category_proserv_project

    }, function (data, status) {
        // close the popup
        $("#add_new_record_modal6").modal("hide");

        // read records again
        readRecordsProserv_Project();

        // clear fields from the popup
        $("#id").val("");
        $("#proserv_id1").val("");
        $("#project_contractor_id1").val("");
        $("#project_price1").val("");
        $("#project_team1").val("");
        $("#project_status1").val("");
		$("#category_proserv_project1").val("");

    });
}

// READ records
function readRecordsProserv_Project() {
    $.get("ajax/readRecordsProserv_Project.php", {}, function (data, status) {
        $(".records_content6").html(data);
    });
}


function DeleteProserv_Project(id) {
    var conf = confirm("Are you sure, do you really want to delete Proserv_Project?");
    if (conf == true) {
        $.post("ajax/deleteProserv_Project.php", {
                id: id
            },
            function (data, status) {
                // reload Contact by using readRecords();
                readRecordsProserv_Project();
            }
        );
    }
}

function GetProserv_ProjectDetails(id) {
    // Add User ID to the hidden field for furture usage
    $("#hidden_proserv_project_id").val(id);
    $.post("ajax/readProserv_ProjectDetails.php", {
            id: id
        },
        function (data, status) {
            // PARSE json data
            var user = JSON.parse(data);
            // Assing existing values to the modal popup fields
            $("#update_proserv_id").val(user.proserv_id);
            $("#update_project_contractor_id").val(user.project_contractor_id);
            $("#update_project_price1").val(user.project_price);
            $("#update_project_team1").val(user.project_team);
            $("#update_project_status1").val(user.project_status);
			$("#update_category_proserv_project").val(user.category_proserv_project);
			
        }
    );
    // Open modal popup
    $("#update_proserv_project_modal").modal("show");
}

function UpdateProserv_ProjectDetails() {
    // get values
    var proserv_id = $("#update_proserv_id").val();
    var project_contractor_id = $("#update_project_contractor_id").val();
    var project_price = $("#update_project_price1").val();
    var project_team = $("#update_project_team1").val();
	var project_status = $("#update_project_status1").val();
	var category_proserv_project = $("#update_category_proserv_project").val();


    // get hidden field value
    var id = $("#hidden_proserv_project_id").val();

    // Update the details by requesting to the server using ajax
    $.post("ajax/updateProserv_ProjectDetails.php", {
           id: id,
        proserv_id: proserv_id,
        project_contractor_id: project_contractor_id,
        project_price: project_price,
        project_team: project_team,
        project_status: project_status,
		category_proserv_project: category_proserv_project
        },
        function (data, status) {
            // hide modal popup
            $("#update_proserv_project_modal").modal("hide");
            // reload contact by using readRecords();
            readRecordsProserv_Project();
        }
    );
}

$(document).ready(function () {
    // READ recods on page load
    readRecordsProserv_Project(); // calling function
});
