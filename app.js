const timerDay = document.querySelector("#timer-day");
const timerHour = document.querySelector("#timer-hour");
const timerMinutes = document.querySelector("#timer-minutes");
const timerSeconds = document.querySelector("#timer-seconds");
let day = 13;
let hour = 23; 
let minutes = 59;
let seconds = 59;

setTimeout(() => {
    animation(timerMinutes);
    timerMinutes.innerHTML = minutes
    animation(timerHour);
    timerHour.innerHTML = hour;
    animation(timerDay);    
    timerDay.innerHTML = day;
}, 1000);

setInterval(() => {
    timerSeconds.innerHTML = seconds
    timerSeconds.parentNode.querySelector(".flipNumber").style.animation = "1s flipAnimation infinite";
    timerSeconds.style.animation = "1s flipNumberAnimation infinite";
    if(seconds === 0){
        seconds = 59;
        minutes--
        timerMinutes.innerHTML = minutes
        animation(timerMinutes);
        if (minutes === 0){
            minutes = 59;
            hour--
            animation(timerHour);
            timerHour.innerHTML = hour;
            if (hour === 0){
                hour = 23;
                day--
                animation(timerDay);
                timerDay.innerHTML = day;
                if(day === 0){
                    day = 13;
                    hour = 23;
                    minutes = 59;
                    seconds = 59;
                    timerSeconds.innerHTML = seconds
                    timerMinutes.innerHTML = minutes
                    timerHour.innerHTML = hour;
                    timerDay.innerHTML = day;
                }
            }
        }
    }
    seconds--;
}, 1000)

function animation (name) {

    name.parentNode.querySelector(".flipNumber").classList.add("animatedCard")
    name.parentNode.querySelector(".flipNumber").classList.remove("smoothFlip")
    name.classList.add("animatedNumber")

    setTimeout(() => {
        name.parentNode.querySelector(".flipNumber").classList.remove("animatedCard")
        name.parentNode.querySelector(".flipNumber").classList.add("smoothFlip")
        name.classList.remove("animatedNumber")
    }, 1000);
}


