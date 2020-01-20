var data = JSON.parse(localStorage.getItem("data"));
// fetch({url:"file:///C:/Users/kiran/Desktop/Task/UserData/data.js",method:"POST",body:{}})
// .then(data=>return (data.json()))
// .then(data=>console.log(data));

// var data=[];
if(data == undefined){
    var data=[];
}
render();
function rowElement(element,i){  
    debugger;  
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var input1 = document.createElement("input");
    var input2 = document.createElement("input");
    var input3 = document.createElement("input");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    div3.classList.add("delete-btn");
    div1.classList.add("save-btn");
    div2.classList.add("edit-btn");
    div4.classList.add("cancel-btn");
    input1.classList.add("inp");
    input2.classList.add("inp");
    input3.classList.add("inp");
    input1.setAttribute("data-count",i);
    input2.setAttribute("data-count",i);
    input3.setAttribute("data-count",i);
    input1.setAttribute("readonly",true);
    input2.setAttribute("readonly",true);
    input3.setAttribute("readonly",true);
    div1.setAttribute("data-count",i);
    div2.setAttribute("data-count",i);
    div3.setAttribute("data-count",i);
    div4.setAttribute("data-count",i);
    div1.textContent="Save";
    div2.textContent = "Edit";
    div3.textContent = "Delete";
    div4.textContent = "Cancel";
    td4.append(div1);
    td4.append(div2);
    td4.append(div3);
    td4.append(div4);
    td1.append(input1);
    td2.append(input2);
    td3.append(input3);
    input1.value = element.name;
    input2.value = element.email;
    input3.value = element.phone;
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    document.getElementById("table-body").append(tr);
    ele(".cancel-btn")[i].addEventListener("click",function(e){
        cancelChanges(e);
    });
    ele(".edit-btn")[i].addEventListener("click",function(e){
        editData(e);
    });
    ele(".save-btn")[i].addEventListener("click",function(e){
        saveData(e);
    });
    ele(".delete-btn")[i].addEventListener("click",function(e){
        deleteData(e);
    })
}

function render(){
    if(data.length>0){
        data.map((ele,i)=>{
            rowElement(ele,i);
        });
    }
    else {
        alert("data empty");
        var modal = ele("#myModal")[0];
        modal.style.display = "block";
    }
}

var modal = ele("#myModal")[0];
var btn = ele("#add-list");
var span = ele(".close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

ele("#add-list")[0].addEventListener("click",function(e){
    var modal = ele("#myModal")[0];
    modal.style.display = "block";
});

function ele(val){
    return document.querySelectorAll(val);
}

ele(".adding")[0].addEventListener("click",function(){
    var name = ele("input.enter.name")[0].value;
    var email = ele("input.enter.email")[0].value;
    var number = ele("input.enter.number")[0].value;
    if(name&&email&&number){
        if(localStorage.getItem("data")!=undefined){
            var data = JSON.parse(localStorage.getItem("data"));
            newdata={
                "name":name,
                "email": email,
                "phone": number
            };
            data[data.length]=newdata;
            localStorage.setItem("data",JSON.stringify(data));
            rowElement(data[data.length-1],data.length-1);
        }else{
            var data=[];
            data[0]={
                "name":name,
                "email": email,
                "phone": number
            };
            rowElement(data[0],0);
        }
        var modal = ele("#myModal")[0];
        modal.style.display = "none";
        ele("input.enter.name")[0].value = '';
        ele("input.enter.email")[0].value ='';
        ele("input.enter.number")[0].value='';
        localStorage.setItem("data",JSON.stringify(data));
    }else {
        if(!name){
            ele("input.enter.name")[0].classList.add("error"); 
        }
        if(!email){
            ele("input.enter.email")[0].classList.add("error");
        }
        if(!number){
            ele("input.enter.number")[0].classList.add("error");
        }
    }
});

ele("input.enter.name")[0].addEventListener("keyup",function(e){
    if(e.target.value){
        ele("input.enter.name")[0].classList.remove("error");  
    }
});

ele("input.enter.email")[0].addEventListener("keyup",function(e){
    if(e.target.value){
        ele("input.enter.email")[0].classList.remove("error");  
    }
});

ele("input.enter.number")[0].addEventListener("keyup",function(e){
    if(e.target.value){
        ele("input.enter.number")[0].classList.remove("error");  
    }
});

function cancelChanges(e){
    var row = e.target.dataset.count;
    row = parseInt(row);
    var respone = JSON.parse(localStorage.getItem("data"));
    var values = respone[row];
    ele("input.inp")[row*3].value = values.name;
    ele("input.inp")[row*3+1].value = values.email;
    ele("input.inp")[row*3+2].value = values.phone;
    ele(".save-btn")[row].style.display="none";
    ele(".edit-btn")[row].style.display="inline-block";
    ele(".delete-btn")[row].style.display="inline-block";
    ele(".cancel-btn")[row].style.display ="none";
    ele("tr")[row+1].classList.remove("editable");
}

function deleteData(e){
    var row = e.target.dataset.count;
    row = parseInt(row);
    var trr = ele("tr");
    var dd = JSON.parse(localStorage.getItem("data"));
    dd.splice(row,1);
    localStorage.setItem("data",JSON.stringify(dd));
    ele("#table-body")[0].innerText ="";
    dd.map((ele,i)=>{
        rowElement(ele,i);
    });
}

function saveData(e){
    var inputNode = ele("input.inp");
    var saveBtn = ele(".save-btn");
    var row = e.target.dataset.count;
    row = parseInt(row);
    inputNode[row*3].readOnly = true;
    inputNode[row*3+1].readOnly = true;
    inputNode[row*3+2].readOnly = true;
    var editName = inputNode[row*3].value;
    var editEmail = inputNode[row*3+1].value;
    var editPhone = inputNode[row*3+2].value;
    var data = JSON.parse(localStorage.getItem("data"));
    data[row]={
        "name":editName,
        "email": editEmail,
        "phone": editPhone
    }
    localStorage.setItem("data",JSON.stringify(data));
    saveBtn[row].style.display="none";
    ele(".edit-btn")[row].style.display="inline-block";
    ele(".delete-btn")[row].style.display="inline-block";
    ele(".cancel-btn")[row].style.display ="none";
    ele("tr")[row+1].classList.remove("editable");
}

function editData(e){
    var inputNode = ele("input.inp");
    var editBtn = ele(".edit-btn");
    var row = e.target.dataset.count;
    row = parseInt(row);
    inputNode[row*3].readOnly = false;
    inputNode[row*3+1].readOnly = false;
    inputNode[row*3+2].readOnly = false;
    ele("tr")[row+1].classList.add("editable");
    ele(".save-btn")[row].style.display="inline-block";
    ele(".edit-btn")[row].style.display="none";
    ele(".delete-btn")[row].style.display="none";
    ele(".cancel-btn")[row].style.display ="inline-block";
}