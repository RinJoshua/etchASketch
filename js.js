/* To do 
Create a webpage with a 16x16 grid of square divs.
Create the divs using JavaScript. Don’t try to create them by hand by copying and pasting them in your HTML file!
It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.
Use Flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research or use CSS Grid, as it will be taught in a later lesson after the foundations path. This project is an opportunity specifically to practice Flexbox!
Be careful with borders and margins, as they can adjust the size of the squares!
“OMG, why isn’t my grid being created???”
Did you link your CSS stylesheet?
Open your browser’s developer tools.
Check if there are any errors in the JavaScript console.
Check your “elements” panel to see if the elements have actually shown up but are somehow hidden.
Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded. */

let mainGridContainer = document.querySelector("#main-grid-container");


// Create a grid section with a specific ID that CSS will target with flexBox- 

// iterate 16 grid sections and append them to the parent div



function createGrid(parentContainer) {
    for (let i = 0; i < 16; i++) {
        let gridSection = document.createElement("div");
        gridSection.classList.add("grid-section");
        gridSection.id = `grid-section-${i}`;
        
        // Set text directly upon creation
        gridSection.textContent = "Hello world";

        parentContainer.appendChild(gridSection);
    }
}

createGrid(mainGridContainer);
