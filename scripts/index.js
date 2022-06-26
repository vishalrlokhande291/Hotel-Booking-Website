let loginBtn=document.getElementById("loginBtn");
let loginBtn1=document.getElementById("loginBtn1");
let inputUname=document.getElementById("inputUname")
let inputPassword=document.getElementById("inputPassword");
let logoutBtn=document.getElementById("logoutBtn");
let viewMoreid=document.getElementById("viewMoreid");
let viewLessid=document.getElementById("viewLess");

function login(){
    localStorage.setItem("uname","admin");
    localStorage.setItem("pass","admin");
    if(inputUname.value===localStorage.getItem("uname") && inputPassword.value===localStorage.getItem("pass")){
        logoutBtn.style.display="inline";
        loginBtn.style.display="none";
    }
}
function logout(){
    logoutBtn.style.display="none";
    loginBtn.style.display="inline";
    localStorage.removeItem("uname");
    loacalStorage.removeItem("pass");
}
function viewMore(){
document.getElementById("hotellist2").style.display="inline";
viewMoreid.style.display="none";
viewLessid.style.display="inline";
}
function viewLess(){
    document.getElementById("hotellist2").style.display="none";
    viewMoreid.style.display="inline";
    viewLessid.style.display="none";
}
loginBtn1.addEventListener("click",login());
logoutBtn.addEventListener("click",logout());
viewMoreid.addEventListener("click",viewMore());
viewLessid.addEventListener("click",viewLess());