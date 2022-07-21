const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector("#humidity");
const url = "https://api.openweathermap.org/data/2.5/onecall?lat=38.9&lon=-77.01&units=metric&appid=f333850fc16d2853e7f253210a91fe65";

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
    currentTemp.innerHTML = `<strong>${weatherdata.current.temp.toFixed(1)}</strong> &deg;C`;
    const imagesrc = `https://openweathermap.org/img/w/${weatherdata.current.weather[0].icon}.png`;
    const desc = weatherdata.current.weather[0].description.toUpperCase();
    captionDesc.innerHTML = desc
    humidity.innerHTML = `<strong>${weatherdata.current.humidity.toFixed(0)}%</strong>`
    weatherIcon.setAttribute("src", imagesrc);
    weatherIcon.setAttribute("alt", desc);
}