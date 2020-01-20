
function element(value){
    return document.querySelectorAll(value);
}
function ValidateEmail(mail){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        element(".email-verification")[0].style.display = "none";
        element(".password-verification")[0].style.display = "none";
        element("input.user-email-id")[0].classList.remove("error");
        return (true);
    }
    element(".email-verification")[0].style.display = "block";
    element(".user-password")[0].value = '';
    element("input.user-email-id")[0].classList.add("error");
    element("input")[0].addEventListener("keyup",function(e){
        var value = e.target.value;
        ValidateEmail(value);
    })
    return (false);
}
function submitUserData(){
    var mail = element(".user-email-id")[0].value;
    var password = element(".user-password")[0].value;
    if(ValidateEmail(mail) && password){
        element(".email-verification")[0].style.display = "none";
        element(".password-verification")[0].style.display = "none";
        element(".user-email-id")[0].value = '';
        element(".user-password")[0].value = '';
        alert("Login Success"); 
        window.open("../UserData/details.html","_self");  
    }else if(password.length<1){
        element(".password-verification")[0].style.display = "block";
        
    element("input.user-password")[0].classList.add("error");
    }
}