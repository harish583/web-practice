var index = 0;
var opacity;
var slides;
 var flowers1 =[
     "../katenetmarigolds2009b_1280.jpg",
     "../katenetcrapemyrtle2009a_1280.jpg",
     "../katenet-flowerwallpaper2011a_1280.jpg",
     "../katenet-pinkflowerwallpaper2011_1280.jpg"
 ]
 var flowers2 =[
    "a1.jpg","a2.jpg","a3.jpg","a4.jpg","a5.jpg"
]


//binding events
function binding(flower1,format){
    var index = 0;
    var opacity;
    var slides;
    var container = document.querySelector(".container");
    var divopacityContainer = document.createElement("div");
    divopacityContainer.setAttribute("class","opacityContainer");
    for(var i =0;i<flower1.length;i++){
        
        container.appendChild(divopacityContainer);
        var div1 = document.createElement("div");
        var img1 = document.createElement("img");
        div1.setAttribute("class","flower1");
        if(format == "slide"){
            div1.setAttribute("class","flower2");
            div1.classList.add("opacity1")
        };
        img1.setAttribute("src",flower1[i]);
        div1.setAttribute("data-id",i);
        div1.appendChild(img1);
        divopacityContainer.appendChild(div1);
    }
    var flower = document.querySelectorAll(".flower1");
    if(format == "opacity"){
       // var flower = document.querySelectorAll(".flower2");
        flower[index].classList.add("opacity");}
    //for arrow binding
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


//for checkboxes binding
    var ulcheckli = document.createElement("ul");
    ulcheckli.setAttribute("class","checkli");
    for(var i = 0;i < flower1.length;i++){
        ulcheckli.setAttribute("class","checkli");
        var li = document.createElement("li");
        li.setAttribute("class","checkbox1");
        li.setAttribute("data-id",i);
        li.addEventListener("click",function(event){
            var x = event.currentTarget.dataset.id;
            checkBox(x);
        })
        ulcheckli.appendChild(li);
    }
    divopacityContainer.appendChild(ulcheckli);
    var forcheck = document.querySelectorAll(".checkbox1");
    forcheck[index].classList.add("check");

    // for margin to the first element in sliding
    if(format == "slide"){
        var forMargin = document.querySelector(".flower2");
        forMargin.classList.add("margin");
    }
   
    
    // for checkbox****************************
    //var value = document.querySelector(".check");
    function checkBox(value){
        var checkbox = document.querySelectorAll(".checkbox1");
        var flower = document.querySelectorAll(".flower1");
        for(var i =0;i<checkbox.length;i++){
            checkbox[i].classList.remove("check");
            if(format == "opacity"){ flower[i].classList.remove("opacity");}
        }
        checkbox[value].classList.add("check");
        if(format == "opacity"){ flower[value].classList.add("opacity");}
        if(format == "slide"){
            var flower = document.querySelectorAll(".flower2");
           // flower[value].classList.add("opacity1");
            flower[0].style.marginLeft = -(value * 100) + '%';
        }
    }

    //for leftarrow function
    function leftArrow1(n){
        var checkbox = document.querySelectorAll(".checkbox1");
        var x = document.querySelector(".check");
        var index = parseInt(x.dataset.id);
        if(index <= 0){
            index = checkbox.length - 1;

        }
        else index = index + n;
        checkBox(index);

    }

    //for rightarrow function
    function rightArrow1(n){
        var checkbox = document.querySelectorAll(".checkbox1");
        var check = document.querySelector(".check");
        var index = parseInt(check.dataset.id);
        if(index >= checkbox.length-1){
            index = 0 ;

        }
        else index = index+ n;
        checkBox(index);

    }
    setInterval(function(){
        var node = document.querySelector(".rightArrow1");
        node.click();
        // leftArrow1(-1);
    }, 3000);
}







//flower1::: flowers1 || flowers2;
//format ::: opacity || slide ;
//  function binding(flower1,format);
 binding(flowers1,"opacity");
// binding(flowers2,"slide");




