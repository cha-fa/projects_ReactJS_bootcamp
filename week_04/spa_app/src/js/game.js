import { platformLogos } from "./components";
import { findStoreLogo } from "./components";
import { findPlatformLogo } from "./components";
import dayjs from "dayjs";

const Game = (gameArgument = "") => {
  let game;

  const preparePage = () => {
    const cleanedArgument = gameArgument.replace(/\s+/g, "-");

    const fetchGame = (url, gameArgument) => {
      let finalURL = url + gameArgument;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          displayDescription(response.description);
          displayReleased(response.released);
          displayName(response.name);
          displayRatings(response.rating, response.ratings_count);
          displayDevelopers(response.developers);
          displayPlatforms(response.platforms);
          displayRatings(response.rating, response.ratings_count);
          displayPublishers(response.publishers);
          displayTags(response.tags);
          displayGenres(response.genres);
          displayJumbotron(response.background_image, response.website);
          displayStores(response.stores);
          displayTrailer(response.clip);
        });

      fetch(`${finalURL}/screenshots?page_size=9`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((screenshot) => {
            screenDisplay(screenshot.image);
          });
        });

      fetch(`${finalURL}/youtube?page_size=4`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((youtube, index) => {
            displayYoutube(youtube, index);
          });
        });

      let games = "";

      fetch(`${finalURL}/suggested?page_size=6`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((game) => {
            displaySimilarGames(game);
            renderPublisher(game);
          });
        });

      let articleDOM = document.querySelector(".page-detail");

      const displayDescription = (description) => {
        description = description.replace("p>Plot</p", "h5>Plot</h5");
        description = description.replace("p>Gameplay</p", "h5>Gameplay</h5");
        description = description.replace(/<br \/>/gi, "<br class='mb-3' />");
        articleDOM.querySelector("#description").innerHTML = description;
      }

      const displayReleased = (released) => {
        !released ? (released = "TBA") : released;
        articleDOM.querySelector("#release-date").innerHTML = dayjs(released).format("MMMM DD, YYYY");
      }

      const displayName = (name) => {
         articleDOM.querySelector("h1#title").innerHTML = name;
      }

      const displayRatings = (rating, ratings_count) => {
        articleDOM.querySelector(
          "#rating"
        ).innerHTML = `${rating}/5 - ${ratings_count} votes`;
      }

      const displayDevelopers = (developers) => {
        articleDOM.querySelector("#developers").innerHTML = developers.map(
          (d) =>
            `<a class="a-intern" href='#developers/${d.slug}'> ${d.name}</a>`
        );
      }

      const displayPublishers = (publishers) => {
        articleDOM.querySelector("#publishers").innerHTML = publishers.map(
          (p) =>
            ` <a class="a-intern" href='#publishers/${p.slug}'> ${p.name}</a>`
        );
      }

      const displayGenres = (genres) => {
        articleDOM.querySelector("#genres").innerHTML = genres.map(
          (g) =>
            `<a  class="a-intern" href='#genres/${g.slug}'> ${g.name}</a>`
        );
      }

      const displayPlatforms = (platforms) => {
        articleDOM.querySelector("#platforms").innerHTML = platforms.map(
          (p) =>
            `  <a class="a-intern" href='#platforms/${p.platform.id}'>${p.platform.name}</a>`
        );
      }

      const displayTags = (tags) => {
        articleDOM.querySelector("#tags").innerHTML = tags.map(
          (t) => ` <a class="a-intern" href='#tags/${t.slug}'> ${t.name}</a>`
        );
      }

      const displayJumbotron = (img, website) => {
        articleDOM.querySelector(
          ".jumbotron"
        ).style = `background-image: url(${img})`;
        articleDOM
          .querySelector(".jumbotron a")
          .setAttribute("href", website);
      }

      const displayStores = (stores) => {
        articleDOM.querySelector(".stores").innerHTML = stores.map(
          (store) => `
            <a class="no-style" target="_blank" href=${store.url}>
                <p class="hover-red" >${store.store.name}
                ${findStoreLogo(store.store.name)}
                </p>
            </a>
          `).join("")
      }

      const displayTrailer = (clip) => {
        if (clip) {
          articleDOM.querySelector(
            "#trailer"
          ).innerHTML = `<video controls src=${clip.clips.full}>Trailer</video>`;
        }
      }

      const screenDisplay = (img) => {
        articleDOM.querySelector(
          "#screenshots"
        ).innerHTML += `<img class="screen-img p-3 m-4 w-25" src="${img}" alt="Snapshot of the game">`;
      };

      const displayYoutube = (youtube, index) => {
        let url = `https://youtube.com/watch?v=${youtube.external_id}`
        if (index == 0) {
          articleDOM.querySelector("#first-video").innerHTML += `
            <div class="col-6">
            <a class="no-style" target="_blank" href=${url}>
              <img class="card-img-top " src="${
                youtube.thumbnails.high.url
              }" alt="Preview">
              </a>
            </div>
            <div class="col-6">
              <a class="no-style" target="_blank" href=${url}>
                <h3 class="hover-red">${youtube.name}</h3>
                <p>${youtube.channel_title} - ${dayjs(youtube.created).format(
                  "MMMM DD, YYYY"
                  )}
                </p>
              </a>
            </div>
          `;
        } else {
          articleDOM.querySelector("#other-videos").innerHTML += `

          <div class="col-4">
          <a class="no-style"  target="_blank" href=${url}>
            <img class="card-img-top " src="${
              youtube.thumbnails.high.url
            }" alt="Snapshot of the game">
            <h3  class="hover-red">${youtube.name}</h3>
            <p>${youtube.channel_title} - ${dayjs(youtube.created).format(
            "MMMM DD, YYYY"
          )}</p>
            </a>
          </div>

          `;
        }
      };

    const renderPublisher = (game) => {
      fetch(`https://api.rawg.io/api/games/${game.slug}`)
        .then((response) => response.json())
        .then((response) => {
          document.getElementById(`pub_${game.id}`).innerHTML = `
          Publisher: ${response.publishers.map(p => `${p.name} `)}
          `
        })
    }

      const displaySimilarGames = (game) => {
        let platforms = [];

        if (game.platforms) {
          game.platforms.forEach((platformObj) => {
            platforms.push(
              `${findPlatformLogo(platformObj.platform.name)}`
            );
          });
          platforms = [...new Set(platforms)];
          platforms = platforms.filter((el) => el).join("");
        }
        articleDOM.querySelector("#similar-games").innerHTML += `
        <a class="a-intern" href="#game/${game.slug}">
        <div  data-aos="flip-left"  class="col-xs-12 col-md-4 w-75 mb-5 ">
          <div class="game-card">
            <div class="game-top">
              <img class="card-img-top mb-4" src="${
                game.background_image
              }" alt="Snapshot of the game">
              <div class="overlay-infos">
              <p >Release date : ${dayjs(game.released).format(
                    "MMMM DD, YYYY"
                    )}</p>
              <p >Genres: ${game.genres.map(
                (g) => ` ${g.name}`
              )}</p>
              <p >Rating: ${game.rating} /5</p>
              <p >${game.ratings_count} votes</p>
              <p id="pub_${game.id}"></p>
              </div>
            </div>
          <div class="card-body p-0">
          </a>
          <h4 class="mb-3"><a class="a-intern" href="#game/${
            game.slug
          }">${game.name}</a></h4>
            ${platforms}
          </div>
          </div>
        </div>
        `;
      };

    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    document.querySelector(".introduction").style.display = "none";
    pageContent.innerHTML = `
    <section class="page-detail w-100">
      <div class="jumbotron jumbotron-fluid">
      <a target="_blank">
        <div  data-aos="zoom-in-up"  class="play-btn d-flex justify-content-between">
          View website
          <i class="fas fa-play play-icon"></i>
        </div>
      </a>
      </div>

      <div class="row">
        <div class="col-8">
          <h1 id="title"></h1>
        </div>
        <div class="col-4 d-flex align-items-center">
          <p id="rating"></p>
        </div>
      </div>
      <div class="row">
        <p  data-aos="fade-up" class="col" id="description"></p>
      </div>

      <div  data-aos="fade-up" class="row">
        <div class="col-xs-6 col-md-3">
          <h5>Release Date:</h5>
          <p id="release-date"></p>
        </div>
        <div class="col-xs-6 col-md-3">
          <h5>Developers:</h5>
          <p id="developers"></p>
        </div>
        <div class="col-xs-6 col-md-3">
          <h5>Platforms:</h5>
          <p id="platforms">list Platforms: </p>
        </div>
        <div class="col-xs-6 col-md-3">
          <h5>Publishers:</h5>
          <p id="publishers"></p>
        </div>
      </div>

      <div  data-aos="fade-up" class="row">
        <div class="col-xs-12 col-md-6">
          <h5>Genres:</h5>
          <p id="genres"></p>
        </div>
        <div class="col-xs-12 col-md-6">
          <h5>Tags:</h5>
          <p id="tags"></p>
        </div>
      </div>

      <div  data-aos="fade-up" class="row">
        <div class="col">
          <h2>BUY</h2>
          <p class="stores">
          </p>
        </div>
      </div>

      <div  data-aos="fade-up" class="row">
        <div class="col">
          <h2>TRAILER</h2>
          <div id="trailer" class="d-flex justify-content-center">
          <p>Trailer is unavailable</p>
          </div>
        </div>
      </div>

      <div  data-aos="fade-up" class="row">
        <div class="col">
          <h2>SCREENSHOTS</h2>
          <div  data-aos="fade-up" class="row d-flex justify-content-center" id="screenshots">
          </div>
        </div>
      </div>

      <div  data-aos="fade-up" class="row">
        <div class="col mb-5">
          <h2>YOUTUBE</h2>
          <div id="youtube">
            <div  data-aos="fade-up" id="first-video" class="row">
              <div class="col-6">
              </div>
              <div class="col-6">
              </div>
            </div>
            <div  data-aos="fade-up" id="other-videos" class="row">
              <div class="col-4">
              </div>
              <div class="col-4">
              </div>
              <div class="col-4">
              </div>
            </div>

          </div>
        </div>
      </div>


      <div  data-aos="fade-up" class="row mt-2">
        <div class="col mt-5" >
          <h2>SIMILAR GAMES</h2>
          <div  data-aos="fade-up" class="row" id="similar-games">
          </div>
        </div>
      </div>

    </section>
    `;
    preparePage();
  };

  render();
};

export { Game };
