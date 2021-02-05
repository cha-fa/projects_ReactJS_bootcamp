import '../sass/style.scss';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import AOS from 'aos';
import 'aos/dist/aos.css';


import { platformLogos } from './components';
import { platformIds } from './components';

import { routes } from './routes';


const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  console.log("PAAATH", path)

  let gameArgument = path[1] || "";
  let platformArgument = document.querySelector("#selectPlatform").value

  const pageContent = document.getElementById("pageContent");
  console.log("lauching set route with", "path 0", [path[0]], "page argu :", gameArgument,"platform argu" ,platformArgument)

  if (path[0] && path[0] != "gamesindex") {
    routes[path[0]](gameArgument, platformArgument, path[0])
  } else {
    routes[path[0]](gameArgument, platformArgument);
  }

};


const setPlatforms = () => {
  let options = ''

  Object.keys(platformLogos).forEach(platform => {
    document.querySelector(".introduction select").innerHTML += `
    <option value=${platformIds[platform]}>Platform : ${platform}</option>
    `
  })

}

const search = () => {
  const userInput = document.getElementById("userSearch").value
  window.location.href = `#gamesindex/${userInput.toLowerCase()}`;
}


AOS.init();

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());
document.querySelector("#selectPlatform").addEventListener("change", () => setRoute())

window.addEventListener("DOMContentLoaded", () => setPlatforms());
document.getElementById("submitBtn").addEventListener("click", (event) => {
  event.preventDefault();
  search();
})


