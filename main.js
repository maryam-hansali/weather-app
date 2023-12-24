const search = document.getElementById("search");
const search_icon = document.getElementById("search_icon");
const weather_img = document.getElementById("weather_img");
const content_card = document.querySelector(".content_card");
const errorMessage = document.querySelector(".error");
async function checkweather(city) {
  const apiKey = "179ada9bf5b00a876af83a5404322d75";
  const api =
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric";

  const response = await fetch(api + `&q=${city}` + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);

  if (data.cod === 404) {
    errorMessage.style.display = "block";
    content_card.style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.getElementById("humidity").innerHTML = data.main.humidity + `%`;
    document.getElementById("temprature").innerHTML =
      Math.round(data.main.temp) + "c";
    document.getElementById("wind").innerHTML = data.wind.speed + "km/h";
    console.log(data.weather[0].main);
    console.log(data);
    if ((data.weather[0].main = "Clouds")) {
      weather_img.src = "./images/clouds.png";
    } else if ((data.weather[0].main = "Clear")) {
      weather_img.src = "./images/clear.png";
    } else if ((data.weather[0].main = "Mist")) {
      weather_img.src = "./images/mist.png";
    } else if ((data.weather[0].main = "Drizzle")) {
      weather_img.src = "./images/drizzle.png";
    } else if ((data.weather[0].main = "Snow")) {
      weather_img.src = "./images/Snow.png";
    } else if ((data.weather[0].main = "Snow")) {
      weather_img.src = "./images/rain.png";
    }
    content_card.style.display = "flex";
    errorMessage.style.display = "none";
  }

  //   ========== error message =====
}
search_icon.addEventListener("click", () => {
  checkweather(search.value);
});

// data.weather.main
