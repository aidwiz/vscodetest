// starting grid 16x16
let promptGridRow = 16;
buildGrid(promptGridRow);

// buttons to reset screen
let reset = document.querySelector(".resetScreen");
reset.addEventListener("click", function() {
  // StackO - clear all child elements under .flex-container
  var clearList = document.querySelector(".flex-container");
  while (clearList.hasChildNodes()) {
    clearList.removeChild(clearList.firstChild);
  }

  //prompt user to enter new grid
  let promptGridRow = prompt("Enter the number of grid rows: ");
  buildGrid(promptGridRow);
});

function buildGrid(gridNumber) {
  // grid, number of auto styles
  let gridTemplateStyle = "auto";
  for (let h = 1; h < gridNumber; h++) {
    gridTemplateStyle = gridTemplateStyle + " auto";
  }

  // replace grid-template-columns to create user inputted grid
  let parent1 = document.querySelector(".flex-container");
  parent1.style = "grid-template-columns : " + gridTemplateStyle;

  // loop to create grid squares XxY
  for (let i = 0; i < gridNumber; i++) {
    for (let j = 0; j < gridNumber; j++) {
      let divColumn = document.createElement("div");

      // divColumn.textContent = j;
      // console.log(divColumn.innerHTML);

      // let columnName = "column" + j;
      // console.log(columnName);
      // divColumn.classList.add(columnName);

      // let rowName = "row" + i;
      // console.log(rowName);
      // divColumn.classList.add(rowName);

      // add a class=allDiv to all created divs
      divColumn.classList.add("allDiv");

      parent1.appendChild(divColumn); //added columns on screen dynamically
    }
  }

  // add class "selected" to etch-a-sketch
  const selectedDiv = document.querySelectorAll(".allDiv");

  // add eventlistener to each box on hover / mouseover - TO ETCH
  selectedDiv.forEach(div => {
    div.addEventListener("mouseover", function() {
      div.classList.add("selected");
    });
  });
}
