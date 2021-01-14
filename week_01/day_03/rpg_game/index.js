const name_section = document.getElementById("name_section")
const character_section = document.getElementById("character")

character_section.value == "no_character" ? name_section.style.display = "none" :  name_section.style.display = "block";

character_section.addEventListener("change", (event) => {
  character_section.value === "no_character"
    ? name_section.style.display = "none"
    : name_section.style.display = "block";
});

const game = new Game();

document.querySelector("#confirm_game").addEventListener("click", (event) => {
  if (document.getElementById("name").value == "") {
    alert("Tu as oublié ton nom !");
    }
  else {
    event.preventDefault();
    game.startGame();
  }
});
