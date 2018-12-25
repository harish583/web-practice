
//declare the data
var data1 = ['./images/1.jpg', './images/2.jpg', './images/3.jpg'];

// create the carousel by using config object passed to it and returts an object with few functionlities check the return object for more
/*config: {
    data: [] //arary or image sources (arry of strings)
    target: dom node
    type: slide/fade
    duration: number in millliseconds for auto carousel duration
}*/
function intiateCarousel(config) {

    //aciveSlide gives present acive slide index value
    // activeSlide at any point of our application it will store the active index of the slide / carousel
    // and initalized with 0 
    var activeSlide = 0;
    
    //previousSlide gives last index value -> incurrent or inappropriate comment
    // previousSlide at any point of our application it will store the previous active index of the slide / carousel
    // and initalized with 0 
    var previousSlide = 0;

    // missing commnet for below 5 statements?
    var slides; // collection of dom nodes (slides)
    var bullets; // collection of dom nodes (bullets)
    var arrows; // collection of dom nodes (left and right arrow)
    var autoInterval = null; // timerValue of the auto carousel
    var autoTimeout = null;

    // its select the activated slide and bullet on disply -> wrong 
    function activateSlide(index, reset) {
        // here index is selected element index ,reset gives true -> wrong
        // previousSlide takes the already activeSlide index ->  inappropriate comment
        
        // store the currentActive index in previousSlide (keep tracking the previous active index)
        previousSlide = activeSlide;

        // if passed config is fade
        if (config.type == 'fade') {
            // its remove the active functionality for the last active image -> wrong
            // remove the active-slide class from slides collection for current active index
            slides[activeSlide].classList.remove('active-slide');
        }

        // remove the active-bullet class from slides collection  for current active slide
        bullets[activeSlide].classList.remove('active-bullet');
        
        // and the present index is assign to activeSlide
        activeSlide = index;

        // if given type is same as "fade" then only its execute
        if (config.type == 'fade') {
            // its add the active functionality for the latestactive image -> wrong
            slides[activeSlide].classList.add('active-slide');
        } else if(config.type === 'slide'){
            // if given type is same as "slide" then only its execute
            // add the margin effect for the first image 
            // the margin is depending on active index value 
            slides[0].style.marginLeft = index*-100 + '%';
        }

        // its add the active functionality for the latestactive bullet - wrong
        bullets[activeSlide].classList.add('active-bullet');

        // here reset gives true/false is depending on clicking functionality
        // if its true execute the inner function -> wrong
        if (reset) {
            // again start the functionality -> wrong
            initiateAutoSlide();
        }
    }

    // it is called when bullet was clicked
    function bulletClick(event) {
        // here index takes the value is that selected bullet data-id in string format - inappriate 
        var index = event.currentTarget.dataset.index;

        // its cinverted to integer format using parse int function
        index = parseInt(index)

        // and the call the active function -> wrong
        activateSlide(index, event.isTrusted);
    }

    // callback function for arrow click
    function arrowClick(event) {
        // here event is click event
        // here at that perticular element collect the data-id value and store in as value
        // this value variable is in string format so then converted in to number using parseint function
        // value -1 for left arrow click and 1 for right arrow click
        var value = event.currentTarget.dataset.value;

        // activeSlide gives the activated image id and add to arrow value
        var nextIndex = activeSlide + parseInt(value);
        
        // if sum is more than or equal to imageslength the its set the next index as 0;
        /*// other wise its cross its range and dont show anything -> wrong
        // why because we dont apply the active calsses for the our own imagesa nd bullets  -> wrong*/
        if(nextIndex>=slides.length) {
            nextIndex = 0;
        }
        // if sum is less than  to 0 the its set the next index as imageslength-1;
        /*// other wise its cross its range and dont show anything -> wrong
        // why because we dont apply the active calsses for the our own imagesa nd bullets -> wrong*/
        if (nextIndex < 0) {
            nextIndex = bullets.length - 1;
        }
         // and then calling the activateSlide with updated values
         // we are calling this function with manually and programable
         // we dont know which is mannual clicking or automatic clicking 
         // setTimoute triggers arrow click event which is javascript arrow click trigger, evenet.isTrusted = false which we dont want to reset the timer
         // the clicking functionaly is depending on event.isTrusted
         // if it is true its mannual clicking other wise programmable clicking 
        activateSlide(nextIndex, event.isTrusted);
    }
    
    // binding the onclick functionality for all bullets and arrows its depending on the length of the data
    function bindEvent() {
        // its only binding not calling 
        for(var i = 0; i<bullets.length; i++) {
            // when click happens then only its calling its respective functionality
            bullets[i].addEventListener('click', bulletClick);
        }   
        for(var i = 0; i<arrows.length; i++) {
            // when click happens then only its calling its respective functionality i.e function (arrowClick)
            arrows[i].addEventListener('click', arrowClick);
        } 
        // after bindng click events then goto init calling function
    }

    // clear the functionality of setIntevel with clerintervel function 
    // and again initiate setInterval functionality with some duration for setInterval

    function initiateAutoSlide() {
        // its clear the setInterval functionaly
        clearInterval(autoInterval);
        // create the setInterval for right arrow click with specified duration
        autoInterval = setInterval(function() {
            // triggering the right arrow click
            arrows[1].click();
        }, config.duration)
    }
    // its bind the all html formats
    // I/p: ?
    function renderCarousel(data, target) {
        // its gives the left and right arrows
        var html = '<div class="carousel carousel-type-'+ config.type +'">' +
            '<div class="carousel-arrow carousel-left-arrow" data-value="-1">' +
                '<div class="css-arrow"></div>' +
            '</div>' +
            '<div class="carousel-arrow carousel-right-arrow" data-value="1">' +
                '<div class="css-arrow arrow-direction-right" ></div>' +
            '</div>' +
            '<div class="carousel-slides">';
        // at starting these two variables set as empty
        var images = '';
        var bulletsHTML = '';

        // bind the all images from the data and create the bullets both are dependthing on the length of the bata length 
        for(var i = 0; i<data.length; i++) {
            images = images + '<div class="carousel-slide">' +
                            '<img src="' + data[i] + '">' +
                        '</div>';
            bulletsHTML = bulletsHTML + '<li class="carousel-bullet" data-index="'+ i +'"></li>';
        }
        // arrows and images binding together
        html = html + images;
        html = html + '</div>';
        //for arrows and image containers we again bind the bullets
        html = html + '<ul class="carousel-bullets">';
        html = html + bulletsHTML;
            
        html = html + '</ul>' +
        '</div>';
        // this is gives the total html format
        target.innerHTML = html;
        // then goto init function
    }
    //after comleting rendering the html its come to access the values with specifi target
    //if any changes are there its only reflect its perticular target 
    function intializeVariables(target) {
        // callecting all nodes with class names "carousel-slide" with in the respective target and store in slides variable
        // here slides , bullet, arrows gives node elements i.e node collection
        slides = target.querySelectorAll('.carousel-slide');
        // callecting all nodes with class names "carousel-bullet" with in the respective target and store in bullets variable
        bullets = target.querySelectorAll('.carousel-bullet');
        // callecting all nodes with class names "carousel-arrow" with in the respective target and store in arrows variable
        arrows = target.querySelectorAll('.carousel-arrow');
        
        // for the slide node at activeSlide place add a classlist with "active-slide" 
        slides[activeSlide].classList.add('active-slide');
        
        // for the bullets node at activeSlide place add a classlist with "active-bullet"
        bullets[activeSlide].classList.add('active-bullet');

        // in the first calling function with type is slide then only its execute otherwise its fail. so dont go to inner statements
        // if passed config.type is slide
        if (config.type == 'slide') {
            //  apply the margin for the first image with activeSlide value dependent
            slides[0].style.marginLeft = activeSlide * -100 +'%';
        }
    }
    // when we calling this function its settel every thing with data and arget values
    function init(data, target) {
        //call the renderCarousel function with data and target which render the images, arrows, bullets
        renderCarousel(data, target);

        // initailization of variables done here
        intializeVariables(target);

        // binding of events done here
        bindEvent();

        // initializing the auto slider timer
        initiateAutoSlide();
        
    }
    
    // its clear the auto slider 
    function stopAutoSlide() {
        clearInterval(autoInterval);
    }

    // its give the active the selected index image
    // i/p?
    // will take the index of the slide to be activated
    function goToSlide(n) {
        // activateSlide with passed index and reset the auto slider
        activateSlide(n,  true);
    }

    // Will take the type string and change or update the carousel type
    function changeType(type) {
        
        // earlier type and passed type both are same do nothing
        if(config.type == type) { 
            return;
        }

        // update the config.type with passed type
        config.type = type;

        // before that clear the before functionality of before type
        
        // Clear the existing html / dom from the target
        config.target.innerHTML = '';
        
        // and the call the in it function for rendering the data with new type and change its style
        
        // restart the carousel functionality
        init(config.data, config.target);
        // and then return ....
        ///////// var c = config.target.querySelector('.carousel');
        ///////// c.classList.remove('carousel-type-' + config.type);
        ///////// config.type = type;
        ///////// c.classList.add('carousel-type-' + type)
    }

    // initial entry point for carousel 
    // call init with data and target passed in config
    init(config.data, config.target);

    // return an object with below properties
    return {
        // its gives the selected target setInterval functionality clear...
        // by using this we can stop the auto carousel
       stopAutoSlide: stopAutoSlide,

       // by using this we can restart the auto carousel
       initiateAutoSlide: initiateAutoSlide,

       // its gives the selected index slide  
       goToSlide: goToSlide,

       // is change carosuel type and reinitailize the carousel
       changeType: changeType
    };
}

var c1 = intiateCarousel({
    data: data1,
    target: document.getElementById('carousel1'),
    duration: 3000,
    type: 'fade'
});

var c2 = intiateCarousel({
    data: data1,
    target: document.getElementById('carousel2'),
    duration: 3000,
    type: 'slide'
});

var c3 = intiateCarousel({
    data: data1,
    target: document.getElementById('carousel3'),
    duration: 3000,
    type: 'fade'
});

// var c4 = intiateCarousel({
//     data: data1,
//     target: document.getElementById('carousel4'),
//     duration: 3000,
//     type: 'slide'
// });

// var c5 = intiateCarousel({
//     data: data1,
//     target: document.getElementById('carousel6'),
//     duration: 3000,
//     type: 'fade'
// });

// var c6 = intiateCarousel({
//     data: data1,
//     target: document.getElementById('carousel6'),
//     duration: 3000,
//     type: 'slide'
// });

// var c7 = intiateCarousel({
//     data: data1,
//     target: document.getElementById('carousel7'),
//     duration: 3000,
//     type: 'fade'
// });

// var c8 = intiateCarousel({
//     data: data1,
//     target: document.getElementById('carousel8'),
//     duration: 3000,
//     type: 'slide'
// });


// c1.stopAutoSlide();
// stopAutoSlide();
// startAutoSlide();
// activateSLide(3)
