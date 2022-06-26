let payment = document.getElementById("payNow");

function payNow() {
    if (loggedin == true)
        paid();
    else
        payment.disable;
}

function paid() {
    alert("Hi your booking is successfull!!");
}