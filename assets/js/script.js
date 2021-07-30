var currentWeather = document.querySelector("#current-weather");
var apiKey = "7f3f0a1f90357c304e6068c79749f336";
console.log(apiKey);

// function for api call

var getWeather = function () {
    navigator.geolocation.getCurrentPosition((success) => {
        var { latitude, longitude } = success.coords;
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                showWeatherData(data);
            })
    })
}

var showWeatherData = function (data) {
 let { timezone, dt, weather, temp, humidity, wind_speed, uvi } = data.current;

 currentWeather.innerHTML = 
    `<div class="current-weather">
        <div id="current-city" >${timezone} (${dt}) ${weather}</div>
        <div>Temperature: ${temp}&#8457</div>
        <div>Wind: ${wind_speed} MPH</div>
        <div>Humidity: <span>${humidity}%</span></div>

    </div>`
}
getWeather();

// //THEN I am presented with the city name, the date, an icon 
// representation of weather conditions, the temperature, 
// the humidity, the wind speed, and the UV index