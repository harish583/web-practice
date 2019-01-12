function onloading(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var timer = document.querySelector(".time");
    timer.innerHTML = h+":"+m+":"+s;
    stopWatch();
}


var d = new Date();
    // var h = d.getHours();
    // var m = d.getMinutes();
    var s = d.getSeconds();
    var hh=0 , mm=0 ,minuts = 0;
function stopWatch(){
    var d2 = new Date();
    // var h2 = d2.getHours();
    // var m2 = d2.getMinutes();
    var s2 = d2.getSeconds();
    var stopWatch = document.querySelector(".stop-watch");
    if(s2<s){
        s2+=60;
    }
    // if(m2<m){
    //     m2+= 60;
    // }
    var ss = s2-s;
    
    if(ss>59){
        ss = 0;
        mm= mm+1;
    }
    if(mm>59){
        mm = 0;
        hh++;
    }
    stopWatch.innerHTML = hh+":"+mm+":"+ss;
   //setInterval(stopWatch,1000);
}

onloading();

window.setInterval(onloading,1000);
// stopWatch();