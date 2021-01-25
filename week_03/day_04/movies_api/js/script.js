const submitBtn = document.querySelector("#submitBtn")
const moviesCards = document.querySelector("#moviesCards")
const moviesModals = document.querySelector("#moviesModals")



const getSearchUrl = () => {
  const keywords = document.querySelector("#inputMovie").value.trim().replace(/\s\s+/g, ' ').replace(/ /g, '+');
  return `http://www.omdbapi.com/?apikey=${apiKeys["omdb"]}&s=${keywords}`
}

const getMovieUrl = (movieTitle) => {
  const cleanedMovieTitle = movieTitle.trim().replace(/\s\s+/g, ' ').replace(/ /g, '+');

  return `http://www.omdbapi.com/?apikey=${apiKeys["omdb"]}&t=${cleanedMovieTitle}&plot=full`
}

const getMoviesList = async () => {
  try {
    let response = await fetch(getSearchUrl());
    if (!response.ok) {
      throw "not ok"
    }

    const movies = await response.json();
    return movies
  } catch (error) {
    console.log(error);
  }
}

const getMovie = async (movieTitle) => {
  try {
    let response = await fetch(getMovieUrl(movieTitle));
    if (!response.ok) {
      throw "not ok"
    }
    const movie = await response.json();
    return movie
  } catch (error) {
    console.log(error);
  }
}

const renderMovie = async (movieTitle) => {
  const movie = await getMovie(movieTitle)
  if (movie.Response == "False"){
    displayMovieCard(movieTitle, false)
    return false
  }

  displayMovieCard(movie)
  prepareModal(movie)

}

const renderlistOfMovies = async () => {
  const moviesList = await getMoviesList()

  if (moviesList.Response === "False"){
    displayNoResult()
    return false
  }
 document.querySelector("#noResults").classList.add("invisible")
  for (let i = 0; i < moviesList.Search.length; i++) {
    await renderMovie(moviesList.Search[i].Title)
  }
  launchObserver();
}

const displayNoResult = () => {
  document.querySelector("#noResults").classList.remove("invisible")
}


const displayMovieCard = (movie, response = true) => {
  if (response != true) {
    moviesCards.innerHTML += `
    <div class="card col-6 movie-card not-visible m-4 p-5" id="movie-card-${movie.imdbID}>
      <h5 class="card-title">${movie.Title}</h5>
      <p class="card-text">No information was found for this movie.</p>
    </div>
  `
  } else {
    moviesCards.innerHTML += `
    <div class="card col-9 p-5 m-4 movie-card not-visible" id="movie-card-${movie.imdbID}">
      <div class="row">
        <div class="col-4">
          <img class="card-img-top w-100" src="${movie.Poster}" alt="Image not found :(">
        </div>
        <div class="col-8">
          <h5 class="card-title">${movie.Title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Released on ${movie.Released}</h6>
          <p class="card-text"><strong>Actors :</strong> ${movie.Actors}</p>
          <p class="card-text"><strong>Genre :</strong> ${movie.Genre}</p>
          <p class="card-text"><i class="fas fa-film 2x"></i>
          <strong>Synopsis :</strong><br> <i>${movie.Plot.slice(0, 100)}...</i></p>
          <button type="button" class="btn btn-primary btn-read" data-toggle="modal" data-target="#modalOf${movie.imdbID}">
          Read more
          </button>
        </div>
      </div>
    </div>
    `
  }

}

const prepareModal = (movie) => {
  moviesModals.innerHTML +=`
  <div class="modal fade" id="modalOf${movie.imdbID}" tabindex="-1" role="dialog" aria-labelledby="modalOf${movie.imdbID}" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">${movie.Title}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body row">
          <div class="col-4">
            <img class="card-img-top w-100" src="${movie.Poster}" alt="Image not found :(">
          </div>
          <div class="col-8">
            <h6 class="card-subtitle mb-2 text-muted">Released on ${movie.Released}</h6>
            <p class="card-text"><strong>Actors :</strong> ${movie.Actors}</p>
            <p class="card-text"><strong>Genre :</strong>  ${movie.Genre}</p>
            <p class="card-text"><i class="fas fa-film 2x">Synopsis :</i></strong><br> <i> ${movie.Plot}</i></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}



// Declare the callback function for the IntersectionObserver

submitBtn.addEventListener("click", (event) => {
  moviesCards.innerHTML = ""
  moviesModals.innerHTML = ""

  event.preventDefault();
  renderlistOfMovies();

})




//to do if awards
