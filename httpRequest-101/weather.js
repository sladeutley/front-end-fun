const myWeatherReq = new XMLHttpRequest();

const callIfFailed = () => {
  console.log("oops. We should handle this better than with a console.log");
};

const parseWeatherData = () => {
  const data = JSON.parse(myWeatherReq.responseText);
  console.log("data", data);
  outputWeather(data.current_observation);
};

myWeatherReq.open(
  "GET",
  "http://api.wunderground.com/api/f6bc9b77517ca2f5/conditions/q/CA/San_Francisco.json"
);

myWeatherReq.addEventListener("load", parseWeatherData);
myWeatherReq.addEventListener("error", callIfFailed);

myWeatherReq.send();

const outputWeather = (data) => {
  const weatherStuff = document.getElementById("weatherStuff");
  weatherStuff.innerHTML = `<h3>Conditions for ${data.display_location.full}</h3>
  <p>Current temp: ${data.temp_f}</p>
  <p>This wind is currently ${data.wind_string}</p>`
}
