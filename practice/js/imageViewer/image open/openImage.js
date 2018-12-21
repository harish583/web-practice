
flowers = [
  "../katenetmarigolds2009b_1280.jpg",
  "../katenetcrapemyrtle2009a_1280.jpg",
  "../katenet-flowerwallpaper2011a_1280.jpg",
  "../katenet-pinkflowerwallpaper2011_1280.jpg"
]





function loading(){
    for(var i = 0 ;i < flowers.length;i++){
        var container = document.querySelector(".container");
        var div = document.createElement("div");
        div.setAttribute("class","imageContainer");
        var images = document.createElement("img");
        images.setAttribute("class","flowers");
        images.setAttribute("data-id",i);
        images.setAttribute("src",flowers[i]);
        images.addEventListener("click", myfunction)
        function myfunction(event){
           // showImage(event);
            var x = event.target.dataset.id;
            showImage(x);
        };
        var span = document.createElement("span");
        span.innerHTML = "flower" + i;
        div.appendChild(images);
        div.appendChild(span);
        container.appendChild(div);
        
    }
    
    




    //binding for full image 
    //var index = document.querySelector(".active");
    //document.getElementById("maxWidth").innerHTML = "";
    function showImage(index){
        //document.getElementById("maxWidth").innerHTML = "";
        var container = document.querySelector(".container");
        var actives = document.querySelectorAll(".flowers");
        var openImage = document.querySelector("#maxWidth");
        var openImage =  document.createElement("div");
        openImage.setAttribute("id","maxWidth");
        var div = document.createElement("div");
        var image = document.createElement("img");
        div.setAttribute("class","imageDisplayContainer");
        image.setAttribute("class","flowers");
        image.setAttribute("src",flowers[index]);
        div.appendChild(image);
        openImage.appendChild(div);
        container.appendChild(openImage);
        for(var i = 0; i< actives.length;i++){
            actives[i].classList.remove("active");
            actives[i].parentElement.classList.remove("active");
        
        }
        actives[index].parentElement.classList.add("active");
        
        
       
        // document.getElementById("maxWidth").innerHTML = "";
    }

}





loading();