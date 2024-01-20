
function getTime() {
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;




    let clock = hours + " : " + minutes + " : " + seconds;
    document.querySelector(".clock").innerHTML = clock;

    setTimeout(getTime, 1000);
}
getTime();