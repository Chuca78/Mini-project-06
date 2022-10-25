
const currentWeatherEl = document.getElementById('currentWeather');
const cityEl = document.getElementById('city');
const coordsEl = document.getElementById('coords');
const currentTempEl = document.getElementById('currentTemp');
const currentWindEl = document.getElementById('currentWind');
const currentHumidityEl = document.getElementById('currentHumidity');
const todayForecastEl = document.getElementById('today');
const forecastEl = document.getElementById('forecast1');
const forecastE2 = document.getElementById('forecast2');
const forecastE3 = document.getElementById('forecast3');
const forecastE4 = document.getElementById('forecast4');
const forecastE5 = document.getElementById('forecast5');
const APIkey = 'APPID=e55c7e382f794c24ff4d937e890f4431';


// displays current day and date in the header
var today = moment();
$("#currentTime").text(today.format("hh:mm A, dddd, MMM Do, YYYY"));

// this function uses geolocation to get current weather data
getWeather()

function getWeather(){
    navigator.geolocation.getCurrentPosition(success, fail);
    function success(position) {
  
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;

    fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + "&lon=" + longitude + '&exclude=hourly,minutely&units=imperial&' + APIkey).then(res => res.json()).then(data => {

    // todo: remove these
    // console.log(data);
    // console.log(latitude);
    // console.log(longitude);

// todo: use these variables to retrieve current weather
    var city_current=data.name
    var temp_current= Math.floor((data.main.temp));
    var humidity_current=data.main.humidity
    var wind_current=data.wind.speed

    // todo: remove these
    // console.log(city_current);
    // console.log(temp_current);
    // console.log(humidity_current);
    // console.log(wind_current);

    // todo: fix city display
    cityEl.innerHTML = 
    `<div class="cityLabel" id=city></div><div>${city_current}</div>`;

    // todo: check this - doesn't work on deployed website - maybe due to api key on github???
    // this displays current weather conditions
    currentWeatherEl.innerHTML = 
    `<h3>Current Weather</h3>
    
    <div class="weatherItem" id="currentTemperature">
    <div>Temperature</div>
    <div>${temp_current}\u00B0F</div>
    </div>
    <div class="weatherItem" id="currentWindSpeed">
    <div>Wind Speed</div><div>${wind_current} mph</div>
    </div>
    <div class="weatherItem" id="currentHumidity">
    <div>Humidity</div>
    <div>${humidity_current}%</div>
    </div>`;

    })
    forecastWeather()

function forecastWeather(){
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
  
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;

    fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + "&lon=" + longitude + '&units=imperial&APPID=e55c7e382f794c24ff4d937e890f4431').then(res => res.json()).then(data => {

    // // todo: remove these
    // console.log(data);
    // console.log(latitude);
    // console.log(longitude);

todayForecastEl.innerHTML =
`<img src="http://openweathermap.org/img/wn//${data.list[0].weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
 <div class="todayForecast">
    <div class="dayLabel">${window.moment().format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[0].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[0].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[0].main.humidity}%</div>
    </div>`

// todo: fix the forecast code
// forecast for the next 5 days
forecastEl.innerHTML = 
    `<div class="futureDay1">
    <img src="http://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(1,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[6].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[6].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[6].main.humidity}%</div>
    </div>`

forecastE2.innerHTML = 
    `<div class="futureDay2">
    <img src="http://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(2,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[14].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[14].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[14].main.humidity}%</div>
    </div>`

forecastE3.innerHTML = 
    `<div class="futureDay2">
    <img src="http://openweathermap.org/img/wn/${data.list[22].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(3,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[22].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[22].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[22].main.humidity}%</div>
    </div>`

forecastE4.innerHTML = 
    `<div class="futureDay2">
    <img src="http://openweathermap.org/img/wn/${data.list[30].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(4,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[30].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[30].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[30].main.humidity}%</div>
    </div>`

forecastE5.innerHTML = 
    `<div class="futureDay2">
    <img src="http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(5,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[39].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[39].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[39].main.humidity}%</div>
    </div>`

})
    }
}}
}

// if geolocation fails - weather defaults to Charlotte weather
function fail() {

    fetch('http://api.openweathermap.org/data/2.5/weather?lat=35.21456035841298&lon=-80.94734678937337&exclude=hourly,minutely&units=imperial&' + APIkey).then(res => res.json()).then(data => {

// todo: use these variables to retrieve current weather
    var city_current=data.name
    var temp_current= Math.floor((data.main.temp));
    var humidity_current=data.main.humidity
    var wind_current=data.wind.speed

    // todo: fix city display
    cityEl.innerHTML = 
    `<div class="cityLabel" id=city></div><div>${city_current}</div>`;

    // todo: check this - doesn't work on deployed website - maybe due to api key on github???
    // this displays current weather conditions
    currentWeatherEl.innerHTML = 
    `<h3>Weather in Charlotte, NC</h3>
    
    <div class="weatherItem" id="currentTemperature">
    <div>Temperature</div>
    <div>${temp_current}\u00B0F</div>
    </div>
    <div class="weatherItem" id="currentWindSpeed">
    <div>Wind Speed</div><div>${wind_current} mph</div>
    </div>
    <div class="weatherItem" id="currentHumidity">
    <div>Humidity</div>
    <div>${humidity_current}%</div>
    </div>`;
    })


// todo: fix this
// today's weather forecast
// Getting weather forecast based on user location
forecastWeather()

function forecastWeather(){
    fetch('http://api.openweathermap.org/data/2.5/forecast?lat=35.21456035841298&lon=-80.94734678937337&exclude=hourly,minutely&units=imperial&' + APIkey).then(res => res.json()).then(data => {

todayForecastEl.innerHTML =
`<img src="http://openweathermap.org/img/wn//${data.list[0].weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
 <div class="todayForecast">
    <div class="dayLabel">${window.moment().format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[0].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[0].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[0].main.humidity}%</div>
    </div>`

// todo: fix the forecast code
// forecast for the next 5 days
forecastEl.innerHTML = 
    `<div class="futureDay1">
    <img src="http://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(1,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[6].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[6].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[6].main.humidity}%</div>
    </div>`

forecastE2.innerHTML = 
    `<div class="futureDay2">
    <img src="http://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(2,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[14].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[14].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[14].main.humidity}%</div>
    </div>`

forecastE3.innerHTML = 
    `<div class="futureDay2">
    <img src="http://openweathermap.org/img/wn/${data.list[22].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(3,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[22].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[22].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[22].main.humidity}%</div>
    </div>`

forecastE4.innerHTML = 
    `<div class="futureDay2">
    <img src="http://openweathermap.org/img/wn/${data.list[30].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(4,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[30].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[30].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[30].main.humidity}%</div>
    </div>`

forecastE5.innerHTML = 
    `<div class="futureDay2">
    <img src="http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png" alt="weather-icon" class="weatherIcon">
    <div class="dayLabel">${window.moment().add(5,'days').format("dddd")}</div>
    <div class="weatherItem" id="temp">
        <div>Temp</div>
        <div>${Math.floor((data.list[39].main.temp))} \u00B0F</div></div>
    <div class="weatherItem" id="windSpeed">
        <div>Wind</div>
        <div>${data.list[39].wind.speed} mph</div></div>
    <div class="weatherItem" id="humidity">
        <div>Humidity</div>
        <div>${data.list[39].main.humidity}%</div>
    </div>`

})
}
}



// todo: create an input function here
// function to show weather data in other locations

// api call by city
// fetch('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}');


// todo: create a local storage history function here
// local storage history function

// todo: test code for city search and local storage
var search_city_list=[]

create_usercity_bt();
// PUSHING search city into the array search_city_list
$('#user_citysearch_bt').click(function (event) {
    // On click- I want to capture the city typed in by the user
    event.preventDefault();
    var user_city_text = $("#user_city_text").val();
    // console.log(user_city_text);

    // Note here I am using search_city_list- the master array, in order to push the new city text entered by the user
    search_city_list.push(user_city_text)
    console.log('city list', search_city_list)
    var new_city_button= $(" <br><button>");
    new_city_button.text(user_city_text)
    new_city_button.addClass('city-bt btn-large btn-warning w-75 blockquote font-weight-bold text-capitalize').css({'border-radius':'10px'})
    $('#user_city_list').append(new_city_button)

    // Note that it is important to update the local storage at this point as the latest city has been pushed into the search_city_array- this is where a copy of the updated list is stored into the local storage and stored in the form of a new varaible called localstorage_city_list. This is different because it can be stored on the user's harddrive and retrieved later when the user re-visits the page. Alternatively if I use search_city_list it is only available when the javacode is run- it is not stored locally and disappears when the user closes the webpage. But if a copy is stored in local storage then it can be retrieved
    localStorage.setItem("localstorage_city_list", JSON.stringify(search_city_list));
    console.log ("local storage", localStorage)
    search_city_weather(user_city_text);
  }); // br-close Jquery on click event
  
function create_usercity_bt(){
// $('#user_city_list').empty();
// Note that it is important to pull city_list from local storage  before the loaclstorage_city_list variable can be used by the for loop below
var localstorage_city_list = JSON.parse(localStorage.getItem("localstorage_city_list"));
console.log ('local city list',localstorage_city_list)

if (localstorage_city_list) {
  // note that here I am using localstorage_city_list instead of the master search_city_list array that is updated when the search button is clicked. You will notice that local_storage_city_list is actually a copy of search_city_list which was created when the search_city_list is stored into the local storage.
  // The advantage of using localstorage_city_list instead of the original search_city_list is that it can automatically create new city buttons using the search_city_list/local_storage_city_list when a user revisits the page
for (var i=0;i<localstorage_city_list.length;i++){
      var new_city_button= $(" <br><button>");
      //Inserting the city name inside the button at the time of creation of the button corresponding with the city search query by the  user
      // Place the current citty in cityList array as text inside the button
      new_city_button.text(localstorage_city_list[i])
        new_city_button.addClass('city-bt btn-large btn-warning w-75 blockquote font-weight-bold text-capitalize  ').css({'border-radius':'10px'})
        $('#user_city_list').append(new_city_button)
        // console.log(new_city_button)

        
// Clicking the indiviual city button trigers the weather AJAX request for that particular city. Note that this needs to be inside the create_usercity_bt function otherwise it will not functionality for all buttons in the search list, and only for the current one
                  $(".city-bt").click(function () {
                    //it takes user input and stores it in a var cityName
                    //passed cityName thru render weather
                    console.log("click working for city bt");
                    city_bt_text = $(this).text();
                    console.log('Button text', city_bt_text)
                    search_city_weather(city_bt_text);
                  }); // br close city button click    
  } //br close for loop
} //br-close user city button
}// br close if statement

