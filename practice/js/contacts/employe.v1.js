var searchText = '';
var selectedLoc = [];
function renderEmployees(employees) {
  document.querySelector('#list').innerHTML = '';
  document.getElementById("demo").innerHTML = '';
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
  if(employees.length == 0) {
    document.getElementById("demo").innerHTML ="nothing is found";
  }
}

function filterByName(arr, term) {
  if(!term) {
    return arr;
  }
  var fdata = [];
  for(var i=0;i<arr.length;i++){
    if(arr[i].firstName.toLowerCase().indexOf(term) != -1){
      console.log(term);
      fdata.push(arr[i]);
    }
    else if(arr[i].lastName.toLowerCase().indexOf(term) != -1){
      fdata.push(arr[i]);
     }
    else if(arr[i].email.toLowerCase().indexOf(term) != -1){
      fdata.push(arr[i]);
    }
    
  }
  // if(fdata.indexOf(term) == -1)
  //  term.setAttribute("backgroundColor","yellow"); 
  return fdata;
}

function filterByLoc(arr, loc) {
  if(loc.length === 0) {
    return arr;
  }
  var fdata = [];
  for(var i=0;i<arr.length;i++){
    if(loc.indexOf(arr[i].workLocation) != -1){
      fdata.push(arr[i]);
    }
  }
  return fdata;
}


function filteredData(employees, searchTerm, loc) {
  var fdata = filterByName(employees, (searchTerm || '').toLowerCase());
  var finaldata = filterByLoc(fdata, loc);
  return finaldata;
}


function handleRerender() {
  var emps = filteredData(data, searchText, selectedLoc);
  renderEmployees(emps);
}
handleRerender();


function handleSearch(event){
  var value = event.target.value;
  searchText = value;
  handleRerender();
}

var input = document.querySelector('#input-search');
input.addEventListener('input', handleSearch)


function handleCityClick(event) {
  var value = event.currentTarget.dataset.value;
  if (selectedLoc.indexOf(value) == -1) {
    selectedLoc.push(value);
  } else {
    var index = selectedLoc.indexOf(value);
    selectedLoc.splice(index, 1);
  }
  for(i=0;i<cities.length;i++){
    var tagValue = cities[i].dataset.value;
    cities[i].classList.remove('active');
    if(selectedLoc.indexOf(tagValue) != -1) {
      cities[i].classList.add('active');
    }
  }
  handleRerender();
}

var cities = document.querySelectorAll('.city-name');

for(var i = 0; i< cities.length; i++) {
  cities[i].addEventListener('click', handleCityClick)
}