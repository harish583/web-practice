
var a ='';
function creatingRow(data){
    //  a = '<tr class="body-list">'+
    var tr = document.createElement("tr")
     a=   '<td class="fname">'+data.fname+'</td>'+
        '<td class="lname">'+data.lname+'</td>'+
        '<td class="phoneNumber">'+data.phoneNumber+'</td>'+
        '<td class="dropdown-header" class="address"><button class="btn actions">Actions</button>'+
            '<div class="dropdown-List">'+
                '<li class="options" id="edit">EDIT</li>'+
                '<li class="options" id="details">DETAILS</li>'+
                '<li class="options" id="delete">DELETE</li>'+
            '</div>'+
        '</td>';
        tr.innerHTML = a;
    
    var tbody= document.getElementById("tablebody");
   
    tbody.appendChild(tr);
    var actionButton= tr.querySelector(".dropdown-header")
    tr.querySelector(".actions").addEventListener("click",function(){
        actionButton.classList.add("show");
        tr.querySelector("#edit").addEventListener("click",function(){
            editFunction(data,tr);
            closingDropDown(tr);
        })
        tr.querySelector("#details").addEventListener("click",function(){
            detailsFunction(data)
            closingDropDown(tr)
        })
        tr.querySelector("#delete").addEventListener("click",function(){
            deleteFunction(data,tr)
            closingDropDown(tr);
        })
        
    });
}
function closingDropDown(tr){

    var actionButton= tr.querySelector(".dropdown-header");
    actionButton.classList.remove("show");
}
var removingBinding = null;
function editFunction(data,tr){
    document.querySelector(".modal-popup-new-form").classList.add("show-modal");
    document.querySelector("#fname").value = data.fname;
    document.querySelector("#lname").value = data.lname;
    document.querySelector("#phoneNumber").value = data.phoneNumber;
    document.querySelector("#address").value = data.address;
    function redataSubmition(){ 
        var fname = document.querySelector("#fname").value;
        var lname = document.querySelector("#lname").value;
        var phoneNumber = document.querySelector("#phoneNumber").value;
        var address = document.querySelector("#address").value;
        var redata ={
            fname:fname,
            lname:lname,
            phoneNumber:phoneNumber,
            address:address,
            id:data.id
        }   
        allAjaxFunctions.updatingData(redata,redata.id)
        .then(function(response){
            data.fname=response.fname;
            data.lname=response.lname;
            data.phoneNumber=response.phoneNumber;
            data.address=response.address;
            tr.querySelector(".fname").innerHTML = response.fname;
            tr.querySelector(".lname").innerHTML = response.lname;
            tr.querySelector(".phoneNumber").innerHTML = response.phoneNumber;
            document.querySelector(".modal-popup-new-form").classList.remove("show-modal");

        })
     }
     document.querySelector(".submit-Data").style.display="none";
     document.querySelector(".editing-Data").style.display="inline-block";

     document.querySelector(".editing-Data").removeEventListener("click",removingBinding)
    document.querySelector(".editing-Data").addEventListener("click",redataSubmition)
    document.querySelector(".editing-Data").removeEventListener("click",removingBinding)

    removingBinding=redataSubmition;
    var closing = document.querySelectorAll(".closingFunction-addData");
    for(var r = 0;r<closing.length;r++){
        closing[r].addEventListener("click",closingEnterData)
    }
}
function forEmptyDetails(){
    var tr = document.querySelectorAll("tr");
    //var tbody = document.querySelectorAll("#tablebody");
    if(tr.length < 2){
        document.querySelector('.Empty-holder').style.display="inline-block";
        document.querySelector('.header-list').style.display="none";
        document.querySelector(".float-right").style.display="none"
    }
    else {
        document.querySelector('.Empty-holder').style.display="none";
        document.querySelector(".float-right").style.display="inline-block";
        document.querySelector('.header-list').style.display="contents";
    }
    // if(tr.length>){
    //     document.querySelector('.header-list').style.display="contents";
    // }
    // if(tr.length >1){
    //     document.querySelector('.Empty-holder').style.display="none";
    //     document.querySelector(".float-right").style.display="inline-block";
    // }
    // if(tr.length==0) {
    //     document.querySelector('.Empty-holder').style.display="inline-block";
    //     document.querySelector('.header-list').style.display="none";
    //     document.querySelector(".float-right").style.display="none"
    // }
}
function closingAddingFormPopup(){

    document.querySelector(".modal-popup-new-form").classList.remove("show-modal");
}
function closingDetailsPopup(){

    document.querySelector(".modal-popup-details").classList.remove("show-modal");
}
function detailsFunction(data){
            document.querySelector(".modal-popup-details").classList.add("show-modal");
            var holder = document.querySelector(".details-content-holder");
            document.querySelector(".deleteFunction").style.display="none";

            holder.innerHTML ='';
            var div = document.createElement("div");
            var x = '<div>'+
                '<span><b>FIRST NAME : <b></span>'+
                '<span>'+data.fname+'</span><br><br>'+
                '<span><b>LAST NAME : <b></span>'+
                '<span>'+data.lname+'</span><br><br>'+
                '<span><b>PHONE NUMBER : <b></span>'+
                '<span>'+data.phoneNumber+'</span><br><br>'+
                '<span><b>ADDRESS : <b></span>'+
                '<span>'+data.address+'</span>'+
                '</div>'
            div.innerHTML = '';

            div.innerHTML = x;
            holder.appendChild(div);
            var clos = document.querySelectorAll(".closingFunction")
            for(var i=0;i<clos.length;i++){
                clos[i].addEventListener("click",closingDetailsPopup)
            }
            //document.querySelector(".closingCrossButton").addEventListener("click",closingDetailsPopup)


}
function deleteFromServer(id,tr){
    allAjaxFunctions.deletingData(id)
    .then(function(){
        tr.remove();

        document.querySelector(".modal-popup-details").classList.remove("show-modal");
        forEmptyDetails();
        
    })

}   
function deleteFunction(data,tr){
    document.querySelector(".modal-popup-details").classList.add("show-modal");

    document.querySelector(".deleteFunction").style.display="inline-block";
    var holder = document.querySelector(".details-content-holder");
    holder.innerHTML ='';
    var div = document.createElement("div");
    var a = 'Are You Want To Delete ...?'
    div.textContent =a;
    holder.appendChild(div);
    var clos = document.querySelectorAll(".closingFunction")
    for(var i=0;i<clos.length;i++){
        clos[i].addEventListener("click",closingDetailsPopup)
    }
    document.querySelector(".deleteFunction").addEventListener("click",function(){
    deleteFromServer(data.id,tr)})

}
// function gettingRow(data){
//     var tbody= document.getElementById("tablebody");
//     tbody.appendChild(row);
    
// }


function addingData(){
    var fname = document.querySelector("#fname").value;
    var lname = document.querySelector("#lname").value;
    var phoneNumber = document.querySelector("#phoneNumber").value;
    var address = document.querySelector("#address").value;
    var data ={
        fname:fname,
        lname:lname,
        phoneNumber:phoneNumber,
        address:address,
        id:Date.now()
    }   
        allAjaxFunctions.creatingData(data)
        .then(function(response){
            creatingRow(response);
        })
}
// var reabc = null;
// function showEntryForm(){
//     document.querySelector(".modal-popup-new-form").classList.add("show-modal");
//     document.querySelector("#fname").value = '';
//     document.querySelector("#lname").value = '';
//     document.querySelector("#phoneNumber").value = '';
//     document.querySelector("#address").value = '';
//     function abc(){
//         addingData();
//             closingEnterData();
//             //forEmptyDetails();
//             document.querySelector('.Empty-holder').style.display="none";
//             document.querySelector(".float-right").style.display="inline-block";
//             document.querySelector('.header-list').style.display="contents";
//     };
//     document.querySelector(".submit-Data").removeEventListener("click",reabc);
//     document.querySelector(".submit-Data").addEventListener("click",abc);
//     reabc = abc;
//     var closing = document.querySelectorAll(".closingFunction-addData");
//     for(var r = 0;r<closing.length;r++){
//         closing[r].addEventListener("click",closingEnterData)
//     }
    
// }
var addButton = document.querySelectorAll(".addStudentButton")
for(var x = 0 ;x<addButton.length;x++){
    var reabc = null,reshowEntryForm= null;
    function showEntryForm(){
        document.querySelector(".modal-popup-new-form").classList.add("show-modal");
        document.querySelector("#fname").value = '';
        document.querySelector("#lname").value = '';
        document.querySelector("#phoneNumber").value = '';
        document.querySelector("#address").value = '';
        function abc(){
            addingData();
                closingEnterData();
                //forEmptyDetails();
                document.querySelector('.Empty-holder').style.display="none";
                document.querySelector(".float-right").style.display="inline-block";
                document.querySelector('.header-list').style.display="contents";
        };
        document.querySelector(".editing-Data").style.display="none";
        document.querySelector(".submit-Data").style.display="inline-block";
        document.querySelector(".submit-Data").removeEventListener("click",reabc);
        document.querySelector(".submit-Data").addEventListener("click",abc);
        document.querySelector(".submit-Data").removeEventListener("click",reabc);

        reabc = abc;
        var closing = document.querySelectorAll(".closingFunction-addData");
        for(var r = 0;r<closing.length;r++){
            closing[r].addEventListener("click",closingEnterData)
        }
        
    }
    addButton[x].removeEventListener("click",reshowEntryForm);
    addButton[x].addEventListener("click",showEntryForm);
    addButton[x].removeEventListener("click",reshowEntryForm);

    reshowEntryForm = showEntryForm;
}
function allData(response){
    for(data of response){
        creatingRow(data);
    }
}
function gettingDataFunction(){
    allAjaxFunctions.gettingData()
    .then(function(response){
        allData(response)
        forEmptyDetails(response);
    })
}
gettingDataFunction();