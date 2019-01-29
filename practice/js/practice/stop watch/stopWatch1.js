
//***************clock************
var d = new Date();
var hours = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
function stopTiming(){
    var d2 = new Date();
    var hours2 = d2.getHours();
    var min2 = d2.getMinutes();
    var sec2 = d2.getSeconds();
    if(hours2<12){

        var time = document.querySelector(".time");
        time.innerHTML=((hours2)+":"+(min2)+":"+(sec2))+" AM";
        }
    if(hours2>11){
        hours2=hours2-12;

    var time = document.querySelector(".time");
    time.innerHTML=((hours2)+":"+(min2)+":"+(sec2))+" PM";
    }
    
}
setInterval(stopTiming,1000);



//***********stopwatch*********************/


var sec = 0 ;
var min=0,hours=0;

function stopwatch(){
    sec ++;
    if(sec>59){
        sec=0;
        min++;
    }
    if(min>59){
        min=0;
        hours++;
    }
    var stopwatchholder = document.querySelector(".stopWatch");
    stopwatchholder.innerHTML=((hours)+":"+(min)+":"+(sec));
}
var stoping=setInterval(stopwatch,1000);
//clear the repitations
function stopingStopWatch(){
    clearInterval(stoping);
}
var stopingholder = document.querySelector(".stoping");
stopingholder.addEventListener("click",stopingStopWatch);
var starting = document.querySelector(".start-stopWatch");
starting.addEventListener("click",function(){
     stoping=setInterval(stopwatch,1000);
});
function restartingStopWatch(){
   
    hours =0;min=0;sec=0;
    var stoping=setInterval(stopwatch,1000);
    clearInterval(stoping);
}
var restarting = document.querySelector(".restarting");
restarting.addEventListener("click",restartingStopWatch);

function variables(){
    var x = document.querySelector(".inputNumber").value;
    var y = document.querySelector(".inputNumbersec").value;
    document.querySelector(".inputNumber").value='';
    document.querySelector(".inputNumbersec").value='';
    var min = x;
    var sec =y;
    var hour = 0;
    var seconds = 59;
    var minutes = 0;
    function countDown(){
        document.querySelector(".count").style.fontSize="25px";
        document.querySelector(".count").style.color="green";
        if(x){
            if(y){
                if(sec>60){
                    mins = Math.floor(sec/60);
                    sec = sec-(mins*60);
                    min = parseInt(min) + mins;
                }
                if(sec>0){
                    sec--;
                }
                if(sec < 15&&(min)==0&&hour==0){
                    document.querySelector(".count").style.fontSize="40px";
                    document.querySelector(".count").style.top="37%";
                    document.querySelector(".count").style.color="red";
                }
                if(sec==0&&min==0&&hour==0){
                    clearInterval(stopingCount);
                }
                else if(sec==0){
                    min--;
                    sec=59;
                }
                document.querySelector(".count").innerHTML=((hour)+":"+(min)+":"+(sec));
                return; 
            }
            else {
                parseInt(min);
                if(seconds==0){
                    min--;
                    seconds = 59
                }
                if(seconds>0){
                    seconds--;
                }
                if(seconds < 15&&(min-1)==0&&hour==0){
                    document.querySelector(".count").style.fontSize="40px";
                    document.querySelector(".count").style.top="37%";
                    document.querySelector(".count").style.color="red";
                }
                if(seconds == 0&&(min-1)==0&&hour==0){
                    clearInterval(stopingCount);
                }
                document.querySelector(".count").innerHTML=((hour)+":"+(min-1)+":"+(seconds));
            }
        }
        else {
            sec = parseInt(sec);
            if(sec>60){
                mins = Math.floor(sec/60);
                sec = sec-(mins*60);
                minutes = parseInt(minutes) + mins;
            }
            if(sec==0){
                minutes--;
                sec = 59
            }
            if(sec>0){
                sec--;
            }
            if(sec < 15&&(minutes)==0&&hour==0){
                document.querySelector(".count").style.fontSize="40px";
                document.querySelector(".count").style.top="37%";
                document.querySelector(".count").style.color="red";
            }
            if(sec == 0&&(minutes)==0&&hour==0){
                clearInterval(stopingCount);
            }
            document.querySelector(".count").innerHTML=((hour)+":"+(minutes)+":"+(sec));
        }
    }
     var stopingCount = setInterval(countDown,100);
}
var xyn = document.querySelector(".submit");
xyn.addEventListener("click",variables);