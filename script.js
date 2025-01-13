const container = document.querySelector(".gridContainer");

const onmouseover = (event) => {
    if (!event.target.classList.contains("hovered")){
        event.target.classList.add("hovered")
    }
}

const createGrid = function(sideLength){
    for (let i = 0; i < sideLength*sideLength; i++){
        const gridSquare = document.createElement("div");
        gridSquare.className = "gridSquare";
        gridSquare.style.border = "1px solid black";
        gridSquare.style.height = `${100/sideLength}%`;
        gridSquare.style.width = `${100/sideLength}%`;
        container.appendChild(gridSquare);
    }
    container.addEventListener("mouseover", onmouseover);
}

createGrid(16)

