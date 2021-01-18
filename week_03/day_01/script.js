const menuBtn = document.getElementById("menu-btn");
const changeMenuBtn = document.getElementById("change-menu")

const picturesBtn = document.getElementById("pictures-btn")

menuBtn.addEventListener("click", () => {
  console.log("menu cliqué")
  closeAllTabs();
  changeMenu();
  collapseMenu();
})

picturesBtn.addEventListener("click", () => {
  console.log("photo cliqué")
  closeAllTabs();
  collapsePictures();
})

changeMenuBtn.addEventListener("click", changeMenu);

window.addEventListener("mouseout", isOut);


function collapseMenu() {
  const menuElement = document.getElementById("menu-content")
  if (menuElement.style.display == "block") {
    menuElement.style.display = "none";
  } else {
    menuElement.style.display = "block";
  }
}

function changeMenu() {
  const meals = document.getElementsByClassName("meal")

  Array.from(meals).forEach(function (meal) {
    meal.innerHTML = generateRandomMenu();
  });
}

function generateRandomMenu() {

  const main_courses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"]
  const techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"]
  const sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"]
  const seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"]


  const random_main_course = main_courses[Math.floor(Math.random()*main_courses.length)]
  const random_technique = techniques[Math.floor(Math.random()*techniques.length)]
  const random_side = sides[Math.floor(Math.random()*sides.length)]
  const random_seasoning = seasonings[Math.floor(Math.random()*seasonings.length)]

  return `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`
}


function isOut() {
  if (event.clientY <= 0) {
    console.log("user is out")
    document.getElementById("modal-btn").click()
  }
}

function closeAllTabs() {
  const tabContents = document.querySelectorAll(".tab-cf")

  Array.from(tabContents).forEach(function (tab) {
    tab.style.display = "none"
  })
}

function collapsePictures() {
  const picturesElement = document.getElementById("pictures-content")

  if (picturesElement.style.display == "block") {
    picturesElement.style.display = "none";
  } else {
    picturesElement.style.display = "block";
  }

}




let draggedSrcEl = null;

function handleDragStart(e) {
  // Target (this) element is the source node.
  draggedSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);

  this.classList.add('dragElem');
}
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }
  this.classList.add('over');

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
}

function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
}

function handleDrop(e) {
  // this/e.target is current target element.
  e.preventDefault()
  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (draggedSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    //alert(this.outerHTML);
    //draggedSrcEl.innerHTML = this.innerHTML;
    //this.innerHTML = e.dataTransfer.getData('text/html');
    this.parentNode.removeChild(draggedSrcEl);
    var dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin',dropHTML);
    var dropElem = this.previousSibling;
    addDnDHandlers(dropElem);

  }
  this.classList.remove('over');
  return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.
  this.classList.remove('over');

  /*[].forEach.call(cols, function (col) {
    col.classList.remove('over');
  });*/
}

function addDnDHandlers(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragenter', handleDragEnter, false)
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragend', handleDragEnd, false);

}

var pictures = document.querySelectorAll('.picture-cf');
[].forEach.call(pictures, addDnDHandlers);

