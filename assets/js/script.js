// todo: test code

var APIkey = "e55c7e382f794c24ff4d937e890f4431";
var date = moment().format("hh:mm A, MMM Do, YYYY");
var hour = moment().format("H");
var cityName = document.querySelector('#cityName');
var searchBtn = document.querySelector('#search-btn');
var userFormEl = document.querySelector('#user-form');
var currentCity = document.querySelector('#currentCity');
var currentDate = document.querySelector('#currentDate');
var tempEl = document.querySelector('#temp1');
var windEl = document.querySelector('#wind1');
var humidityEl = document.querySelector('#humidity1');
var headerImageEl = document.querySelector('#headerImage');
var containerEl = $('#card-deck');
var buttons = $('#buttons-list');
var weatherPanelEl = $('#weather-panel');
var forecastEl = $('#forecastTitle');


// Hides the forecast panel - don't need this if geolocation works
// forecastEl.hide();
// weatherPanelEl.hide();

// todo: fix geolocation function
getWeather()

function getWeather(){
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
  
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + "&lon=" + longitude + '&exclude=hourly,minutely&units=imperial&' + APIkey).then(res => res.json()).then(data => {

// todo: this code doesn't work... yet
        if (response.ok) {
            response.json().then(function (data) {
                // saveCity(data.name)
                displayCurrentWeather(data);
                displayWeather(data);
            });
        }

    })
}}

forecastWeather()

function forecastWeather(){
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
  
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;

    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + "&lon=" + longitude + '&units=imperial&' + APIkey).then(res => res.json()).then(data => {
    


    })
}}



// todo: everything after this works

var formSubmitHandler = function (event) {
    event.preventDefault();
    var cityNameEl = cityName.value.trim();
    if (cityNameEl) {
        getWeatherInfo(cityNameEl);
        cityName.value = '';
    } else {
        alert('Please enter a city name!');
    }
};
renderCityName();

userFormEl.addEventListener('submit', formSubmitHandler);
function getWeatherInfo(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIkey + '&units=imperial').then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                saveCity(data.name)
                displayCurrentWeather(data);
                displayWeather(data.coord.lat, data.coord.lon);
            });
        }
    })
};

var displayCurrentWeather = function (data) {
    currentCity.textContent = data.name;
    currentDate.textContent = date;
    tempEl.textContent = data.main.temp + "°F";
    windEl.textContent = data.wind.speed + "mph";
    humidityEl.textContent = data.main.humidity + "%";
    var image = data.weather[0].icon;
    var newImage = parseInt(hour) > 9 && parseInt(hour) < 21 ? image.slice(0, -1) + 'd' : image.slice(0, -1) + 'n';
    var imgUrl = `http://openweathermap.org/img/wn/${newImage}.png`

    $('#headerImage').empty();
    $('#headerImage').prepend(`<img src="${imgUrl}"/>`);

    forecastEl.show();
    weatherPanelEl.show();
};

var displayWeather = function (lat, lon) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + APIkey + '&units=imperial').then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                    containerEl.empty();
                    for (var i = 8; i < 40; i += 7) {
                        var image = data.list[i].weather[0].icon;
                        var newImage = parseInt(hour) > 9 && parseInt(hour) < 21 ? image.slice(0, -1) + 'd' : image.slice(0, -1) + 'n';
                        var html =
                            ` <div class="card" style="width: 18rem;">
                                <div class="card-body content-card">
                                <h5 class="card-title">${moment.unix(data.list[i].dt).format('dddd')}</h5>
                                <img src="http://openweathermap.org/img/wn/${newImage}@2x.png">
                                <p class="card-text">Temp: ${data.list[i].main.temp + "°F"}</p>
                                <p class="card-text">Wind: ${data.list[i].wind.speed + "mph"}</p>
                                <p class="card-text">Humidity: ${data.list[i].main.humidity + "%"}</p>
                                </div>
                            </div>`
                            containerEl.append(html);
                    }
                });
            }
        })
}

function saveCity(city) {
    var key = "cityName";
    var valueToSave = city;
    var history = localStorage.getItem(key);

    if (history === null) {
        localStorage.setItem(key, JSON.stringify("[]"));
        history = "[]";
    }
    var currentHistory = JSON.parse(history);
    if (!history.includes(valueToSave)) {
        currentHistory.push(valueToSave);
        localStorage.setItem(key, JSON.stringify(currentHistory));
    }
    renderCityName();
}

function renderCityName() {
    var keyToDisplay = "cityName";
    var history = localStorage.getItem(keyToDisplay);
    if (history === null) {
        return;
    }
    var cities = JSON.parse(localStorage.getItem(keyToDisplay));
    buttons.empty();

    for (var i = 0; i < cities.length; i++) {
        var cityItemButton = cities[i];
        var button = $('<button>');
        button.text(cityItemButton);
        button.addClass('cityButton btn btn-outline-dark btn-sm');
        button.attr("id", cities[i]);
        button.on('click', historyClicked);
        buttons.append(button);
    }
}

function historyClicked(event) {
    event.preventDefault();
    var buttonClicked = event.target;
    getWeatherInfo(buttonClicked.id);
}
