var imageHolder =[
    "../katenetmarigolds2009b_1280.jpg",
    "../katenetcrapemyrtle2009a_1280.jpg",
    "../katenet-flowerwallpaper2011a_1280.jpg",
    "../katenet-pinkflowerwallpaper2011_1280.jpg"
];
var container = [];
container.length = imageHolder.length;
function loading(){
    for(var id = 0; id< imageHolder.length;id++){
        var container = document.querySelector(".container");
        var div1 = document.createElement("div");
        var image = document.createElement("img");
        div1.setAttribute("class","left");
        image.setAttribute("class","images");
        image.setAttribute("src",imageHolder[id]);
        div1.setAttribute("data-id",id);
        
        //image.setAttribute("src","../katenetmarigolds2009b_1280.jpg");
        // image.setAttribute("src","../katenetcrapemyrtle2009a_1280.jpg");ids()
        // image.setAttribute("src","../katenet-flowerwallpaper2011a_1280.jpg");ids()
        // image.setAttribute("src","../katenet-pinkflowerwallpaper2011_1280.jpg");ids()
        container.appendChild(div1);
        div1.appendChild(image);


        var listElements = document.querySelector(".listElements");
        var li = document.createElement("li");
        var span = document.createElement("span");
        console.log("before");

        listElements.appendChild(li);
        li.appendChild(span);
        span.setAttribute("class","checkBox");

        li.addEventListener("click",myfunction);
        function myfunction(event){
          // var checkBox = document.querySelector(".checkBox");
          var x = event.currentTarget.dataset.id; 
          checkBox(x);
        };

        
        console.log("after");
        li.setAttribute("data-id",id);
        console.log("loading completed");
        var forCheck = document.querySelectorAll(".checkBox");
        
        
    }
    var floating = document.querySelector(".left");
    floating.classList.add("image");
    // // var n = document.curretTarget.dataset.id;
     forCheck[0].classList.add("check");
    // common(0);
    // checkBox();
}


// for arrows
if(imageHolder.length>0){
    var menu = document.querySelector(".menu");
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    span1.setAttribute("class","arrowLeft");
    span2.setAttribute("class","arrowRight");
    menu.appendChild(span1);
    menu.appendChild(span2);
    span1.addEventListener("click",function(){ 
        sliderleft()
    });
    span2.addEventListener("click",function(){ 
        sliderright()
    });
}
    


var check = document.querySelector(".check")
function common(n){
    var image = document.querySelector(".image");
    image.style.marginLeft = -(n * 100) + '%';
    var checkbox = document.querySelectorAll(".checkBox");
    for(var i=0;i< checkbox.length;i++){
                checkbox[i].classList.remove("check");
            }
            checkbox[n].classList.add("check");
    console.log("common function");

    
}


// var check = document.querySelector(".check");
// var id = check.dataset.id;
function checkBox(id){
    console.log("entering in to checkbox");
    var checkbox = document.querySelectorAll(".checkBox");
    for(var i=0;i< checkbox.length;i++){
        checkbox[i].classList.remove("check");
    }
    checkbox[id].classList.add("check");
    //var check = document.querySelector(".check")
   // var n = check.dataset.id;
    console.log("checkbox completed");
    common(id);
}





function sliderright(){
    var images = document.querySelectorAll(".left");
    var check = document.querySelector(".check")
    var n = check.parentElement.dataset.id;
    n = parseInt(n);
    if(n == images.length-1){
        n = 0;
    }
    else n = n + 1;
    console.log("slide right completed");
    common(n);
}
function sliderleft(){
    var images = document.querySelectorAll(".left");
    var check = document.querySelector(".check")
    var n = check.parentElement.dataset.id;
    if(n == 0){
        n = images.length-1;
    }
     else n = n - 1;
     console.log("slide left completed");
    common(n);

}