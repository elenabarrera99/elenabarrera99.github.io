var date = new Date();
let currentDate = date.getDay();
let div = document.getElementById('banner');
let box = document.getElementById('box');
if (currentDate == 5) {
    div.style.display = "block";
    box.style.top = "260px";
}



