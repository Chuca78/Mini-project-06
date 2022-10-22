
const currentWeatherEl = document.getElementById('currentWeather');
console.log(currentWeatherEl)
const cityEl = document.getElementById('city');
console.log(cityEl)
const coordsEl = document.getElementById('coords');
console.log(coordsEl)
const currentTempEl = document.getElementById('currentTemp');
console.log(currentTempEl)
const currentWindEl = document.getElementById('currentWind');
console.log(currentWindEl)
const currentHumidityEl = document.getElementById('currentHumidity');
console.log(currentHumidityEl)



// displays current day and date in the header
var today = moment();
$("#currentTime").text(today.format("hh:mm A, dddd, MMM Do, YYYY"));



// Getting weather information based on user location

getWeather()

function getWeather(){
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
  
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;

    fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + "&lon=" + longitude + '&exclude=hourly,minutely&units=imperial&APPID=e55c7e382f794c24ff4d937e890f4431').then(res => res.json()).then(data => {

    console.log(data);
    console.log(latitude);
    console.log(longitude);

// todo: use these variables to get current weather
var city_current=data.name
var temp_current= Math.floor((data.main.temp));
var humidity_current=data.main.humidity
var wind_current=data.wind.speed

console.log(city_current);
console.log(temp_current);
console.log(humidity_current);
console.log(wind_current);


    // showWeatherData(data);
})
}
}

// this function uses geolocation to get weather data




// todo: this code doesn't work yet
// function showWeatherData (data){
//     let {humidity, temp, wind_speed} = data.current;
//     console.log(humidity)
//     console.log(temp)
//     console.log(wind_speed)

//     currentWeatherEl.innerHTML = 
//     `<div class="weather-item">
//         <div>Humidity</div>
//         <div>${humidity}%</div>
//     </div>
//     <div class="weather-item">
//         <div>Temperature</div>
//         <div>${temp}</div>
//     </div>
//     <div class="weather-item">
//         <div>Wind Speed</div>
//         <div>${wind_speed}</div>
//     </div>`;
// }






// todo: create an input function here
// function to show weather data in other locations









// todo: create a local storage history function here
// local storage history function



