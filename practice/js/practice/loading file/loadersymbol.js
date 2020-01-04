

// // accordian
function subcontent(event){
    var i = event.currentTarget.dataset.id;
    var sublist = document.querySelectorAll(".sub-list");
    var symbol = document.querySelectorAll(".display");
    sublist[i].style.display="block";
    symbol[i].innerHTML = '-';
}
function hidenContent(event){
    var x = event.target.dataset.id;
    var sublists = document.querySelectorAll(".sub-list");
    var symbols = document.querySelectorAll(".display");
    sublists[x].style.display="none";
    symbols[x].innerHTML = '+';
}
var list = document.querySelectorAll('.list-elements-content');
for(var i =0;i<list.length;i++){
    list[i].addEventListener("click",subcontent);
}
var closing = document.querySelectorAll(".display");
for(var i=0;i<closing.length;i++){
    closing[i].addEventListener("click",hidenContent);
}


// // tab content horizontally
function linkHolder(){
    var a = event.currentTarget.dataset.id;
    var content = document.querySelector('.link-content-holder');
    content.innerHTML = " link"+(parseInt(a)+1)+" link  "+(parseInt(a)+1)+" link "+(parseInt(a)+1)+" link "+(parseInt(a)+1)+" link "+(parseInt(a)+1);
    var links = document.querySelectorAll('.link');
    for(var i =0;i<links.length;i++){
        if(links[i].classList.contains("active")){
            links[i].classList.remove("active") 
        }
    }
    links[a].classList.add("active");
}
var links = document.querySelectorAll('.link');
for(var i=0;i<links.length;i++){
    links[i].addEventListener("click",linkHolder);
} 


// //tabs vertically
function verticalContent(){
    var a = event.currentTarget.dataset.id;
    var verticalLinks = document.querySelectorAll(".verticat-link");
    for(var x =0;x<verticalLinks.length;x++){
        if(verticalLinks[x].classList.contains("active-vertical")){

    verticalLinks[x].classList.remove("active-vertical");
        }
    }
    verticalLinks[a].classList.add("active-vertical");
    var verticalContent = document.querySelector(".vertical-content");
    verticalContent.innerHTML = " link"+(parseInt(a)+1)+" link  "+(parseInt(a)+1)+" link "+(parseInt(a)+1)+" link"+(parseInt(a)+1)+" link  "+(parseInt(a)+1)+" link "+(parseInt(a)+1);


}
var verticalLinks = document.querySelectorAll(".verticat-link");
for(var i=0;i<verticalLinks.length;i++){
    verticalLinks[i].addEventListener("click",verticalContent)
}





// //search content

listingElemnts=["abc","hello","xyz","lmn","dfg","abxy"]

function rendering(listingElemnts){
    var html=
    '<div class="search"></div>'+
    '<div class="search-history">';
    var elemts=''; 
    for(var i=0;i<listingElemnts.length;i++){
     elemts = elemts+ '<div class="searchBar">'+listingElemnts[i]+'</div>';
    }
   
    document.querySelector(".search-holder").innerHTML = '';
    document.querySelector(".search-holder").innerHTML = html+elemts+'</div></div>'
}
rendering(listingElemnts);
var x='';
function history(){

    var listingElemnt=[];
    var searchHolder = document.querySelector(".text-field");
    var value = searchHolder.value;
    var content = document.querySelectorAll(".searchBar");
    console.log(content.length);
    for(let i=0;i<listingElemnts.length;i++){
        if(listingElemnts[i].includes(value)){
            listingElemnt.push(listingElemnts[i]);
        }
        // if(listingElemnts[i].indexOf(value)>=0){
        //     listingElemnt.push(listingElemnts[i]);
        // }
    }
    rendering(listingElemnt);
}
var searchHolder = document.querySelector(".text-field");
// searchHolder.addEventListener("change",history);
// searchHolder.addEventListener("keydown",history);
searchHolder.addEventListener("keyup",history);



// // navbar animation

function navvisible(){
    var content = document.querySelector(".nav-content-holder");
    content.style.width="300px";
    document.querySelector(".animated-slide").style.marginLeft ="300px";

  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    // var lines = document.querySelector(".lines-holder");
    // lines.style.width="0px";
    
}
function navClose(){
    var content = document.querySelector(".nav-content-holder");
    content.style.width="0px";
    document.body.style.backgroundColor = "white";
    // var lines = document.querySelector(".lines-holder");
    document.querySelector(".animated-slide").style.marginLeft ="0px";
    // lines.style.width="100px";
}

var lines = document.querySelector(".lines-holder");
lines.addEventListener("click",navvisible);
var closingNav =  document.querySelector(".closing-nav");
closingNav.addEventListener("click",navClose);



// // nav bar with display action
function displaynavvisible(){
    var content = document.querySelector(".display-nav-content-holder");
    content.style.display="block";
    var lines = document.querySelector(".display-lines-holder");
    lines.style.display="none";
    
}
function displaynavClose(){
    var content = document.querySelector(".display-nav-content-holder");
    content.style.display="none";
    var lines = document.querySelector(".display-lines-holder");
    lines.style.display="block";
}

var lines = document.querySelector(".display-lines-holder");
lines.addEventListener("click",displaynavvisible);
var closingNav =  document.querySelector(".display-closing-nav");
closingNav.addEventListener("click",displaynavClose);



//Hoverable Sidenav Buttons




//
function clickingfunction(){
    var clas = document.querySelector(".click-dropdown-list")
    if(clas.classList.contains("activate")){
        clas.classList.remove("activate");

    }else{
        clas.classList.add("activate");
    }
}
document.querySelector(".click-dropdown").addEventListener("click",clickingfunction)