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
}

createGrid(16);

