var data = [
  {
    "lastName": "Garg",
    "empProfilePicLocation": "",
    "extension": "",
    "mobile": "8295540701",
    "buName": "Imaginea",
    "employeeCode": "13642",
    "yammerProfileUrl": "",
    "workLocation": "Hyderabad",
    "firstName": "Aakriti",
    "bloodGroup": "AB+",
    "cubical": "LGF044",
    "roleName": "Development Engineer",
    "email": "aakriti.garg@imaginea.com"
  },
  {
    "lastName": "Soundararajan",
    "empProfilePicLocation": "",
    "extension": "23577",
    "mobile": "+919884332396",
    "buName": "Pramati",
    "employeeCode": "10868",
    "yammerProfileUrl": "",
    "workLocation": "Chennai",
    "firstName": "Aarthy",
    "bloodGroup": "O-",
    "cubical": "HR Room-WS01",
    "roleName": "Associate Manager",
    "email": "aarthy.s@pramati.com"
  },
  {
    "lastName": "Diwan",
    "empProfilePicLocation": "",
    "extension": "14182",
    "mobile": "9985478909",
    "buName": "Pramati",
    "employeeCode": "12557",
    "yammerProfileUrl": "",
    "workLocation": "Hyderabad",
    "firstName": "Aayush",
    "bloodGroup": "O-",
    "cubical": "2F012",
    "roleName": "Manager",
    "email": "aayush.diwan@pramati.com"
  },
  {
    "lastName": "Vijayamohan",
    "empProfilePicLocation": "",
    "extension": "",
    "mobile": "8547871997",
    "buName": "Imaginea",
    "employeeCode": "13319",
    "yammerProfileUrl": "",
    "workLocation": "Chennai",
    "firstName": "Abba Vishnu",
    "bloodGroup": "O+",
    "cubical": "A324",
    "roleName": "Visual Designer",
    "email": "abba.vishnu@imaginea.com"
  },
  {
    "lastName": "Pajapalla",
    "empProfilePicLocation": "",
    "extension": "",
    "mobile": "9901726111",
    "buName": "GTC",
    "employeeCode": "13526",
    "yammerProfileUrl": "",
    "workLocation": "Bengaluru",
    "firstName": "Abdul",
    "bloodGroup": "B+",
    "cubical": "",
    "roleName": "Development Engineer",
    "email": "abdul.pajapalla@imaginea.com"
  },
  {
    "lastName": "A",
    "empProfilePicLocation": "",
    "extension": "",
    "mobile": "9965471240",
    "buName": "Imaginea",
    "employeeCode": "11463",
    "yammerProfileUrl": "",
    "workLocation": "Chennai",
    "firstName": "Abdul Rafiu",
    "bloodGroup": "O+",
    "cubical": "B305",
    "roleName": "Principal Engineer",
    "email": "abdul.rafiu@imaginea.com"
  },
  {
    "lastName": "Aavula",
    "empProfilePicLocation": "",
    "extension": "14226",
    "mobile": "9849729133",
    "buName": "Pramati",
    "employeeCode": "12455",
    "yammerProfileUrl": "",
    "workLocation": "Hyderabad",
    "firstName": "Abhijeet",
    "bloodGroup": "A+",
    "cubical": "2F021",
    "roleName": "Manager",
    "email": "abhijeet.aavula@pramati.com"
  },
  {
    "lastName": "Sinha",
    "empProfilePicLocation": "",
    "extension": "",
    "mobile": "9952924609",
    "buName": "Imaginea",
    "employeeCode": "13137",
    "yammerProfileUrl": "",
    "workLocation": "Hyderabad",
    "firstName": "Abhijit",
    "bloodGroup": "B+",
    "cubical": "4F134",
    "roleName": "Senior Development Engineer",
    "email": "abhijit.sinha@imaginea.com"
  },
  {
    "lastName": "Sridhar",
    "empProfilePicLocation": "",
    "extension": "",
    "mobile": "+919538607156",
    "buName": "GTC",
    "employeeCode": "12921",
    "yammerProfileUrl": "",
    "workLocation": "Bengaluru",
    "firstName": "Abhijith",
    "bloodGroup": "O+",
    "cubical": "",
    "roleName": "Quality Lead",
    "email": "abhijith.sridhar@imaginea.com"
  },
  {
    "lastName": "Karlapudi",
    "empProfilePicLocation": "",
    "extension": "",
    "mobile": "+919849237397",
    "buName": "Imaginea",
    "employeeCode": "11410",
    "yammerProfileUrl": "",
    "workLocation": "Hyderabad",
    "firstName": "Abhilash yadav",
    "bloodGroup": "O+",
    "cubical": "2F096",
    "roleName": "Principal Engineer, QA",
    "email": "abhilash.karlapudi@imaginea.com"
  }
]


function renderEmployees(employees) {
  document.querySelector('#list').innerHTML = '';
  for (var i=0;i< employees.length;i++) {
    var list = document.getElementById("list");
    var li = document.createElement("li");
    var div1 = document.createElement("div");
    div1.setAttribute("class","profile-details");
    var div11 = document.createElement("div");
    div11.setAttribute("class","profile");
    div11.textContent = employees[i].firstName[0]; 
    var div12 = document.createElement("div");
    div12.textContent = "Emp ID:" + employees[i].employeeCode;
    // console.log(employees[i].employeeCode);
    var div13 = document.createElement("div");
    div13.textContent = "Blood Group:" + employees[i].bloodGroup;
  
    var div2 = document.createElement("div");
    div2.setAttribute("class","employee-details");
  
    var div21 = document.createElement("div");
    div21.setAttribute("class","name");
    div21.textContent = employees[i].firstName;
  
    var div22 = document.createElement("div");
    div22.setAttribute("class","persnalInfo");
    var span221 = document.createElement("span");
    span221.textContent = employees[i].roleName + " | ";
    var span222 = document.createElement("span");
    span222.textContent = employees[i].buName + " | ";
    var span223 = document.createElement("span");
    span223.textContent = employees[i].workLocation;
  
    var div23 = document.createElement("div");
    div23.setAttribute("class","mailInfo");
    // var mailIcon = document.createElement("i");
    // mailIcon.setAttribute("class","fas fa-envelope");
    div23.innerHTML = "<i class='fas fa-envelope'></i>"
    var a232 = document.createElement("a");
    a232.setAttribute("href","#");
    a232.textContent = employees[i].email;
  
    var div24 = document.createElement("div");
    div24.setAttribute("class","contactInfo");
    // var callIcon = document.createElement("i");
    // callIcon.setAttribute("class","fas fa-phone");
    div24.innerHTML = "<i class='fas fa-phone'></i>";
    var span242 = document.createElement("span");
    span242.textContent = employees[i].mobile + " | ";
    var span243 = document.createElement("span");
    span243.textContent = "Desk :" + employees[i].cubical;
  
  
    list.appendChild(li);
    li.appendChild(div1);
    li.appendChild(div2);
    div1.appendChild(div11);
    div1.appendChild(div12);
    div1.appendChild(div13);
    div2.appendChild(div21);
    div2.appendChild(div22);
    div2.appendChild(div23);
    div2.appendChild(div24);
    div22.appendChild(span221);
    div22.appendChild(span222);
    div22.appendChild(span223);
    // mailInfo.appendChild("i");
    div23.appendChild(a232);
    // contactInfo.appendChild("i");
    div24.appendChild(span242);
    div24.appendChild(span243);
  
  }  
}

renderEmployees(data);




function search(event){
  var value = event.target.value;
  document.getElementById("demo").innerHTML = "" ;
  var filteredData = [];
  
  
  
  // var btns = document.getElementsByClassName("city-name");
  // var classList = event.currentTarget.classList ;
  // for(i=0;i<btns.length;i++){
  //   if(btns[i].classList.contains("active")){
  //    btns[i].classList.remove("active");

  //   }
  // }




  console.log('value...', value);
  for(var i=0;i<data.length;i++){
    if(data[i].firstName.indexOf(value) != -1){
      filteredData.push(data[i]);
    }
    else if(data[i].lastName.indexOf(value) != -1){
      filteredData.push(data[i]);
     }
    else if(data[i].email.indexOf(value) != -1){
      filteredData.push(data[i]);
    }
   
  }
  if(filteredData == "") document.getElementById("demo").innerHTML ="nothing is found";
  
  


  renderEmployees(filteredData);
}

var input = document.querySelector('#input-search');
input.addEventListener('input', search)







function Hyderabad(event){
  // var value = event.target.value;
  document.getElementById("demo").innerHTML = "";
  var filteredData = [];



  var btns = document.getElementsByClassName("city-name");
  var classList = event.currentTarget.classList ;
  for(i=0;i<btns.length;i++){
    if(btns[i].classList.contains("active")){
     btns[i].classList.remove("active");

    }
  }
  event.currentTarget.classList.add("active");




  for(var i=0;i<data.length;i++){
    if(data[i].workLocation == "Hyderabad"){
      filteredData.push(data[i]);
    }
    
  }
    if (filteredData.length == 0) document.getElementById("demo").innerHTML = "no one from Hyderabad";

renderEmployees(filteredData);
}
var hyd = document.getElementById("hyd");
hyd.addEventListener("click",Hyderabad);


function Mumbai(event){
  // var value = event.target.value;
  document.getElementById("demo").innerHTML = "";
  var filteredData = [];


  var btns = document.getElementsByClassName("city-name");
  var classList = event.currentTarget.classList ;
  for(i=0;i<btns.length;i++){
    if(btns[i].classList.contains("active")){
     btns[i].classList.remove("active");

    }
  }
  event.currentTarget.classList.add("active");

  for(var i=0;i<data.length;i++){
    if(data[i].workLocation == "Mumbai"){
      filteredData.push(data[i]);
    }
    
  }
  if (filteredData.length == 0)  document.getElementById("demo").innerHTML = "no one from Mumbai";
  
renderEmployees(filteredData);
}
var Mumbi = document.getElementById("mum");
Mumbi.addEventListener("click",Mumbai);

function Chenni(event){
  // var value = event.target.value;
  document.getElementById("demo").innerHTML = "";
  var filteredData = [];


  var btns = document.getElementsByClassName("city-name");
  var classList = event.currentTarget.classList ;
  for(i=0;i<btns.length;i++){
    if(btns[i].classList.contains("active")){
     btns[i].classList.remove("active");

    }
  }
  event.currentTarget.classList.add("active");

  for(var i=0;i<data.length;i++){
    if(data[i].workLocation == "Chennai"){
      filteredData.push(data[i]);
    }
    
  }
   if (filteredData.length == 0)  document.getElementById("demo").innerHTML = "no one from Chennai";
 
renderEmployees(filteredData);
}
var Chennai = document.getElementById("chenni");
Chennai.addEventListener("click",Chenni);

function Mountain(event){
  // var value = event.target.value;
  document.getElementById("demo").innerHTML = "";
  var filteredData = [];


  var btns = document.getElementsByClassName("city-name");
  var classList = event.currentTarget.classList ;
  for(i=0;i<btns.length;i++){
    if(btns[i].classList.contains("active")){
     btns[i].classList.remove("active");

    }
  }
  event.currentTarget.classList.add("active");


  for(var i=0;i<data.length;i++){
    if(data[i].workLocation == "Bengaluru"){
      filteredData.push(data[i]);
    }
    
  }
    if (filteredData.length == 0)  document.getElementById("demo").innerHTML = "no one from Bengaluru";

renderEmployees(filteredData);
}
var Bengaluru = document.getElementById("banglur");
Bengaluru.addEventListener("click",Mountain);

function London(event){
  // var value = event.target.value;
  document.getElementById("demo").innerHTML = "";
  var filteredData = [];

  
  var btns = document.getElementsByClassName("city-name");
  var classList = event.currentTarget.classList ;
  for(i=0;i<btns.length;i++){
    if(btns[i].classList.contains("active")){
     btns[i].classList.remove("active");

    }
  }
  event.currentTarget.classList.add("active");
  
  
  
  
  for(var i=0;i<data.length;i++){
    if(data[i].workLocation == "London"){
      filteredData.push(data[i]);
    }
    
  }
  if (filteredData.length == 0)  document.getElementById("demo").innerHTML = "no one from London";
  
renderEmployees(filteredData);
}
var Lndn = document.getElementById("london");
Lndn.addEventListener("click",London);

