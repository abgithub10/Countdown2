const daysRun = document.getElementById('days');
const hoursRun = document.getElementById('hours');
const minsRun = document.getElementById('mins');
const secondsRun = document.getElementById('seconds');


const noboBorso ="Apr 15,2022";

function countdown(){
    const banglaNew = new Date(noboBorso);
    const curreentDate = new Date();

    const tottalSecond = (banglaNew-curreentDate)/1000;
    const days = Math.floor(tottalSecond/3600/24);
    const hours = Math.floor(tottalSecond/3600)%24;
    const mins = Math.floor(tottalSecond/60)%60;
    const seconds = Math.floor(tottalSecond)%60;

    daysRun.innerHTML=days;
    hoursRun.innerHTML=hours;
    minsRun.innerHTML=mins;
    secondsRun.innerHTML=seconds;
}

countdown();
setInterval(countdown,1000);