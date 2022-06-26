let adult = document.getElementById("adult");
let name = document.getElementById("name");
let total = document.getElementById("total");

function calculate() {
    let fDate = new Date(document.getElementById("fDate").value);
    let tDate = new Date(document.getElementById("tDate").value);

    if (tDate > fDate) {

        let dDate = tDate.getTime() - fDate.getTime();
        let msInDay = 1000 * 3600 * 24;
        let days = dDate / msInDay;
        total.value = 1000 * adult.value * days;
    }
    else
        total.value = 0;
}