


function dropDown(){
    var dropDown=`<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Actions
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <button class="dropdown-item btn "  data-action="Edit">Edit</button>
        <button class="dropdown-item btn " data-action="Details">Details</button>
        <button class="dropdown-item btn " data-action="Delete">Delete</button>
    </div>
</div>`;
    
    return dropDown;
}
function editFormOpenWithDetails(student,row){
    // var fname = $('#firstName');
    // var lname = $("#lastName");
    // var phoneNumber = $('#phoneNumber');
    // var address = $("#address");
    // var data = {
    //     fname: fname.val(),
    //     lname: lname.val(),
    //     phoneNumber: phoneNumber.val(),
    //     address: address.val(),
    //     id: student.id
    // };
    AllEvents.editingContact(student.id,student)
    .then(function(response){
        student.fname = response.fname;
        student.lname = response.lname;
        student.phoneNumber = response.phoneNumber;
        student.address = response.address;
        $('#studentModalForm').modal('hide');
        row.find('.student-fname').html(response.fname);
        row.find('.student-lname').html(response.lname);
        row.find('.student-phoneNumber').html(response.phoneNumber);
    })
}
function editClicked(student,row){
    $('#studentModalForm').modal();
    var fname = $('#firstName');
    var lname = $("#lastName");
    var phoneNumber = $('#phoneNumber');
    var address = $("#address");
    fname.val(student.fname);
    lname.val(student.lname);
    phoneNumber.val(student.phoneNumber);
    address.val(student.address);
    
    $(".ok-from-button").off("click").on("click",function(){
        $("#studentModalForm").modal('hide');
        restudent={
            fname:$('#firstName').val(),
            lname : $("#lastName").val(),
            phoneNumber : $('#phoneNumber').val(),
            address : $("#address").val() ,
            id:student.id   
        }
        editFormOpenWithDetails(restudent,row)
    })
}
function editFormOpen(student,row){
    $('#studentModalForm').modal('show');
    
    //     var fname = $('#firstName').val();
    // var lname = $("#lastName").val();
    // var phoneNumber = $('#phoneNumber').val();
    // var address = $("#address").val();
    // re ={
    // fname:fname.val(student.fname),
    // lname:lname.val(student.lname),
    // phoneNumber:phoneNumber.val(student.phoneNumber),
    // address:address.val(student.address),
    // id:student.id
    // }
    AllEvents.editingContact(student.id,student)
    .then(function(response){
    editClicked(response,row)})
}
function deatailsHtmlHolder(student,row){
    $("#studentModalDetails").modal("show");
    // $("#myModal").model("show")
    $("#details-fname").html(student.fname)
    $("#details-lname").html(student.lname)
    $("#details-phoneNumber").html(student.phoneNumber)
    $("#details-address").html(student.address)
    
}
function detailsFormOpen(student,row){
    AllEvents.gettingContacts()
    .then(function(response){
        deatailsHtmlHolder(student,row)
    })
}
function deleteConfermation(){
    $("#deletePopup").modal("show");
}
function DeletepopupOpen(data){
    AllEvents.deleteContact(data.id)
    .then(function(){
        deleteConfermation();
    })
}

function renderingHtml(student){
    var tr =$(`<tr>
        <td class="student-fname">${student.fname}</td>
        <td class="student-lname">${student.lname}</td>
        <td class="student-phoneNumber">${student.phoneNumber}</td>
        <td>${dropDown()}</td>
    </tr>`);
    return tr;
}
function renderinList(students){
    var row = renderingHtml(students);
    var tbody = document.getElementById("students-list");
    row.on('click', '.dropdown-item', function(event) {
        event.preventDefault();
        var action = $(event.currentTarget).attr('data-action');
        if (action === 'Details') {
            detailsFormOpen(students,row);
        }
        else if (action === 'Delete') {
            DeletepopupOpen(students, row);
        } else if(action === 'Edit') {
            editFormOpen(students, row);
        }
    });
    tbody.appendChild(row[0]);
}
function renderingHtmlAllData(data){
    for(student of data){
        renderinList(student);
    }
}
function renderingRows(){
    AllEvents.gettingContacts()
    .then(function(data){
        renderingHtmlAllData(data);
        if(data.length===0){
            $(".headder").show();
            $(".extraContact").hide();
        }
        if(data.length > 0){
            $(".headder").hide();
            $(".extraContact").show();
        }
    })

}

function collectNewStudent(){
    var fname=$("#firstName").val();
    var lname = $("#lastName").val();
    var phoneNumber = $("#phoneNumber").val();
    var address = $("#address").val();
    if((fname=="") || (lname=='') ||( phoneNumber=='') || (address=='')){
        
        //  $("#studentModalForm").modal('show');
        alert("enter all the details");
        return;
    }
    var data ={
        fname:fname,
        lname:lname,
        phoneNumber:phoneNumber,
        address:address,
        id:Date.now()
    }
    AllEvents.createStudentContact(data)
    .then(function(data){
        renderinList(data)
    })
}
function viewDeatails(data,id){
    AllEvents.createStudentContact(data,id)
    .then(function(data){
        showAddStudentForm()
    })
}
function showAddStudentForm(){
    $("#studentModalForm").modal('show');
    $("#firstName").val("");
    $("#lastName").val("");
    $("#phoneNumber").val("");
    $("#address").val("");
    $(".ok-from-button").off("click").on("click",function(){
        $("#studentModalForm").modal('hide');
        collectNewStudent();
        
    })
}
$(document).ready(function(){
    renderingRows()
    $(".adding").off("click").on("click",function(){showAddStudentForm()});
});