const days = document.getElementById('containerDays')
const hours = document.getElementById('containerHours')
const minutes = document.getElementById('containerMinutes')
const secounds = document.getElementById('containerSecounds')

const newYear = '11 dec 2022'

function countDown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSecounds = (newYearDate - currentDate) / 1000;

    const day = Math.floor(totalSecounds / 3600 / 24);
    const hour = Math.floor(totalSecounds / 3600) % 24;
    const minute = Math.floor(totalSecounds / 60) % 60;
    const secound = Math.floor(totalSecounds) % 60;

    days.innerHTML = day;
    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    secounds.innerHTML = secound;

}
countDown();

setInterval(countDown, 1000);