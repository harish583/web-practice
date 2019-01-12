
var a = [
    {
        image: "https://images.manyavar.com/product_images/6652/qty_30/open-uri20170623-26864-1t5yome?1541415744",
        details: "mens clothes",
        size: "size:XL",
        priceValue: 1000

    },
    {
        image: "https://i.ebayimg.com/images/g/qQUAAOSwFe5X1~Hv/s-l300.jpg",
        details: "mens clothes",
        size: "size:XL",
        priceValue: 1200

    },
    {
        image: "https://ae01.alicdn.com/kf/HTB1mhKcRVXXXXXnaXXXq6xXFXXXc/Boys-blazers-kids-Boys-suits-for-weddings-Prom-Suits-Wedding-Dress-for-Boys-Kids-tuexdo-Children.jpg_640x640.jpg",
        details: "mens clothes",
        size: "size:XL",
        priceValue: 900

    },

    {
        image: "https://i.ebayimg.com/images/g/qQUAAOSwFe5X1~Hv/s-l300.jpg",
        details: "men clothes",
        size: "size:XL",
        priceValue: 1200

    },
    {
        image: "https://images.manyavar.com/product_images/6652/qty_30/open-uri20170623-26864-1t5yome?1541415744",
        details: "mens clothes",
        size: "size:XL",
        priceValue: 1000

    },
    {
        image: "https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/p/l/plain-art-silk-jacquard-jodhpuri-suit-in-black-v1-mhg851.jpg",
        details: "mens clothes",
        size: "size:XL",
        priceValue: 1500

    },
    {
        image: "https://ae01.alicdn.com/kf/HTB1mhKcRVXXXXXnaXXXq6xXFXXXc/Boys-blazers-kids-Boys-suits-for-weddings-Prom-Suits-Wedding-Dress-for-Boys-Kids-tuexdo-Children.jpg_640x640.jpg",
        details: "mens clothes",
        size: "size:XL",
        priceValue: 900

    }
];

function htmlBinding(list) {
    var holder = document.querySelector(".content-holder");
    holder.textContent = '';
    for (var i = 0; i < a.length; i++) {
        var div1 = document.createElement("div");
        var img = document.createElement("img");
        var div2 = document.createElement("div");
        var div21 = document.createElement("div");
        var div22 = document.createElement("div");
        var div23 = document.createElement("div");
        var span = document.createElement("span");
        // var button1 = document.createElement("button")
        var button2 = document.createElement("button")
        img.setAttribute("src", list[i].image);
        div1.setAttribute("class", "holder")
        div1.setAttribute("data-id", i);
        div2.setAttribute("class", "full-info");
        div21.setAttribute("class", "details");
        div22.setAttribute("class", "size");
        div23.setAttribute("class", "price");
        span.setAttribute("class", "price-value");
        // button1.setAttribute("class","buy");
        button2.setAttribute("class", "add-to-cart");
        button2.setAttribute("data-id", i);
        div21.textContent = list[i].details;
        div22.textContent = list[i].size;
        div23.textContent = "price:Rs.";
        span.textContent = list[i].priceValue;
        // button1.textContent = "BUY";
        button2.textContent = "Add to Cart";
        div23.appendChild(span);
        div2.append(div21);
        div2.append(div22);
        div2.append(div23);
        div1.appendChild(img);
        div1.appendChild(div2);
        // div1.appendChild(button1);
        div1.appendChild(button2);
        holder.appendChild(div1);

    }
    var lastdiv = document.createElement("div");
    lastdiv.setAttribute("class","corted-list-holder")
    holder.appendChild(lastdiv);


}
htmlBinding(a);
function prize(a) {
    var price = document.querySelectorAll(".price-value");
    var d = [];
    var sortedList = [];
    for (var i = 0; i < price.length; i++) {
        d.push(price[i].textContent);
    }
    console.log(d);
    var c = d.reduce(function (a, b) { return Math.max(a, b); });
    for (var i = 0; i <= c; i++) {
        // x = x + price[i].textContent;
        for (var x = 0; x < price.length; x++) {
            if (i == price[x].textContent) {
                sortedList.push(a[x])
            }
        }


    }
    htmlBinding(sortedList);


}
function cartHistory(list) {
    var cortedList = document.querySelector(".corted-list-holder");
    // cortedList.value= '';
    var initialHTML = '<div>' +
        '<div class = "background"></div>'+
        '<div class="close">X</div>' +
        '<h1>Carted list</h1>';
    var html = '';
    for (var i = 0; i < list.length; i++) {
        html = html + '<div class="Corted " data-id="' + i + '">' +
            '<img class="full-images" src="' + list[i].image + '" >' +
            '<div class="details">' + list[i].details + '</div>' +
            '<div class="size">' + list[i].size + '</div>' +
            '<div class="price">price:Rs.<span class="price-value">' + list[i].priceValue + '</span></div>' +
            '<div class= "remove-from-cart" data-id="'+i+'">remove from cart</div>'+
            '</div>'
    }
    cortedList.innerHTML = initialHTML + html;
    if(!(list)){
        cortedList.innerHTML = "cart is empty";
    }
    // cortedList.style.disply="none";
    var remove = document.querySelectorAll(".remove-from-cart");
    for(var x = 0;x<cartList.length;x++){
        remove[x].addEventListener("click",function(){
        removingItems(event,cartList)});
    }
    var closeing = document.querySelector(".close");
    closeing.addEventListener("click",closingCart);

}
var cartList = [];
function addToCart(event){
    
    var id = event.currentTarget.dataset.id;
   // var adding = document.querySelectorAll(".holder");
   if(!(cartList.includes(a[id]))){
       
   
    cartList.push(a[id]);
   }
    console.log(cartList);
    var adding = document.querySelectorAll(".add-to-cart");
    adding[id].textContent = "added";
    adding[id].style.backgroundColor="green";
     cartHistory(cartList);

    

    
}

function closingCart() {
    //var parent = document.querySelector(".background");
    var cartedList = document.querySelector(".corted-list-holder");
    cartedList.style.display="none";
    // parent.style.display="none";
}
function cartDetails(){
    var cartedList = document.querySelector(".corted-list-holder");
    cartedList.style.display="block";
}


function removingItems(event,cartList){
    //var remove = document.querySelectorAll(".remove-from-cart");
    var id = event.currentTarget.dataset.id;
    cartList.splice(id,1);
    var adding = document.querySelectorAll(".add-to-cart");
    adding[id].textContent = "add to cart ";
    adding[id].style.backgroundColor="";
    cartHistory(cartList);
}

function EventHandlers(){
    var sorting = document.querySelector(".sort-by-price");
    sorting.addEventListener("click", function () { prize(a) });
    // prize(a);

    var adding = document.querySelectorAll(".add-to-cart");
    for(var i =0;i<adding.length;i++){
    adding[i].addEventListener("click",addToCart);
    }
    var CartHistory = document.querySelector(".CartHistory");
    CartHistory.addEventListener("click",cartDetails);
    // cartHistory(list);

}
EventHandlers();   