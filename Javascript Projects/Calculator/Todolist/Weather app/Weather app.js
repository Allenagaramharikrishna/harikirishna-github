const API_KEY = `e5c53a519f75fe0db7194d23108b2b03`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
const getWeather = async (city) => {
  weather.innerHTML = `<h2> Loading... <h2>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data);
};

const showWeather = (data) => {
  console.log(data);
  if (data.cod == "404") {
    weather.innerHTML = `<h2 id = "h"> City Not Found <h2>`;
    return;
  }
  weather.innerHTML = `
        <div>
        <h2 id= 'img1'>${data.name},${data.sys.country}:
                    Wheather details</h2>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" id='img'>
        </div>
        <div>
            <h2 id='h'>Temp:${data.main.temp} ℃</h2>
            <h2 id='h'>Humidity:${data.main.humidity}%</h2>
            <h4 id='h'>Wheather: ${data.weather[0].main} </h4>
        </div>
    `;
};

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
  search.value = "";
});
