link="https://api.openweathermap.org/data/2.5/weather?q=vijayawada&appid=6ccf56cad337fda6f02fed73f217c53e"
var request=new XMLHttpRequest();
request.open("GET", link, true);
request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        var obj= JSON.parse(this.response);
        console.log(obj);
        document.getElementById('weather').innerHTML = obj.weather[0].description;
        document.getElementById('location').innerHTML = obj.name;
        document.getElementById('temp').innerHTML = Math.round(obj.main.temp - 273.15);
        document.getElementById('icon').src = "http://openweathermap.org/img/wn/" + obj.weather[0].icon + ".png";

    }
    else {
        console.error("ERROR");
    }
}
request.send();