fetch('http://api.openweathermap.org/data/2.5/weather?q=Ranchi&appid=18e042e50f50e20c51a2c72f8289758d')
    .then(data => { return data.json() })
    .then(data1 => console.log(data1));

const getCurrentTime = () => {
    document.getElementById('date');
    var currentTime = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let hour = currentTime.getHours();
    let min = currentTime.getMinutes();
    let period = "AM";
    if (hour > 11) {
        period = "PM";
        if (hour > 12) {
            hour -= 12;
        }
    }
    if (min < 10) {
        min = '0' + min;
    }

    date.innerHTML = `${days[currentTime.getDay()]} | 
     ${currentTime.getDate(), months[currentTime.getMonth()]} | ${hour}:${min} ${period}`

    console.log("day", days[currentTime.getDay()]);
    console.log("date and month", currentTime.getDate(), months[currentTime.getMonth()]);
    console.log("hours", currentTime.getHours(), ":", currentTime.getMinutes())

}

getCurrentTime();