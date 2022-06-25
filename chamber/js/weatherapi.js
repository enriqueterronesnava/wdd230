const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const wspeed = document.querySelector("#wspeed");
const wchill = document.querySelector("#wchill");
const url = "https://api.openweathermap.org/data/2.5/weather?zip=87607,mx&appid=f333850fc16d2853e7f253210a91fe65&units=metric";

apiFetch(url);

async function apiFetch(apiurl) {
    try {
    const response = await fetch(apiurl);
    if (response.ok){
        const data = await response.json();
        console.log(data);
        displayResults(data);
    } else {
        throw Error(await response.text());
    }   
        
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherdata) {
    currentTemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(1)}</strong>`;
    const imagesrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const desc = weatherdata.weather[0].description.toUpperCase();
    captionDesc.innerHTML = desc
    wspeed.innerHTML = `Wind speed: ${weatherdata.wind.speed} km/h`;
    wchill.innerHTML = `Feels like: ${weatherdata.main.feels_like} &deg;C`
    weatherIcon.setAttribute("src", imagesrc);
    weatherIcon.setAttribute("alt", desc);
}