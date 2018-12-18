var slideIndex = 0;
var previousActive = 0;
changeWithCheck(slideIndex);

function changeWithCheck(values){
    // if(values > flower.length){
    //     slideIndex = 0;
    // }
    var checkBox = document.getElementsByClassName("checkBox");
    var flower = document.getElementsByClassName("flower");
   // for(var i =0;i <checkBox.length ;i++){
   //    checkBox[i].classList.remove("check");
   //    flower[i].classList.remove("active");
   // }
   //  if(event.target.classList.contains("flower"))
   //  event.target.classList.add("check");

   checkBox[previousActive].classList.remove("check");
   flower[previousActive].classList.remove("active");

   checkBox[values].classList.add("check");
   flower[values].classList.add("active");
}
// var li = document.getElementsByClassName("checkBox");
// li.setAttribute("click","changeWithCheck");
// function changeWithArrowLeft(n){
//    var flower = document.getElementsByClassName("flower");
//    if(slideIndex <= 0){
//       slideIndex = flower.length;
//    }
//    changeWithCheck(slideIndex += n);
// }
// function changeWithArrowRight(n){
//    var flower = document.getElementsByClassName("flower");
//    if(slideIndex == flower.length - 1){
//      slideIndex = -1;
//    }
//    changeWithCheck(slideIndex += n);
// }





// var left = document.getElementById("left");
// left.addEventListener('click',function(event){
// var leftArrow =  parseInt(event.currentTarget.dataset.id);
// changeWithArrowLeft(leftArrow);
// })


// var right = document.getElementById("right");
// right.addEventListener('click',function(event){
// var rightArrow =  parseInt(event.currentTarget.dataset.id);
// changeWithArrowRight(rightArrow);
// })

// var arrows = document.querySelectorAll('.arrow');
// for(var i = 0; i<arrows.length; i++) {
//    arrows[i].addEventListener('click', function(event) {
//       var id = parseInt(event.currentTarget.dataset.id);
//       if(id === -1) {
//          changeWithArrowLeft(id)
//       } else {
//          changeWithArrowRight(id);
//       }
//    })
// }

// var arrows = document.querySelectorAll('.arrow');
// for(var i = 0; i<arrows.length; i++) {
//    arrows[i].addEventListener('click', function(event) {
//       var id = parseInt(event.currentTarget.dataset.id);
//       var flower = document.getElementsByClassName("flower");
//       slideIndex = slideIndex + id;
//       if(slideIndex === -1) {
//          slideIndex = flower.length - 1
//       }
//       if (slideIndex === flower.length) {
//          slideIndex = 0;
//       }
//       changeWithCheck(slideIndex);
//    })
// }


var arrows = document.querySelectorAll('.arrow');
for(var i = 0; i<arrows.length; i++) {
   arrows[i].addEventListener('click', function(event) {
      var id = parseInt(event.currentTarget.dataset.id);
      var flower = document.getElementsByClassName("flower");
      slideIndex = slideIndex + id;
      if(slideIndex === -1) {
         slideIndex = flower.length - 1
      }
      if (slideIndex === flower.length) {
         slideIndex = 0;
      }
      var checkBox = document.getElementsByClassName("checkBox");
      checkBox[slideIndex].click();
   })
}




var checkBox = document.getElementsByClassName("checkBox");
for(var i = 0; i<checkBox.length; i++) {
   checkBox[i].addEventListener('click', function(event) {
      var index = parseInt(event.currentTarget.dataset.id);
      changeWithCheck(index);
      previousActive = index;
   })
}