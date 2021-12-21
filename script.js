const defaultSize = 16;
const container = document.querySelector(".container")
const resetButton = document.querySelector(".reset-btn");
const normalModeButton = document.querySelector(".normal-mode");
const colorfulModeButton = document.querySelector(".colorful-mode");

let mode = 'normal-mode';

createGrid(defaultSize);
drawSketch();
listen();

function listen() {
    listenReset();
    listenMode();
}

function listenReset() {
    resetButton.addEventListener("click", () => {
        createGrid(getSize());
        drawSketch();
    });    
}

function listenMode() {
    normalModeButton.addEventListener("click", () => {
        mode = 'normal-mode';
    });
    colorfulModeButton.addEventListener("click", () => {
        mode = 'colorful-mode';
    });
}

function createGrid(size) { 
    resetGrid();
    container.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`; 

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.style.backgroundColor = 'white';
        div.classList.toggle("grid");
        container.appendChild(div);
    }
}

function drawSketch() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            if (mode === 'normal-mode') {
                grid.style.backgroundColor = 'black';
            } else if (mode === 'colorful-mode' && (grid.style.backgroundColor === 'white' || grid.style.backgroundColor === 'black')) {
                grid.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            }
        });
    });

}
function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function getSize() {
    let size = prompt("How many squares per side?");
    if (size > 100) {
        getSize();
    } else {
        return size;
    } 
}

// function getHSLValues(hsl) {
//     console.log(hsl);
//     const colorArray = hsl.split(',');
//     for (let i = 0; i < 3; i++) {
//         colorArray[i] = colorArray[i].trim();
//     }
//     colorArray[0] = colorArray[0].substr(4);
//     colorArray[1] = colorArray[1].slice(0, -1);
//     colorArray[2] = colorArray[2].slice(0, -1);
//     console.log(colorArray);
//     return colorArray;
// }

