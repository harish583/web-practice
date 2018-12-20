
 var index = 0;

 var flower1 =[
     "../katenetmarigolds2009b_1280.jpg",
     "../katenetcrapemyrtle2009a_1280.jpg",
     "../katenet-flowerwallpaper2011a_1280.jpg",
     "../katenet-pinkflowerwallpaper2011_1280.jpg"
 ]
 var flower2 =[
    "../katenetmarigolds2009b_1280.jpg",
    "../katenetcrapemyrtle2009a_1280.jpg",
    "../katenet-flowerwallpaper2011a_1280.jpg",
    "../katenet-pinkflowerwallpaper2011_1280.jpg"
]

 // binding elements*********************
// function loading(){

    var container = document.querySelector(".container");
    var divopacityContainer = document.createElement("div");
    divopacityContainer.setAttribute("class","opacityContainer");
    for(var i =0;i<flower1.length;i++){
        var ulcheckli = document.createElement("ul");
        ulcheckli.setAttribute("class","checkli");
        divopacityContainer.appendChild(ulcheckli);
        container.appendChild(divopacityContainer);
        var div1 = document.createElement("div");
        var img1 = document.createElement("img");
        div1.setAttribute("class","flower1");
        img1.setAttribute("src",flower1[i]);
        div1.setAttribute("data-id",i);
        div1.appendChild(img1);
        divopacityContainer.appendChild(div1);
    }
    var flower = document.querySelectorAll(".flower1");
    flower[index].classList.add("opacity");

    //bindind arrows1
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    span1.setAttribute("class","leftArrow1");
    span1.setAttribute("data-id","-1")
    span2.setAttribute("class","rightArrow1");
    span2.setAttribute("data-id","1")

    span1.addEventListener("click",function(){
        leftArrow1(-1)});
    span2.addEventListener("click",function(){
        rightArrow1(1)});
    divopacityContainer.appendChild(span1);
    divopacityContainer.appendChild(span2);

    //bind checkboxes1
    for(var i = 0;i < flower1.length;i++){
        var li = document.createElement("li");
        li.setAttribute("class","checkbox1");
        li.setAttribute("data-id",i);
        li.addEventListener("click",function(event){
            var x = event.currentTarget.dataset.id;
            checkBox(x);
        })
        ulcheckli.appendChild(li);
    }
    var forcheck = document.querySelectorAll(".checkbox1");
    forcheck[index].classList.add("check");
    
//}



//for slider2
var container = document.querySelector(".container");
var divmarginContainer = document.createElement("div");
divmarginContainer.setAttribute("class","marginContainer");



var ulcheckli2 = document.createElement("ul");
for(var i =0;i<flower2.length;i++){
    ulcheckli2.setAttribute("class","checkli2");
    divmarginContainer.appendChild(ulcheckli2);
    container.appendChild(divmarginContainer);
    var div2 = document.createElement("div");
    var img2 = document.createElement("img");
    div2.setAttribute("class","flower2");
    img2.setAttribute("src",flower2[i]);
    div2.appendChild(img2);
    divmarginContainer.appendChild(div2);


}

//checkbox2


for(var i = 0; i<flower2.length;i++){
var lis = document.createElement("li");
lis.setAttribute("class","checkbox2");
lis.setAttribute("data-id",i);
lis.addEventListener("click",function(){
    var y = parseInt(event.currentTarget.dataset.id);
    checkbox2check(y);

})
ulcheckli2.appendChild(lis);
}

var forMargin = document.querySelector(".flower2");
forMargin.classList.add("margin");
 var forcheck2 = document.querySelector(".checkbox2");
forcheck2.classList.add("check");
var span11 = document.createElement("span");
span11.setAttribute("class","leftArrow");
span11.addEventListener("click",function(){
    leftArrow2(-1)
});
var span22 = document.createElement("span");
span22.setAttribute("class","rightArrow");
span22.addEventListener("click",function(){
    rightArrow2(1)
});
divmarginContainer.appendChild(span11);
divmarginContainer.appendChild(span22);





// for checkbox****************************

var value = document.querySelector(".check");
function checkBox(value){
    var checkbox = document.querySelectorAll(".checkbox1");
    var flower = document.querySelectorAll(".flower1");
    for(var i =0;i<checkbox.length;i++){
        checkbox[i].classList.remove("check");
        flower[i].classList.remove("opacity");
    }
    checkbox[value].classList.add("check");
    flower[value].classList.add("opacity");
}

var checkbox = document.querySelectorAll(".checkbox1");
var x = document.querySelector(".check");
index = parseInt(x.dataset.id);
function leftArrow1(n){
    var checkbox = document.querySelectorAll(".checkbox1");
    var x = document.querySelector(".check");
    index = parseInt(x.dataset.id);
    if(index <= 0){
        index = checkbox.length - 1;

    }
    else index = index + n;
    checkBox(index);

}


function rightArrow1(n){
    var checkbox = document.querySelectorAll(".checkbox1");
    var check = document.querySelector(".check");
    index = parseInt(check.dataset.id);
    if(index >= checkbox.length-1){
        index = 0 ;

    }
    else index += n;
    checkBox(index);

}

//for slider2
function checkbox2check(n){
    
    var flowers2 = document.querySelector(".flower2");
    var lis2 = document.querySelectorAll(".checkbox2");
    for(var i =0;i<flower2.length;i++){
        lis2[i].classList.remove("check");
    }
    lis2[n].classList.add("check");
    flowers2.style.marginLeft = -(n * 100) + '%';
}


function leftArrow2(n){
    
    var checkbox2 = document.querySelectorAll(".checkbox2");
    var checks = document.querySelector(".checkbox2.check");
    var ids = parseInt(checks.dataset.id);
    if(ids <=0){
        ids = checkbox2.length - 1;
    }
    // if(ids>flower2.length){
    //     ids = 0;
    // }
    else ids = ids + n;
    checkbox2check(ids);
}

   
function rightArrow2(n){
    
    // if(ids <=0){
    //     ids = flower2.length - 1;
    // }
    var checkbox2 = document.querySelectorAll(".checkbox2");
    var checks = document.querySelector(".checkbox2.check");
    var ids = parseInt(checks.dataset.id);
    
    if(ids >= checkbox2.length-1){
        ids = 0;
    }
    else ids = ids + n;
    checkbox2check(ids);
}
