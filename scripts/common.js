var loginBtn=document.getElementById("loginBtn");
var loginBtn1=document.getElementById("loginBtn1");
var inputUname=document.getElementById("inputUname")
var inputPassword=document.getElementById("inputPassword");
var logoutBtn=document.getElementById("logoutBtn");

var loggedin = false;

function login(){
    localStorage.setItem("uname","admin");
    localStorage.setItem("pass","admin");
    if(inputUname.value===localStorage.getItem("uname") && inputPassword.value===localStorage.getItem("pass")){
        alert("successfully loggedin");
        loggedin = true;
    }else{
        alert("invalid credentials");
    }
    if(loggedin==true){
        logoutBtn.style.display="inline";
        loginBtn.style.display="none";
    }
}
function logout(){
    logoutBtn.style.display="none";
    loginBtn.style.display="inline";
}
logoutBtn.addEventListener("click",logout());