let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let days = document.getElementById("days");
let months = document.getElementById("months");
let years = document.getElementById("years");

let formatButton = document.getElementById("twentyfour-hours");
let is24HourFormat = true;

let themeButton = document.getElementById("light");

setInterval(() => {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let period = "";

    if(!is24HourFormat){
        period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours === 0 ? 12 : hours;
    }

    if(!is24HourFormat){
        sec.innerHTML += " " + period;
    }

hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
min.innerHTML = (minutes < 10 ? "0": "") + minutes;
sec.innerHTML = (seconds < 10 ? "0": "") + seconds + (!is24HourFormat ? " " + period : "");

days.innerHTML = (currentTime.getDate()<10?"0":"") + currentTime.getDate();
months.innerHTML = (currentTime.getMonth() + 1 <10?"0":"") + (currentTime.getMonth() + 1);
years.innerHTML = currentTime.getFullYear();

},1000);

formatButton.addEventListener("click", () => {
    is24HourFormat = !is24HourFormat;

    formatButton.textContent = is24HourFormat ? "24 Hours" : "12 Hours";
});

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    themeButton.textContent = document.body.classList.contains("dark-theme") ? "Dark" : "Light";
});