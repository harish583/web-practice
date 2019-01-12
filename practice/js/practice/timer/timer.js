function onloading(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var timer = document.querySelector(".time");
    timer.innerHTML = h+":"+m+":"+s;
    stopWatch();
    window.setInterval(onloading,1);
}

var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
function stopWatch(){
    var d2 = new Date();
    var h2 = d2.getHours();
    var m2 = d2.getMinutes();
    var s2 = d2.getSeconds();
    var stopWatch = document.querySelector(".stop-watch");
    if(s2<s){
        s2+=60;
    }
    if(m2<m){
        m2+= 60;
    }
    var hh = h2-h,mm = m2-m,ss = s2-s;
    // if(hh>23){
    //     hh =0;
    // }
    // if(hh<0){
    //     hh = 59;
    // }
    
    // if(mm>59 || ss>59){
    //     mm =0;
    //     ss = 0;
    // }
    stopWatch.innerHTML = hh+":"+mm+":"+ss;
   // window.setInterval(stopWatch,1);
}

onloading();
// stopWatch();