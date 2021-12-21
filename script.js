const SIZE = 16;
const container = document.querySelector(".container");

for (let i = 0; i < SIZE * SIZE; i++) {
    const div = document.createElement("div");
    div.textContent = '0';
    div.classList.toggle("grid");
    container.appendChild(div);
}

const grids = document.querySelectorAll(".grid");
grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = 'yellow';
    });
});
