


function dropDown(){
    var dropDown=`<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Actions
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#" data-action="Edit">Edit</a>
        <a class="dropdown-item" href="#"data-action="Details">Details</a>
        <a class="dropdown-item" href="#"data-action="Delete">Delete</a>
    </div>
</div>`;
    return dropDown;
}
function editFormOpen(data){
    //alert("edit form data ",data);
}
function detailsFormOpen(data){
    //alert("detailsFormOpen data ",data);
}
function DeletepopupOpen(data){
    //alert("DeletepopupOpen data ",data);
}

function renderingHtml(student){
    var tr =$(`<tr>
        <td>${student.fname}</td>
        <td>${student.lname}</td>
        <td>${student.phoneNumber}</td>
        <td>${dropDown()}</td>
    </tr>`);
    return tr;
}
function renderinList(student){
    var row = renderingHtml(student);
    // row.on("click","dropdown-item",function(event){
    //     event.preventDefault();
    //     var text = $(event.currentTarget).attr('data-action');
    //     if(text== 'Edit'){
    //         editFormOpen(student);
    //     }
    //     else if(text== 'Details'){
    //         detailsFormOpen(student);
    //     }
    //     else if(text== 'Delete'){
    //         DeletepopupOpen(student);
    //     }
    // })
    var tbody = document.getElementById("students-list");
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
function addContactHolder(){
    
}
function renderingAddContact(){
    addContactHolder();
}
$(document).ready(function(){
    renderingRows()
});