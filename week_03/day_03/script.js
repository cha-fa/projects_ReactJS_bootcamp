// const fetch = require('node-fetch')

const url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&rows=20&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes&geofilter.distance=48.8437464%2C2.3964723%2C1000`

async function getRecords() {
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderRecords() {
    let data = await getRecords();
    const mappedData = data.records.map(record => [record.fields.name, record.fields.ebike, record.fields.mechanical, record.fields.capacity])
    return mappedData
}

const showVelibStation = (name, electricBikes, mechanicalBikes, capacity) => {
    document.querySelector("tbody").innerHTML += `
    <tr>
      <th scope="row">${name}</th>
      <td>${electricBikes}</td>
      <td>${mechanicalBikes}</td>
      <td>${capacity}</td>
    </tr>
    `
}

const displayResults = () => {
  console.log("Results updated (every 60 sec) at :", new Date)
  try {
    renderRecords()
      .then((result) => {
        document.querySelector("tbody").innerHTML ="";
        result.forEach(station =>  showVelibStation(station[0], station[1], station[2], station[3])
      )})
  } catch (err) {
    console.log(err);
  }
}


displayResults()
setInterval(displayResults,  60000)

