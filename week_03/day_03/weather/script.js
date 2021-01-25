

// const fetch = require('node-fetch')

const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=47.2668824&lon=-1.4410916&key=${API_KEY}`
let movieContent

async function getRecords() {
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderRecords() {
    let records = await getRecords();
    const mappedData = records.data.slice(0,7).map(record => [record.valid_date, record.app_max_temp, record.app_min_temp, record.weather.description, record.weather.icon])

    return mappedData;
}

const showDailyWeather = (date, max_temp, min_temp, description, icon) => {
    document.querySelector(".container").innerHTML += `
    <div class="card col-2">
      <div class="card-header">${date}</div>
      <img class="card-img-top" src="icons/${icon}.png" alt="icon">
      <div class="card-body">
        <h5 class="card-title">${description}</h5>
        <p class="card-text">Température maximale : ${max_temp}°C</p>
        <p class="card-text">Température maximale : ${min_temp}°C</p>
      </div>
    </div>
    `
}

const displayResults = () => {
  try {
    renderRecords()
      .then((result) => {
        document.querySelector(".container").innerHTML ="";
        result.forEach(day =>  showDailyWeather(day[0], day[1], day[2], day[3], day[4])
      )})
  } catch (err) {
    console.log(err);
  }
}


displayResults()
