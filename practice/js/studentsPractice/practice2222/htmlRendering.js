

function rowCreating(data){
    return $(`<tr>
        <td class="student-fname">${data.fname}</td>
        <td class="student-lname">${data.lname}</td>
        <td class="student-phoneNumber">${data.phoneNumber}</td>
        <td class="student-actions">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
                    Action
                </button>
                <div class="dropdown-menu">
                    <div class="dropdown-item" data-action="edit">Edit</div>
                    <div class="dropdown-item" data-action="details" >Details</div>
                    <div class="dropdown-item" data-action="delete" >Delete</div>
                </div>
            </div>
        </td>
    </tr>`);
   
}
function rowRendering(student){
    var tbody = document.getElementById('students-rows');
    var row = rowCreating(student);
    row.on('click', '.dropdown-item', function(event) {
        event.preventDefault();
        var action = $(event.currentTarget).attr('data-action');
        if (action === 'details') {
            detailsFunctionCalling(student);
        }
        else if (action === 'delete') {
            deleteFunctionCalling(student, row);
        } else if(action === 'edit') {
            editFunctionCalling(student, row);
        }
    });
    
        document.querySelector(".Empty-list").style.display="none";
        document.querySelector(".float-right").style.display="block"; 
    
    tbody.appendChild(row[0]);
}

function editFunctionRendering(data,row){
    var fname= $(".Firstname").val() 
        var lname= $(".Laststname").val()
        var phoneNumber= $(".Phone-Number").val() 
        var address= $(".Address").val()
        if((fname=="") || (lname=="") || (phoneNumber=='') || (address=='')){
            alert("Enter All The Fields..");
        }
        var results ={
            fname:fname,
            lname:lname,
            phoneNumber:phoneNumber,
            address:address,
            id:data.id
        }    
        allHttpRequests.editingData(results,data.id)
        .then(function(response){
            
            data.fname = response.fname;
            data.lname = response.lname;
            data.phoneNumber = response.phoneNumber;
            data.address = response.address;
            $('#studentModalForm').modal('hide');
            row.find('.student-fname').html(response.fname);
            row.find('.student-lname').html(response.lname);
            row.find('.student-phoneNumber').html(response.phoneNumber);
        })
}
function editFunctionCalling(data,row){
    $("#myModal").modal('show');
    $(".Firstname").val(data.fname) 
    $(".Laststname").val(data.lname)
    $(".Phone-Number").val(data.phoneNumber) 
    $(".Address").val(data.address);
    $("#saveChanges").off().on("click",function(){
        editFunctionRendering(data,row);
        $(".Firstname").val('') 
        $(".Laststname").val('')
        $(".Phone-Number").val('') 
        $(".Address").val('');
    })
    $("#saveChanges").show();
} 
function detailsFunctionCalling(student,row){
    $('#myModalDetails').modal('show');
    var details = $(`<div><span><b>FIRST NAME : </b></span>
        <span>${student.fname}</span></div>
        <div><span><b>LAST NAME : </b></span>
        <span>${student.lname}</span></div>
        <div><span><b>PHONE NUMBER : </b></span>
        <span>${student.phoneNumber}</span></div>
        <div><span><b>ADDRESS : </b></span>
        <span>${student.address}</span></div>
    `);
    $(".modal-body-details").html(details);
    
} 
// function closingFunction(){

//     $('#myModalDelete').modal('show');
// }
function conformToRemove(student,row){
     $('#myModalDelete').modal('show');
    // $(".modal-body-delete").html("delete")
     $('.btn-danger').off().click(function(){
        var tr = document.querySelectorAll("tr");
        if(tr.length == 2){ 
            document.querySelector(".Empty-list").style.display="block";
        document.querySelector(".float-right").style.display="none";
        }
        else {
            document.querySelector(".Empty-list").style.display="none";
            document.querySelector(".float-right").style.display="block"; 
        }
        allHttpRequests.deletingData(student.id)
        .then(function(){
            row.remove();
        })
    })
    $("#closingFunction").click(function(){

     $('#myModalDelete').modal('hide')
    })
}
function deleteFunctionCalling(student,row){
    // allHttpRequests.deletingData(student.id)
    // .then(function(){
        conformToRemove(student,row);
    //})
}
function enter(){
    $('#myModal').modal('show');
        $(".Firstname").val("") 
        $(".Laststname").val("")
        $(".Phone-Number").val("") 
        $(".Address").val("")
    $("#saveChanges").off().on("click",function(){
        var fname= $(".Firstname").val() 
        var lname= $(".Laststname").val()
        var phoneNumber= $(".Phone-Number").val() 
        var address= $(".Address").val() 
        if((fname=="") || (lname=="") || (phoneNumber=='') || (address=='')){
            alert("Enter All The Fields..");
            return
        }
        var data ={
            fname:fname,
            lname:lname,
            phoneNumber:phoneNumber,
            address:address,
            id:Date.now()
        } 
        allHttpRequests.createData(data)
        .then(function(data){
            rowRendering(data);
        })
        var fname= $(".Firstname").val("") 
        var lname= $(".Laststname").val("")
        var phoneNumber= $(".Phone-Number").val("") 
        var address= $(".Address").val("") 
    })
}
function displayFunctions(data){
    if(data.length===0){
        document.querySelector(".Empty-list").style.display="block";
        document.querySelector(".float-right").style.display="none";
    }
    else {
        document.querySelector(".Empty-list").style.display="none";
        document.querySelector(".float-right").style.display="block"; 
    }
}
function rendering(){
    allHttpRequests.gettingData()
        .then(function(data){
            displayFunctions(data);
            for(students of data){
           
            rowRendering(students);}
            
        })
    $(".addingStudentButton").off().on("click",
    function(){
        enter();
    });
    
}
$(document).ready(function(){
    rendering()
})