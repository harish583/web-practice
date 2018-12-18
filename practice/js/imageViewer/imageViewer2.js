var slideIndex = 0;
changeWithCheck(slideIndex);

function changeWithCheck(values){
    // if(values > flower.length){
    //     slideIndex = 0;
    // }
    var checkBox = document.getElementsByClassName("checkBox");
    var flower = document.getElementsByClassName("flower");
    
      if(values >= flower.length) {values = 0}
      if(values < 0){ values = flower.length-1;}
   for(var i =0;i <checkBox.length ;i++){
      checkBox[i].classList.remove("check");
      flower[i].classList.remove("active");
   }
   //  if(event.target.classList.contains("flower"))
   //  event.target.classList.add("check");
   checkBox[values].classList.add("check");
   flower[values].classList.add("active");
}
// var li = document.getElementsByClassName("checkBox");
// li.setAttribute("click","changeWithCheck");
function changeWithArrowLeft(n){
   var flower = document.getElementsByClassName("flower");
   if(slideIndex < 0){
      slideIndex = flower.length-1;
   }
   changeWithCheck(slideIndex += n);
}
function changeWithArrowRight(n){
   var flower = document.getElementsByClassName("flower");
   if(slideIndex == flower.length - 1){
     slideIndex = -1;
   }
   changeWithCheck(slideIndex += n);
}






