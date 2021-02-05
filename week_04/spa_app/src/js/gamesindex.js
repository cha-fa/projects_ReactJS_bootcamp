import { platformLogos } from './components';
import { platformIds } from './components';
import { findPlatformLogo } from './components';
import dayjs from "dayjs";

const GamesIndex = (gameArgument = "", platform = "", filter) => {

  const preparePage = () => {
    const cleanedArgument = gameArgument.replace(/\s+/g, "-");
    let games = "";
    let gamesCount = 0;
    let nextURL = ""

    const fetchList = (url, gameArgument, platform, filter) => {
      document.getElementById("no-results").classList.add("invisible")
      let finalURL = url;

      let platformFilter = ""
      if (platform) {
        platformFilter = `&platforms=${platform}`
      }

      if (nextURL) {
        finalURL = nextURL
      } else if (filter) {
        finalURL = url + "&" + filter + "=" + gameArgument + platformFilter
      } else if (gameArgument) {
        finalURL = url + "&search=" + gameArgument + platformFilter
      } else if (!gameArgument && platform) {
        finalURL = url + "&dates=2021-02-01,2022-12-31" + platformFilter
      } else {
        finalURL = url + "&dates=2021-02-01,2022-12-31";
      }
      console.log("LAUNCHING FETCH WITH URL:", finalURL)

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          if (response.results.length < 1) {
            document.getElementById("no-results").classList.remove("invisible")
            return
          }
          response.results.forEach((game) => {
            renderGameCard(game);
            renderPublisher(game)
            gamesCount += 1;
          });
          response.next ? nextURL = response.next : document.querySelector("#showBtn").classList.add("invisible")
          document.querySelector(".games").innerHTML = games;
        });

      if (gamesCount > 17) {
        document.querySelector("#showBtn").classList.add("invisible");
      }

    };

    fetchList("https://api.rawg.io/api/games?page_size=9", cleanedArgument, platform, filter);
    showMoreBtn()
    document.querySelector("#showBtn").addEventListener("click", fetchList)

    const renderPublisher = (game) => {
      fetch(`https://api.rawg.io/api/games/${game.slug}`)
        .then((response) => response.json())
        .then((response) => {
          document.getElementById(`pub_${game.id}`).innerHTML = `
          Publisher: ${response.publishers.map(p => `${p.name} `)}
          `
        })
    }

    const renderGameCard = (game) => {
      let platforms = []

      if (game.platforms) {
        game.platforms.forEach(platformObj => {
         platforms.push(`${findPlatformLogo(platformObj.platform.name)}`)
       });
        platforms = [...new Set(platforms)];
        platforms = platforms.filter(el => el).join("")
      }
      games += `
      <a class="a-intern" href="#game/${game.slug}">
      <div class="col-xs-12 col-md-4 w-75 mb-5 ">
        <div data-aos="flip-left" class="game-card">
          <div class="game-top">
            <img class="card-img-top mb-4" src="${game.background_image}" alt="Snapshot of the game">
            <div class="overlay-infos">
            <p >Release date : ${dayjs(game.released).format(
                      "MMMM DD, YYYY"
                      )}</p>
            <p >Genres: ${game.genres.map(g => ` ${g.name}`)}</p>
            <p >Rating: ${game.rating} /5</p>
            <p >${game.ratings_count} votes</p>
            <p id="pub_${game.id}""></p>
            </div>
          </div>
          <div class="card-body p-0">
          </a>
            <h4 class="mb-3"><a class="a-intern" href="#game/${game.slug}">${game.name}</a></h4>
            ${platforms}
          </div>
        </div>
      </div>
    `;

    }

  };

  const render = () => {
    document.querySelector(".introduction").style.display = "block";
    document.getElementById("pageContent").innerHTML = `
      <section class="row games">
        <i class="fas fa-spinner fa-spin"></i>

      </section>
    `;

    preparePage();
  };

  const showMoreBtn = () => {
    let btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = "SHOW MORE"
    btn.id = "showBtn"

    document.getElementById("pageContent").appendChild(btn)
  }

  const toggleBtn = () => {
    if (document.querySelector(".games").children.length > 18) {
      document.querySelector("#showBtn").classList.add("invisible")
    }
  }


  render();
};

export { GamesIndex };
