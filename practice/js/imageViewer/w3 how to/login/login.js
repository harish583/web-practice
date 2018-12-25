function close1(){
    console.log("close");
    var popup = document.querySelector(".popup");
    popup.style.display = 'none';
}
function login(){
    var popup = document.querySelector(".popup");
   // var body = document.querySelector(".body");
    
    popup.style.display = "block";
    if(document.querySelector(".signup") == -1){
        document.querySelector(".signup").remove();
    }
    
    // body.style.opacity = 0.3;
    // popup.style.opacity= 1;
}
function signin(){
    var popup = document.querySelector(".popup");
    popup.remove();
    var verification = document.querySelector(".verfication");
    verification.style.display = "block";
}
function close2(){
    var signup = document.querySelector(".signup");
    signup.remove();
}
function signup(){
    var signup = document.querySelector(".signup");
    signup.style.display = "block";
    if(document.querySelector(".popup") == -1){
        document.querySelector(".popup").remove();
    }
}
function sign(){
    var signup = document.querySelector(".signup");
    signup.remove();
    var submitted = document.querySelector(".submitted");
    submitted.style.display = "block";  
}