const cookieSteps = [
  [1, "cup", "white flour", "dry"],
  [0.5, "tsp", "baking soda", "wet"],
  [0.25, "tsp", "salt", "dry"],
  [0.25, "cup", "sugar", "dry"],
  [0.25, "cup", "brow sugar", "dry"],
  [0.25, "tbsp", "soy milk", "wet"],
  [0.25, "tbsp", "oil", "wet"],
  [0.25, "tsp", "pure vanilla extract", "dry"],
  ["Form into one big ball, then either refrigerate at least 2 hours or freeze until the dough is cold. Once dough is chilled, preheat oven to 325 F. Form dough balls, and place on a greased baking tray, leaving enough room between cookies for them to spread."],
  [325, 10]
]


function Recipe (title, steps) {
  let recipe = Object.create(Recipe.prototype)
  recipe.title = title
  recipe.steps = steps

  return recipe
}

Recipe.prototype.cook = function() {
  let recipeString = ""
  this.steps.forEach( (step, index) =>{
    if (step[3] == "wet") {
      recipeString = recipeString.concat(" ", `For ${step[0]} ${step[1]} of ${step[2]} to the bowl \n` )
    }
    else if (step[3] == "dry") {
      recipeString = recipeString.concat(" ", `Add ${step[0]} ${step[1]} of ${step[2]} to the bowl \n` )
    }
    else if (step.length == 1) {
      recipeString = recipeString.concat(" ", `${step[0]}\n`)
    }
    else {
      if (step[1] != 0 && step[0 !=0]) {
        recipeString = recipeString.concat(" ", `Then, heat ${step[1]} minutes in the oven at ${step[0]} degrees. \n`)
      }
    }
  })
  this.display(recipeString)
}

Recipe.prototype.display = function(string) {
  document.querySelector(".card-title").innerHTML = this.title;
  document.querySelector(".card-subtitle").innerHTML = "By Philippe Etchebest"
  string.split("\n").forEach(step => {
  document.querySelector('.list-group').innerHTML += `
  <li class="list-group-item">${step}</li>
  `;
  })
}


const cookie = Recipe('Cookie', cookieSteps)
