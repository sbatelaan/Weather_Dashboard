var apiKey = "a7cf6d8b7818bef7a79d89c363469555"
var currentWeather = document.getElementById("card-title-current")
var currentText = document.getElementById("current-text")
var currentTextTwo = document.getElementById("current-text-two")
var fiveDayBox = document.getElementById("card-title-five")
var fiveDayDescription = document.getElementById("five-text-desc")
var fiveDayTemp = document.getElementById("five-day-temp")
var fiveDayTempTwo = document.getElementById("five-day-temp-2")
var fiveDayTempThree = document.getElementById("five-day-temp-3")
var fiveDayTempFour = document.getElementById("five-day-temp-4")
var fiveDayTempFive = document.getElementById("five-day-temp-5")
var fiveDayDesc = document.getElementById("five-text-desc")
var fiveDayDescTwo = document.getElementById("five-text-desc-2")
var fiveDayDescThree = document.getElementById("five-text-desc-3")
var fiveDayDescFour = document.getElementById("five-text-desc-4")
var fiveDayDescFive = document.getElementById("five-text-desc-5")





function searchCity(cityName) {
    var cityName = document.getElementById("city-search").value
    var searchUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`
    fetch(searchUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {

            currentWeather.innerText = data.name
            currentTextTwo.innerText = data.weather[0].description
            currentText.innerText = "Temp: " + data.main.temp + "°F"
            console.log(data.weather)
            //write seperately
        })
forecast(cityName)
}

function forecast(city) {
    var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
    fetch(forecastUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            for (var i = 3; i < data.list.length; i = i + 8) {
                console.log(data.list[i])
                fiveDayTemp.innerText = "Temp: " + data.list[3].main.temp
                fiveDayTempTwo.innerText = "Temp: " + data.list[11].main.temp
                fiveDayTempThree.innerText = "Temp: " + data.list[19].main.temp
                fiveDayTempFour.innerText = "Temp: " + data.list[27].main.temp
                fiveDayTempFive.innerText = "Temp: " + data.list[35].main.temp
                fiveDayDesc.innerText = data.list[3].weather[0].description
                fiveDayDescTwo.innerText = data.list[11].weather[0].description
                fiveDayDescThree.innerText = data.list[19].weather[0].description
                fiveDayDescFour.innerText = data.list[27].weather[0].description
                fiveDayDescFive.innerText = data.list[35].weather[0].description
            }
        })
}
    
        
    

    
document.getElementById("searchBtn").addEventListener("click", searchCity)
    