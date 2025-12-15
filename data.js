const data = JSON.parse(localStorage.getItem("weatherData"));
let city = document.querySelector(".cityName");
let country = document.querySelector(".countryName");
let currtemp = document.querySelector(".currTemp");
let minTemp = document.querySelector(".temp-min");
let maxTemp = document.querySelector(".temp-max");
let humidity = document.querySelector(".humidity");
let description = document.querySelector(".descrip");
let back = document.querySelector(".btn");
const date = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
});
const dayName = new Date().toLocaleDateString("en-IN", {
    weekday: "long"
});

const iconCode = data.weather[0].icon;
const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

document.querySelector(".icon").src = iconUrl;



console.log(data);
city.innerText += ` ${data.name}`;
country.innerText += ` ${data.sys.country}`;
currtemp.innerText = `${(data.main.temp - 273).toFixed(2)} ℃`;
minTemp.innerText = ` ${date}` ; 
maxTemp.innerText = ` ${dayName}` ; 
humidity.innerText += ` ${data.main.humidity}%`;
description.innerText += ` ${data.weather[0].main}`;

back.addEventListener("click", () =>{
    window.open("index.html","_self");
});


