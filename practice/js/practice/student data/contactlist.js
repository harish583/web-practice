
// var contacts = [
//     {
//         fname:"name11",
//         lname:"name12",
//         Phno:12345678990,
//         address:"ert ghj yu"
//     },
//     {
//         fname:"name21",
//         lname:"name22",
//         Phno:2345678990,
//         address:"ert ghj yu"
//     },
//     {
//         fname:"name31",
//         lname:"name32",
//         Phno:345678990,
//         address:"ert ghj yu"
//     },
//     {
//         fname:"name41",
//         lname:"name42",
//         Phno:45678990123,
//         address:"ert ghj yu"
//     },
// ]





function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        //var a ='';
      if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("demo").innerHTML =
         a =this.responseText;
        a=JSON.parse(a);
        var contact=[];
        for(var i =0;i<a.length;i++){
            contact.push(a[i]);
            //  Alloption.push(a[i].options);
        }
        // quats.push(Alloption);
        renderingHTML(contact);
      }
    };
    xhttp.open("GET", "http://localhost:3000/contacts", true);
    xhttp.send();
  }

loadDoc();
//create:

function create() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         a =this.responseText;
        a=JSON.parse(a);
        // console.log('a....', a)
      }
    };
    xhttp.open("POST", "http://localhost:3000/contacts", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    var fname = document.querySelector(".F-NAME");
    var lname = document.querySelector(".L-NAME");
    var phno = document.querySelector(".Ph-Number");
    var addr = document.querySelector(".Full-address");
    var data = JSON.stringify({
        id: fname.value.replace(/ /g,''),
        "fname":fname.value,
        "lname":lname.value,
        "Phno":phno.value,
        "address":addr.value
        
    })
    xhttp.send(data);
  }


  //Delete:
  function Delete(contacts,i) {
      //var id = event.currentTarget.dataset.id;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        //var a ='';
      if (this.readyState == 4) {
        //document.getElementById("demo").innerHTML =
         a =this.responseText;
        a=JSON.parse(a);
        console.log('a....', a)
      }
    };
    var id = encodeURIComponent(contacts[i].fname.replace(/ /g,''));
    xhttp.open("DELETE", "http://localhost:3000/contacts/" + id, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    // var fedit = document.querySelectorAll(".fname");
    // var ledit = document.querySelectorAll(".lname");
    // var phnoedit = document.querySelectorAll(".Ph-Number-edit");
    // var addredit = document.querySelectorAll(".Full-address-edit");
    var data = JSON.stringify({
        id: contacts[i].fname.replace(/ /g,''),
        "fname":contacts[i].fname,
        "lname":contacts[i].lname,
        "Phno":contacts[i].Phno,
        "address":contacts[i].address
        
    })
    xhttp.send(data);
  }


//update:
  function update(contacts,i) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        //var a ='';
      if (this.readyState == 4) {
        //document.getElementById("demo").innerHTML =
         a =this.responseText;
        a=JSON.parse(a);
        console.log('a....', a)
      }
    };
    var fedit = document.querySelector(".F-NAME-edit");
    var ledit = document.querySelector(".L-NAME-edit");
    var phnoedit = document.querySelector(".Ph-Number-edit");
    var addredit = document.querySelector(".Full-address-edit");
    var id = encodeURIComponent(contacts[i].fname.replace(/ /g,''));
    xhttp.open("PUT", "http://localhost:3000/contacts/"+id , true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({
        id: fedit.value.replace(/ /g,''),
        "fname":fedit.value,
        "lname":ledit.value,
        "Phno":phnoedit.value,
        "address":addredit.value
    })
    xhttp.send(data);
    console.log(data);
    var container = document.querySelector(".EDIT-CONTACT-Holder");
    container.style.display="none";
  }


// var oldContacts = '';
// var holder = document.querySelector(".names-holder");
//       holder.innerHTML ='';
function renderingHTML(contacts){
    var oldContacts = '';
    for(var i=0;i<contacts.length;i++){
        oldContacts = oldContacts+'<div class="name-container" data-id="'+i+'">'+
            '<span class="fname" data-id="'+i+'">'+contacts[i].fname+'</span>'+
            '<span class="lname" data-id="'+i+'">'+contacts[i].lname+'</span>'+
            '<span class="name-edit-button" data-id="'+i+'">EDIT</span>'+
            '<span class="name-delete-button" data-id="'+i+'">DELETE</span>'+
        '</div>';
    }
    var holder = document.querySelector(".names-holder");
    holder.innerHTML=oldContacts;
    var edit = document.querySelectorAll(".name-edit-button");
     for(var i=0;i<edit.length;i++){
         edit[i].addEventListener("click",function(){
         editingHolder(contacts)
        });
     }
     var delet = document.querySelectorAll(".name-delete-button");
     for(var i=0;i<delet.length;i++){
        delet[i].addEventListener("click",function(){
         deletingHolder(contacts)
        });
     }
     var fnam = document.querySelector(".FNAME");
    fnam.addEventListener("click",function(){
        console.log("fname clicked");
        sortByFName(contacts)
       });
       var lnam = document.querySelector(".LNAME");
    lnam.addEventListener("click",function(){
        console.log("lname clicked");
        sortByLName(contacts)
       });
}

//renderingHTML();
function AddContact(){
    var details = '<div class="popup"></div>'+
    '<div class="popup-container">'+
        '<h1>Add contact details</h1>'+
        '<div>'+
            '<div class="closing">X</div>'+
            '<input class="F-NAME" type="text" placeholder="first name">'+
            '<input type="text" class="L-NAME" placeholder="last name">'+
            '<input type="number" class="Ph-Number" placeholder="phone number">'+
            '<textarea cols="30" rows="10" placeholder="Full address" class="Full-address"></textarea>'+
            '<button class="addcontact-submit">SUBMIT</button>'+
        '</div>'+
    '</div>';
    var addcontactholder = document.querySelector(".ADD-CONTACT-Holder");
    addcontactholder.innerHTML = details;

    var popupContainer = document.querySelector(".ADD-CONTACT-Holder");
    popupContainer.style.display="block";
    var closing = document.querySelectorAll(".closing");
    for(var i=0;i<closing.length;i++){
        closing[i].addEventListener("click",closingpopup);
    }
    var submiting = document.querySelector(".addcontact-submit");
    submiting.addEventListener("click",addTolist);
}

function editingHolder(contacts){
    var id = event.currentTarget.dataset.id;
    var holder = '<div class="popup"></div>'+
    '<div class="popup-container">'+
        '<h1>Edit contact details</h1>'+
        '<div>'+
            '<div class="closing">X</div>'+
            '<input class="F-NAME-edit" type="text" placeholder="first name" value="'+contacts[id].fname+'">'+
            '<input type="text" class="L-NAME-edit" placeholder="last name" value="'+contacts[id].lname+'">'+
            '<input type="number" class="Ph-Number-edit" placeholder="phone number" value="'+contacts[id].Phno+'">'+
            '<textarea cols="30" rows="10" placeholder="Full address"  class="Full-address-edit">'+contacts[id].address+'</textarea>'+
            '<button class="editcontact-submit">SUBMIT</button>'+ 
    '</div>';
    var container = document.querySelector(".EDIT-CONTACT-Holder");
    container.innerHTML = holder;
    container.style.display="block";
    var editsubmit = document.querySelector(".editcontact-submit");
    editsubmit.addEventListener("click",function(){
        update(contacts,id)
    })
    var closing = document.querySelectorAll(".closing");
    for(var i=0;i<closing.length;i++){
        closing[i].addEventListener("click",closingpopup);
    }
}

function deletingHolder(contacts){
    var id = event.currentTarget.dataset.id;
    var del = '<div class="popup"></div>'+
    '<div class="popup-container">'+
        '<h1>Conform to delete this <mark>'+contacts[id].fname+'</mark> name</h1><div class="closing">X</div>'+
        '<button class="delete">Delete</button>'+
        '<button class="cancel">Cancel</button>'+
    '</div>';
    var delet = document.querySelector(".DELETE-CONTACT-Holder");
    delet.innerHTML = del;
    delet.style.display="block";
    delet.addEventListener("click",closingpopup);
    var deleting = document.querySelectorAll(".delete");
    for(var i=0;i<deleting.length;i++){
        deleting[i].addEventListener("click",function(){
        Delete(contacts,id)
        });
    }

    var cancelling = document.querySelector(".cancel");
    cancelling.addEventListener("click",closingpopup);
    var closing = document.querySelectorAll(".closing");
    for(var i=0;i<closing.length;i++){
        closing[i].addEventListener("click",closingpopup);
    }
}

function sortByFName(contacts){
    contacts.sort(function(a, b){
        var x = a.fname.toLowerCase();
        var y = b.fname.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
      var holder = document.querySelector(".names-holder");
      holder.innerHTML ='';
      renderingHTML(contacts); 
       var fnam = document.querySelector(".FNAME");
      fnam.addEventListener("click",function(){
          console.log("fname clicked");
          sortByF2Name(contacts)
         });
         var lnam = document.querySelector(".LNAME");
      lnam.addEventListener("click",function(){
          console.log("lname clicked");
          sortByL2Name(contacts)
         });
  

}


function sortByLName(contacts){
    contacts.sort(function(a, b){
        var x = a.lname.toLowerCase();
        var y = b.lname.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
      var holder = document.querySelector(".names-holder");
      holder.innerHTML ='';
      renderingHTML(contacts); 
      var fnam = document.querySelector(".FNAME");
      fnam.addEventListener("click",function(){
          console.log("fname clicked");
          sortByF2Name(contacts)
         });
         var lnam = document.querySelector(".LNAME");
      lnam.addEventListener("click",function(){
          console.log("lname clicked");
          sortByL2Name(contacts)
         });
  

}


function sortByF2Name(contacts){
    contacts.sort(function(a, b){
        var x = a.fname.toLowerCase();
        var y = b.fname.toLowerCase();
        if (x > y) {return -1;}
        if (x < y) {return 1;}
        return 0;
      });
      var holder = document.querySelector(".names-holder");
      holder.innerHTML ='';
      renderingHTML(contacts); 
       var fnam = document.querySelector(".FNAME");
      fnam.addEventListener("click",function(){
          console.log("fname clicked");
          sortByFName(contacts)
         });
         var lnam = document.querySelector(".LNAME");
      lnam.addEventListener("click",function(){
          console.log("lname clicked");
          sortByLName(contacts)
         });
  

}


function sortByL2Name(contacts){
    contacts.sort(function(a, b){
        var x = a.lname.toLowerCase();
        var y = b.lname.toLowerCase();
        if (x > y) {return -1;}
        if (x < y) {return 1;}
        return 0;
      });
      var holder = document.querySelector(".names-holder");
      holder.innerHTML ='';
      renderingHTML(contacts); 
      var fnam = document.querySelector(".FNAME");
      fnam.addEventListener("click",function(){
          console.log("fname clicked");
          sortByFName(contacts)
         });
         var lnam = document.querySelector(".LNAME");
      lnam.addEventListener("click",function(){
          console.log("lname clicked");
          sortByLName(contacts)
         });
  

}




 var adding = document.querySelector(".add-contact-button");
 adding.addEventListener("click",AddContact);


function closingpopup(){
    var popupContainer = document.querySelector(".ADD-CONTACT-Holder");
    popupContainer.style.display="none";

    var container = document.querySelector(".EDIT-CONTACT-Holder");
    container.style.display="none";

    var delet = document.querySelector(".DELETE-CONTACT-Holder");
    delet.style.display="none";
}

function addTolist(){
    create();
    var popupContainer = document.querySelector(".ADD-CONTACT-Holder");
    popupContainer.style.display="none";
}

     
