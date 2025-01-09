const container = document.querySelector(".gridContainer");
for (let i = 0; i < 16*16; i++){
    const gridSquare = document.createElement("div");
    gridSquare.className = "gridSquare";
    gridSquare.style.border = "2px solid black";
    gridSquare.style.height = `${100/16}%`;
    gridSquare.style.width = `${100/16}%`;
    container.appendChild(gridSquare);
}