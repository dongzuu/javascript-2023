const API_KEY = "2304496dcf7348d1e3817a1d79908167";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} /${data.main.temp}`;
    });
}
function onGeoError() {
  alert("sorry I can't find your loc");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
