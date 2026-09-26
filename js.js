

let mainGridContainer = document.querySelector("#main-grid-container");



function gridSize() {
    
    let size = prompt("What size Grid do you want? Numbers ovewr 100 work best!")
    return size;
};

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random 0-255
    const g = Math.floor(Math.random() * 256); // Random 0-255
    const b = Math.floor(Math.random() * 256); // Random 0-255
    return `rgb(${r}, ${g}, ${b})`;
}
function createGrid(parentContainer) {
    // Clear out any existing grid items
    parentContainer.innerHTML = "";1
    let gridS = gridSize();
    if(gridS > 10000){
        prompt("Pleasde enter an amount less than 1001");
    }
    else if(gridS <= 100){
        gridS = gridS * 10
    }
    1

    for (let i = 0; i < gridS; i++) {
        let gridSection = document.createElement("div");
        gridSection.classList.add("grid-section");
        gridSection.id = `grid-section-${i}`;

        // 1. Add event listener to each individual section
        gridSection.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = getRandomColor();
            event.target.style.color = getRandomColor();
        });

        // Optional: Reset color when the mouse leaves
        gridSection.addEventListener("mouseleave", (event) => {
            event.target.style.backgroundColor = getRandomColor();
            event.target.style.color = getRandomColor();
        });

        parentContainer.appendChild(gridSection);
    }
}
16
createGrid(mainGridContainer);

let resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', (event) =>{
    createGrid(mainGridContainer);

})

//add event listner to each individual grid section which on hover adjusts that grid sections color;