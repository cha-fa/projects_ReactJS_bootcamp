import React from 'react';

const Receipe = () => {

    const fetchReceipe = () => {

      fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((response) => response.json())
        .then((response) => {
          let { strMeal, strMealThumb, strSource } = response.meals[0];
          document.querySelector("#receipe-card").style.display = "block"
          document.querySelector("#receipeTitle").innerHTML = strMeal;
          document.querySelector("#receipePicture").setAttribute("src", strMealThumb)
          document.querySelector("#receipeLink").setAttribute("href", strSource)
          document.querySelector("#receipeLink").innerHTML = "Voir la recette complète"
        });
      };

  return (
    <section id="receipe">
      <button className="btn btn-primary" onClick={fetchReceipe}>TROUVER UNE RECETTE</button>
      <div className="col-sm-12 col-md-4 p-2 card mb-2" id="receipe-card" style={{display: "none"}}>

        <img className="card-img-top" id="receipePicture" src="" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title" id="receipeTitle"></h5>
          <a className="btn btn-secondary" id="receipeLink"></a>
        </div>
      </div>
    </section>
  )

}

export default Receipe
