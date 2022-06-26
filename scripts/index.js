
var viewMoreid=document.getElementById("viewMoreid");
var viewLessid=document.getElementById("viewLess");

function viewMore(){
    document.getElementById("hotellist2").style.display="flex";
    viewMoreid.style.display="none";
    viewLessid.style.display="inline";
}
function viewLess(){
    document.getElementById("hotellist2").style.display="none";
    viewMoreid.style.display="inline";
    viewLessid.style.display="none";
}

viewMoreid.addEventListener("click",viewMore());
viewLessid.addEventListener("click",viewLess());
