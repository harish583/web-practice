

flowers = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
function binding(config){
    var activeIndex = 0;
    var prev = 0;
    var opacity;
    var autoInterval;

    function htmlbinding(type){
    //    var wraper = config.target.querySelector(".wraper1");
        var html = '<div  class="image-wraper-'+type +'">'+
        '<div class="left-arrow-wraper" data-id="-1">'+
            '<div class="left-arrow"></div>'+
        '</div>'+
        '<div class="right-arrow-wraper" data-id="1">'+
            '<div class="right-arrow"></div>'+
        '</div>';
        var img = '';
        for(var i = 0;i<flowers.length;i++){
             img += '<div class="image-container-'+type+'">' +'<img  class="image-container" src="'+ flowers[i] +'">'+
        '</div>';
        }
        html = html+img + '<ul class="button-wraper">';
        var li = '';
        for(var i = 0;i<flowers.length;i++){
             li += '<li class="button" data-id="'+i+'"></li>';

        }
        var ending = '</ul>'+
        '</div>'+
    '</div>'
        html = html + li + ending;
        config.target.innerHTML =html;


    }
    function leftArrows(n){
        var index = activeIndex + n;

        // if(activeIndex<=0){
        //     activeIndex = buttons.length;
        // }
        // n = parseInt(n);
        // activeIndex +=n;
        if (index < 0) {
            index = buttons.length -1;
        }

        btn(index,config.type ,event.isTrusted);
    }
    function rightArrows(n){
        var index = activeIndex + n;
        // if(activeIndex >= buttons.length-1){
        //     activeIndex = -1 ;
        // }
        // n = parseInt(n);
        // activeIndex +=n;
        if (index >= buttons.length) {
            index = 0;
        }
        btn(index,config.type,event.isTrusted);
    }
    function btn(index,type,reset){
        prev = activeIndex;
        activeIndex = index;
        buttons[prev].classList.remove("checked");
        buttons[index].classList.add("checked");
        if(type =="opacity"){
            // for(var i =0;i<buttons.length;i++){
            //     imagesAll[i].classList.remove("opacity");
            // }
            imagesAll[prev].classList.remove("opacity");
           // imagesAll[index].classList.add("opacity");
            
        }
        imagesAll[index].classList.add("opacity");
        if(type =="slide"){
            images.style.marginLeft = -(100*index) + '%';
        }
        
        if(reset){
            startAutoCarousel();
        };
    }

    htmlbinding(config.type);
    var leftArrow = config.target.querySelector(".left-arrow-wraper");
    var rightArrow = config.target.querySelector(".right-arrow-wraper");
    var buttons = config.target.querySelectorAll(".button");
    buttons[0].classList.add("checked");
    
    //if(type =="slide"){
    var images = config.target.querySelector(".image-container-"+config.type);
    var imagesAll = config.target.querySelectorAll(".image-container-"+config.type);
   // }
   imagesAll[0].classList.add("opacity");
    leftArrow.addEventListener("click",function(event){
        var x = event.currentTarget.dataset.id;
        leftArrows(parseInt(x))
    });
    rightArrow.addEventListener("click",function(event){
        var x = event.currentTarget.dataset.id;
        rightArrows(parseInt(x))
    });
    for(var i = 0 ; i < buttons.length;i++){
        buttons[i].addEventListener("click",function(event){
            var x = event.currentTarget.dataset.id;
            btn(parseInt(x),config.type);
        });
    }

    function startAutoCarousel() {
        clearInterval(autoInterval);
        autoInterval = setInterval(function(){
            var left = config.target.querySelector(".right-arrow-wraper");
            left.click()
        },3000)
    }
    startAutoCarousel();
   

    

}





//binding("slide");
binding({
    type : "slide",
    target:document.querySelector(".wraper2")
});
binding({
    type : "opacity",
    target:document.querySelector(".wraper")
});
//binding("slide");