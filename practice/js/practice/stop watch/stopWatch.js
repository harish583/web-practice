function timing(){
    var d = new Date();
    document.querySelector(".date").innerHTML = d.toDateString();
    var hours = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    document.querySelector(".time").innerHTML = hours+":"+min+":"+sec;
}
function recalling(){
    var xyz = setInterval(timing,1000);

    var stopin = document.querySelector(".stopingClock");
    stopin.addEventListener("click",closing2);
    function closing2(){
        clearInterval(xyz);
    }
}
var restart = document.querySelector(".start-clock");
restart.addEventListener("click",recalling);
recalling();
var d = new Date();
var hours = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
var m = 0;
var h = 0;
function stopTiming(){
    var d = new Date();
    var s2 = d.getSeconds();
    if(s2<sec){
        s2=60+s2;
        
    }
    if((s2-sec)==0){
        m++;
    }
    if(m==59){
        h++;
    }
    //s2=60+s2;
    document.querySelector(".stopWatch").innerHTML = h +':'+m+':'+(s2-sec);
}
function restartingStopWatch(){
    var abc =setInterval(stopTiming,1000);

    function closing(){
        clearInterval(abc)
    }
    var stopin = document.querySelector(".stoping");
    stopin.addEventListener("click",closing);


}



var seconds = 0,minutes=0,hours=0;
function stopWatch(){
    seconds++;
    if(seconds==60){
        minutes++;
        seconds=0;
    }
    if(minutes==60){
        hours++;
        minutes=0;
        seconds=0;
    }
    var startingStopWatch = document.querySelector(".stopWatch");
    startingStopWatch.innerHTML = hours+':'+minutes+':'+seconds;
}
function strtingWatch(){
    function resettingValues(){
        stopingWatch();
        var startingStopWatch = document.querySelector(".stopWatch");
    startingStopWatch.innerHTML = 0+':'+0+':'+0;
    }
    var stoping = setInterval(stopWatch,100);
    function stopingWatch(){
        clearInterval(stoping);
    }
    var stopin = document.querySelector(".stoping");
    stopin.addEventListener("click",stopingWatch);
    var restarting = document.querySelector(".restarting");
restarting.addEventListener("click",resettingValues);
}
strtingWatch();
var restart = document.querySelector(".start-stopWatch");
restart.addEventListener("click",strtingWatch);











function all(){
    
    var input = document.querySelector(".inputNumber");
    var x = input.value;
    var inputsec = document.querySelector(".inputNumbersec");
    var y = inputsec.value;
    if(x){
        var setting = setInterval(countdownx,100);
        var min = x;
        var sec = 60;
        var hours = 0;
        function countdownx(){
            
            if(x){
                sec--;
            }
            if(sec==0&&(min-1)==0&&hours==0){
                clearInterval(setting);
            }
            document.querySelector(".count").innerHTML = hours+":"+(min-1)+":"+sec;
            //sec--;
            
            if(sec==0){
                min--;
                sec=59;
            }
            if(min<2){
                document.querySelector(".count").style.color="red";
                // document.querySelector(".count").style.fontSize="40px";
            }
            if(hours==0&&(min-1)==0&&sec<10){
                document.querySelector(".count").style.fontSize="40px";
                document.querySelector(".count").style.top="37%";
            }
        }
    }
    if(y){
        var settingy = setInterval(countdowny,100);
        var min = Math.floor(y/60);
        var hours = Math.floor(min/60);
        var sec = y-(Math.floor(y/60)*60);
        if(min==60){
            min=0;
        }
        if(sec==60){
            sec=0;
        }
        function countdowny(){
            if(y){
                sec--
            }
            if(sec==-1){
                sec=59;
                min--
            }
            if(min==-1){
                hours--;
                min==59;
            }
            if(min<1){
                document.querySelector(".count").style.color="red";
                // document.querySelector(".count").style.fontSize="40px";
            }
            if(hours==0&&(min)==0&&sec<10){
                document.querySelector(".count").style.fontSize="40px";
                document.querySelector(".count").style.top="37%";
            }
            if(sec==0&&min==0&&hours==0){
                clearInterval(settingy)
            }
            document.querySelector(".count").innerHTML = hours+":"+(min)+":"+sec;
        }
    }
}
var xyz = document.querySelector(".submit");
xyz.addEventListener("click",all);
