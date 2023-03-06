// free api keys
const API_KEY = `5fd24e836da6064cfbb23ada0d94f6cb`;

// Load temperature data form API

const loadTemperature = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};




// Display temperature data in UI

const displayTemperature = (data) => {
  console.log(data.main.temp);

  const temperature = document.getElementById("temperature");
  temperature.innerText = data.main.temp;
};




// add evenlintner in the search button
document.getElementById("search-btn").addEventListener("click", function () {

  // get input field  value
  const inputField = document.getElementById("search-field");
  const inputFieldValue = inputField.value;

  // get city name in UI
  const cityName = document.getElementById("city-name");
  cityName.innerText = inputFieldValue;

  // call the loadTemperature function with inputFieldValue parameter
  loadTemperature(inputFieldValue);

  // clear the input field
  inputField.value = "";
});



// call loadTemperature function
loadTemperature("Seoul");
