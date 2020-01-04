
function rowCreating(data){
    // var tr = document.createElement("tr");
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
    // tr.appendChild(row[0]);
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
    tbody.appendChild(row[0]);
}

function editFunctionRendering(data,row){
    var fname= $(".Firstname").val() 
        var lname= $(".Laststname").val()
        var phoneNumber= $(".Phone-Number").val() 
        var address= $(".Address").val()
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
        editFunctionRendering(data,row)
    })

} 
function detailsFunctionCalling(student,row){
    $('#myModal').modal('show');
    var details = $(`<div><span><b>FIRST NAME : </b></span>
        <span>${student.fname}</span></div>
        <div><span><b>LAST NAME : </b></span>
        <span>${student.lname}</span></div>
        <div><span><b>PHONE NUMBER : </b></span>
        <span>${student.phoneNumber}</span></div>
        <div><span><b>ADDRESS : </b></span>
        <span>${student.address}</span></div>
    `);
    $(".modal-body").html(details);
    $("#saveChanges").hide();
    
} 
function deleteFunctionCalling(student){
    allHttpRequests.deletingData(student.id)
    .then(function(){
        $("#students-rows").text('');
        rendering();
    })
} 
// function actionBindings(a,data){

//     if($(a).attr('data-action')=="edit"){
//         editFunctionCalling(data);
//     }
//     if($(a).attr('data-action')=="details"){
//         detailsFunctionCalling();
//     }
//     if($(a).attr('data-action')=="delete"){
//         deleteFunctionCalling();
//     }
// }
function enter(){
    var fname= $(".Firstname").val("") 
        var lname= $(".Laststname").val("")
        var phoneNumber= $(".Phone-Number").val("") 
        var address= $(".Address").val("")
    $('#myModal').modal('show');
    $("#saveChanges").off().on("click",function(){
        var fname= $(".Firstname").val() 
        var lname= $(".Laststname").val()
        var phoneNumber= $(".Phone-Number").val() 
        var address= $(".Address").val() 
        var data ={
            fname:fname,
            lname:lname,
            phoneNumber:phoneNumber,
            address:address,
            id:Date.now()
        } 
        //rendering();
        allHttpRequests.createData(data)
        .then(function(data){
            rowRendering(data);
        
            // $(".dropdown-item").click(
            //     function(){
            //         actionBindings(this)
            //     }
            // )
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
                rowRendering(students)
                
            }    
        })
    $(".addingStudentButton").off().on("click",
    function(){
        enter();
    });
    
}
$(document).ready(function(){
    rendering()
})