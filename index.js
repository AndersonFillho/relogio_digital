// Código do curso
// function updateClock() {
//     const hoursElement = document.querySelector(".hours");
//     const minutesElement = document.querySelector(".minutes");
//     const secondsElement = document.querySelector(".seconds");

//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, "0");
//     const minutes = now.getMinutes().toString().padStart(2, "0");
//     const seconds = now.getSeconds().toString().padStart(2, "0");

//     hoursElement.textContent = hours;
//     minutesElement.textContent = minutes;
//     secondsElement.textContent = seconds;
// }

// setInterval(updateClock, 1000);


// Meu código
const WEEK = ["DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"];

function updateTime() {
    var now = new Date();

    document.getElementById("time").innerText =
        zeroPadding(now.getHours(), 2) + ":" +
        zeroPadding(now.getMinutes(), 2) + ":" +
        zeroPadding(now.getSeconds(), 2);

    document.getElementById("date").innerText =
        zeroPadding(now.getDate(), 2) + "/" +
        zeroPadding(now.getMonth() + 1, 2) + "/" +
        now.getFullYear() + " " +
        WEEK[now.getDay()];
}

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0');
}