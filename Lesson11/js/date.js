let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday", 
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
let d = new Date(document.lastModified);
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fullDate = dayName + ", " + monthName + " " + d.getDate() + ", " + d.getFullYear();

document.getElementById('date').textContent = "Last Update: " + fullDate;

let mod = new Date(document.lastModified);
document.getElementById('OutputDate').innerHTML = mod;
