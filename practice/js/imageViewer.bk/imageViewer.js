// function checked1(event){
//     var classes = event.target.classList;
//   //  console.log(classes);
//     if(!(classes.contains("checked"))){
        
//         var menu = document.getElementsByClassName("boxes");
//         var flowers = document.getElementsByClassName("flower");
//        // console.log(menu.length);
//          for(i=0;i<menu.length;i++){
//             menu[i].classList.remove("checked");
//             flowers[i].classList.add("opacity");
//         }
//         classes.add("checked");
//         flowers[0].classList.remove("opacity");

//     }
//   // console.log(classes);
// }

// function checked2(event){
//     var classes = event.target.classList;
//   //  console.log(classes);
//     if(!(classes.contains("checked"))){
        
//         var menu = document.getElementsByClassName("boxes");
//         var flowers = document.getElementsByClassName("flower");
//        // console.log(menu.length);
//          for(i=0;i<menu.length;i++){
//             menu[i].classList.remove("checked");
//             flowers[i].classList.add("opacity");
//         }
//         classes.add("checked");
//         flowers[1].classList.remove("opacity");

//     }
//   // console.log(classes);
// }function checked3(event){
//     var classes = event.target.classList;
//   //  console.log(classes);
//     if(!(classes.contains("checked"))){
        
//         var menu = document.getElementsByClassName("boxes");
//         var flowers = document.getElementsByClassName("flower");
//        // console.log(menu.length);
//          for(i=0;i<menu.length;i++){
//             menu[i].classList.remove("checked");
//             flowers[i].classList.add("opacity");
//         }
//         classes.add("checked");
//         flowers[2].classList.remove("opacity");

//     }
  // console.log(classes);
//}
function checked(event){
    var classes = event.target.classList;
  //  console.log(classes);
    if(!(classes.contains("checked"))){
        
        var menu = document.getElementsByClassName("boxes");
        var flowers = document.getElementsByClassName("flower");
       // console.log(menu.length);
         for(i=0;i<menu.length;i++){
            menu[i].classList.remove("checked");
            flowers[i].classList.add("opacity");
        }
        classes.add("checked");
        var attribute = event.currentTarget.getAttribute("data-uid");  
        flowers[attribute].classList.remove("opacity");

    }
  // console.log(classes);
}








function moveToPrevious(event){
    // var previous = event.target.classList;

    var flowers = document.getElementsByClassName("flower");
     console.log(flowers.length);
     for(i=0;i<flowers.length;i++){
        console.log(flowers[i]);
         var flowerClass = flowers[i].classList;
     
     if(!(flowerClass.contains("opacity"))){
    //     var flowers = document.getElementsByClassName("flower");
        //  console.log(flowers);
        flowerClass.add("opacity");
        // flowers[i-1].remove("opacity");
        //  console.log(flowers);

     }
    }

}


function moveToNext(event){
    var flower = document.getElementsByClassName("flower");
    
    for(i=0;i<flower.length;i++){
        flower[i].classList.add("opacity");
    }
    // var boxes = document.getElementsByClassName("boxes")
    // var checked = event.currentTarget.classList;

    //  var checked = event.target.getAttribute("data-uid"); 
    // for(i=0;i<checked.length;i++){
    // if(checked.contains("checked")){

      flower[i+1].remove("opacity");

    // }
    // var attribute = event.target.getAttribute("data-uid");  
    // flower[attribute+1].classList.remove("opacity");
    // var classes = event.currentTarget.getAttribute("data-uid");

    // flower[classes+1].classList.remove("opacity");
    // }
}