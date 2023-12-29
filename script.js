const titleContainer = document.querySelector(".titleContainer");
const containerGrid = document.querySelector(".container");
const title = document.querySelector("#title");
const btnStart = document.querySelector(".btnStart");
btnStart.addEventListener("click", setStartSize);

function setStartSize(params) {
  const size = prompt("Inserisci la grandezza della griglia");
  if (size<=20 && size>=1) {
    createGrid(size);
    btnStart.style.display = "none";
    const btnSetNewSize = document.createElement("button", "setNewSize");
    btnSetNewSize.textContent = "Set new size!";
    titleContainer.appendChild(btnSetNewSize);
    btnSetNewSize.addEventListener("click", setNewSize);
    titleContainer.style.display = "flex";
    titleContainer.style.justifyContent = "center";
    title.style.paddingRight = "10px";
    btnStart.style.alignSelf = "center";
    containerGrid.style.display = "inline";
  } else {
    alert("Inserisci un numero compreso tra 1 e 20");
  }

}

function setNewSize(params) {
  const newSize = prompt("Inserisci la grandezza della griglia");
  if (newSize<=20 && newSize>=1) {
    createGrid(newSize);
  } else {
    alert("Inserisci un numero compreso tra 1 e 20");
  }
}

function createGrid(size) {
  const container = document.querySelector(".container");
  container.innerHTML = ''; // Pulisce il contenitore esistente prima di creare una nuova griglia

  for (let row = 0; row < size; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let col = 0; col < size; col++) {
      const square = document.createElement("div");
      square.classList.add("square");
      rowDiv.appendChild(square);
    }
    container.appendChild(rowDiv);
  }

  const squareGrid = document.querySelectorAll(".square");

  squareGrid.forEach(square => {
    square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
    })
  });

  squareGrid.forEach(square => {
    square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "white";
    })
  });


}





