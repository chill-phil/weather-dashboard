var cityFormel = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city-name")


var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();

    // get value from input element
    var cityName = cityInputEl.value.trim();

    if (cityName) {
        getUserRepos(cityName);
        cityInputEl.value = "";
    } else {
        alert("Please enter a city name");
    }
  };



var getWeatherData = function(city) { //probs something wrong with city/ ask
    // format "open weather map" api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=882d7b151f3175e892df45d1e68ea9dd";

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });

  };
  
  getWeatherData();

  // add event listener to forms
  cityFormEl.addEventListener('submit', formSubmitHandler);