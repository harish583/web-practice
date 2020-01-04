$(document).ready(()=>{
    var students = localStorage.getItem("students");
    if(!students){
        alert("No Data Found");
        students = [];
    }
    else {
        students = JSON.parse(students);
    }
    var newStudent = {
        fname :'',
        lname:'',
        email : '',
        phnumber : ''
    };
    valuesCollected = (extra,obj)=>{
        // if(extra == '-data'){
        //     newStudent = obj;
        // }
        //else {
            newStudent ={
                fname :$(".f-name"+extra)[0].value,
                lname:$(".l-name"+extra)[0].value,
                email : $(".Email"+extra)[0].value,
                phnumber : $(".phone-number"+extra)[0].value
            }
            $(".f-name"+extra).on("keyup",(e)=>{
                newStudent.fname = e.target.value;
            });
            $(".l-name"+extra).on("keyup",(e)=>{
                newStudent.lname = e.target.value;
            });
            $(".Email"+extra).on("keyup",(e)=>{
                newStudent.email = e.target.value;
            });
            $(".phone-number"+extra).on("keyup",(e)=>{
                newStudent.phnumber = e.target.value;
            });
        //}
        return newStudent;
        
    }
    $(".add-student-button").click(()=>{
        var x = `<input type="text" placeholder="First Name" class="f-name">
        <input type="text" placeholder="Last Name" class="l-name">
        <input type="text" placeholder="Email" class="Email">
        <input type="text" placeholder="PhoneNumber" class="phone-number">
        <button class="submit-button" id="submit-button">Add</button>`;
        $(".add-student-form").html(x);
        $(".add-student-button").hide();
        valuesCollected("",newStudent);
        $(".submit-button").click(()=>{
            if(newStudent.fname == '' || newStudent.lname == '' || newStudent.email == '' || newStudent.phnumber == ''){
                alert("plz.. enter all the fields");
                return;
            }
            students.push(newStudent);
            localStorage.setItem("students",JSON.stringify(students));
            $(".students-holder").empty();
            students.map((obj,index)=>addingStudentRow(obj,index)); 
                $(".add-student-form").empty();
                $(".add-student-button").show();
        })
        
    });
    addingStudentRow=(obj,index)=>{
        var object = students[index];
        var z = `<span class="student-data">
            <div class="student-holder-data">${obj.fname}</div>
            <div class="student-holder-data">${obj.lname}</div>
            <div class="student-holder-data">${obj.email}</div>
            <button class="action-button" data-index=${index}>Actions</button>
            <span class="dropdown-holder"></span>
        </span>`;
        $(".students-holder").append(z) ;
        $(".action-button").unbind();   
        $(".action-button").click((e)=>{
                var id = e.target.dataset.index; 
            continueee(obj,id);
            
            
        })
    }
    continueee=(obj,index)=>{
        $(".action-button").eq(index).hide();
        var actionDropdown = `
            <button class="edit-button" data-index=${index}>Edit</button>
            <button class="delete-button" data-index=${index}>Delete</button>
            <button class="cancel-button" data-index=${index}>Cancel</button>
        `;
        $(".dropdown-holder").eq(index).html(actionDropdown);
        $(".edit-button").click((e)=>{
            var id = e.target.dataset.index;
            var obje = students[id];
            var editableData = `<span class="editable-form-holder"><input type="text" value=${obje.fname} placeholder="First Name" class="f-name-edit">
                <input type="text" value=${obje.lname} placeholder="Last Name" class="l-name-edit">
                <input type="text" value=${obje.email} placeholder="Email" class="Email-edit">
                <input type="text" value=${obje.phnumber} placeholder="PhoneNumber" class="phone-number-edit">
                <button class="submit-button-edit">Submit</button>
                <button class="cancel-button-edit">Cancel</button></span>`;
            $(".student-data").eq(id).html(editableData);
                valuesCollected("-edit",obj);
                $(".submit-button-edit").click(()=>{
                    if(newStudent.fname == '' || newStudent.lname == '' || newStudent.email == '' || newStudent.phnumber == ''){
                        alert("plz.. enter all the fields");
                        return;
                    }
                    students[index] = newStudent;
                    localStorage.setItem("students",JSON.stringify(students));
                    $(".students-holder").empty();
                    students.map((obj,index)=>addingStudentRow(obj,index)); 
                        $(".add-student-form").empty();
                        $(".add-student-button").show();
                });
                
        })
        $(".delete-button").click((e)=>{
            var id = e.target.dataset.index;
            students.splice(id,1);
            localStorage.setItem("students",JSON.stringify(students));
            $(".students-holder").empty();
                    students.map((obj,index)=>addingStudentRow(obj,index));
        })
        $(".cancel-button").click((e)=>{

            var index = e.target.dataset.index;
            $(".dropdown-holder").html("");
            $(".action-button").eq(index).show();
        })
    }
    students.map((obj,index)=>{
        z = `<span class="student-data">
           <div class="student-holder-data">${obj.fname}</div>
           <div class="student-holder-data">${obj.lname}</div>
           <div class="student-holder-data">${obj.email}</div>
           <button class="action-button" data-index=${index}>Actions</button>
            <span class="dropdown-holder"></span>
       </span>`;
       $(".students-holder").append(z) ;
       $(".action-button").unbind();
       $(".action-button").click(function(e){
        var id = e.target.dataset.index;
        continueee(obj,id);
      });
    
    
   })
})