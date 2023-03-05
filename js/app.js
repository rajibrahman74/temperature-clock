const API_KEY = `5fd24e836da6064cfbb23ada0d94f6cb`;



const loadTemperature = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};




const displayTemperature = data => {
    console.log(data.main.temp);

    const temperature = document.getElementById("temperature");

    temperature.innerText = data.main.temp;
}

loadTemperature("Seoul");