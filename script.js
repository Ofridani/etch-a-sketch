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

const clearGrid = () => {
    container.replaceChildren();
} 

const changeGridEvent = () => {
    let sl;
    do
    {
        sl = parseInt(prompt("Enter grid side length (1-100):"));
    } while(!sl || sl > 100 || sl < 0); // Run as long as sl is not NaN and sl is between 1 and 100
    clearGrid();
    createGrid(sl);
}

createGrid(16);

const btn = document.querySelector("button");
btn.addEventListener("click", changeGridEvent);




