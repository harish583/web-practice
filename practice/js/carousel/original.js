
//declare the data
var data1 = ['./images/1.jpg', './images/2.jpg', './images/3.jpg'];
//global function callling from c1,c2...... with data ,target,duration,type
function intiateCarousel(config) {
    //aciveSlide gives present acive slide index value
    var activeSlide = 0;
    //previousSlide gives last index value 
    var previousSlide = 0;
    var slides;
    var bullets;
    var arrows;
    var autoInterval = null;
    var autoTimeout = null;

    function activateSlide(index, reset) {
        previousSlide = activeSlide;
        if (config.type == 'fade') {
            slides[activeSlide].classList.remove('active-slide');
        }
        bullets[activeSlide].classList.remove('active-bullet');
        
        activeSlide = index;
        if (config.type == 'fade') {
            slides[activeSlide].classList.add('active-slide');
        } else if(config.type === 'slide'){
            slides[0].style.marginLeft = index*-100 + '%';
        }
        bullets[activeSlide].classList.add('active-bullet');
        if (reset) {
            initiateAutoSlide();
        }
    }


    function bulletClick(event) {
        var index = event.currentTarget.dataset.index;
        index = parseInt(index)
        activateSlide(index, event.isTrusted);
    }

    function arrowClick(event) {
        var value = event.currentTarget.dataset.value;
        var nextIndex = activeSlide + parseInt(value);
        if(nextIndex>=slides.length) {
            nextIndex = 0;
        }
        if (nextIndex < 0) {
            nextIndex = bullets.length - 1;
        }
        activateSlide(nextIndex, event.isTrusted);
    }

    function bindEvent() {
        for(var i = 0; i<bullets.length; i++) {
            bullets[i].addEventListener('click', bulletClick);
        }   
        for(var i = 0; i<arrows.length; i++) {
            arrows[i].addEventListener('click', arrowClick);
        } 
    }

    function initiateAutoSlide() {
        clearInterval(autoInterval);
        autoInterval = setInterval(function() {
            arrows[1].click();
        }, config.duration)
    }
    // its bind the all html formats
    function renderCarousel(data, target) {
        var html = '<div class="carousel carousel-type-'+ config.type +'">' +
            '<div class="carousel-arrow carousel-left-arrow" data-value="-1">' +
                '<div class="css-arrow"></div>' +
            '</div>' +
            '<div class="carousel-arrow carousel-right-arrow" data-value="1">' +
                '<div class="css-arrow arrow-direction-right" ></div>' +
            '</div>' +
            '<div class="carousel-slides">';
        var images = '';
        var bulletsHTML = '';
        
        for(var i = 0; i<data.length; i++) {
            images = images + '<div class="carousel-slide">' +
                            '<img src="' + data[i] + '">' +
                        '</div>';
            bulletsHTML = bulletsHTML + '<li class="carousel-bullet" data-index="'+ i +'"></li>';
        }

        html = html + images;
        html = html + '</div>';

        html = html + '<ul class="carousel-bullets">';
        html = html + bulletsHTML;
            
        html = html + '</ul>' +
        '</div>';
        target.innerHTML = html;
    }

    function intializeVariables(target) {
        slides = target.querySelectorAll('.carousel-slide');
        bullets = target.querySelectorAll('.carousel-bullet');
        arrows = target.querySelectorAll('.carousel-arrow');
        slides[activeSlide].classList.add('active-slide');
        bullets[activeSlide].classList.add('active-bullet');
        if (config.type == 'slide') {
            slides[0].style.marginLeft = activeSlide * -100 +'%';
        }
    }
    // when we calling this function its settel every thing with data and arget values
    function init(data, target) {
        //call the renderCarousel function with data and target
        renderCarousel(data, target);
        intializeVariables(target);
        bindEvent();
        initiateAutoSlide();
    }
    function stopAutoSlide() {
        clearInterval(autoInterval);
    }
    function goToSlide(n) {
        activateSlide(n,  true);
    }
    function changeType(type) {
        if(config.type == type) {
            return;
        }
        config.type = type;
        config.target.innerHTML = '';
        init(config.data, config.target);
        // var c = config.target.querySelector('.carousel');
        // c.classList.remove('carousel-type-' + config.type);
        // config.type = type;
        // c.classList.add('carousel-type-' + type)
    }
    //first executing function with given parameters
    init(config.data, config.target);
    return {
       stopAutoSlide: stopAutoSlide,
       initiateAutoSlide: initiateAutoSlide,
       goToSlide: goToSlide,
       changeType: changeType
    }
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
