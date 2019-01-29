

// accordian
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


// tab content horizontally
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


//tabs vertically
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





//search content

listingElemnts=["abc","hello","xyz","lmn","dfg"]

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
var listingElemnts=[];
function history(){

    // document.querySelector(".search-history").innerHTML ='';
    var searchHolder = document.querySelector(".text-field");
    var value = searchHolder.value;
    var content = document.querySelectorAll(".searchBar");
    for(var i=0;i<content.length;i++){
        if(content[i].innerHTML.includes(value)){
            //console.log("abc contains"+content[i].innerHTML);
            listingElemnts.push(content[i].innerHTML);
        }
       // console.log(searchHolder.value)
    }
    // document.querySelector(".search").innerHTML =Elements;
    // document.querySelector(".search-history").innerHTML ='';
    rendering(listingElemnts);
}
var searchHolder = document.querySelector(".text-field");
searchHolder.addEventListener("keypress",history);