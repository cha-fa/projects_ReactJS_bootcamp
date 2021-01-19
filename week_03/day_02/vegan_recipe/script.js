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
  document.getElementById("recipeCreation").classList.add("invisible")
  document.getElementById("cookieRecipe").classList.remove("invisible")
  console.log("steps in cook", this.steps)
  let recipeString = ""
  this.steps.forEach( (step, index) =>{
    console.log(step, index)
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
  document.querySelector('.list-group').innerHTML = ""
  string.split("\n").forEach(step => {
    document.querySelector('.list-group').innerHTML += `
    <li class="list-group-item">${step}</li>
    `;
  })
}

Recipe.prototype.addStep = function() {
  console.log("adding step")
  const quantity = document.getElementById("quantity").value
  const ingredient = document.getElementById("ingredient").value
  const typeFood = document.getElementById("foodType").value
  const typeMesure = document.getElementById("measurementType").value

  let i = 0
  this.steps.push([quantity, typeMesure, ingredient, typeFood])
  this.steps[i + 1]
  console.log(this.steps, "in add step")
  let ingredientsList = this.steps.map(step => step[2]).join(" ,")
  document.getElementById("confirmationIngredient").innerHTML = `This recipe has the following ingredients : ${ingredientsList}`
}


Recipe.prototype.finishRecipe = function() {
  console.log("finishing")
  const resume = document.getElementById("recipeResume").value
  const duration = document.getElementById("heatingDuration").value
  const temperature = document.getElementById("heatingTemp").value
  const title = document.getElementById("title").value
  this.title = title
  this.steps.push([resume], [temperature, duration])
  this.cook()
}

const cookie = Recipe('Cookie', cookieSteps)
let newRecipe


document.getElementById("classicRecipe").addEventListener("click", () => {
  cookie.cook()
})

document.getElementById("createRecipe").addEventListener("click", () => {
  document.getElementById("recipeCreation").classList.remove("invisible")
  document.getElementById("cookieRecipe").classList.add("invisible")
})

document.getElementById("addIngredient").addEventListener("click", () => {
  console.log("add ind clicked")
  newRecipe = Recipe("", [])
  newRecipe.addStep()
})

document.getElementById("confirmRecipe").addEventListener("click", () => {
  newRecipe.finishRecipe()
})

