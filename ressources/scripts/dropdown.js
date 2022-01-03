const ingredient = document.querySelector("#Ingredients");
const appareil = document.querySelector("#Appareil");
const ustensiles = document.querySelector("#Ustensils");


//FILTER UI HANDLING
let rotated = false;

function filterDrop(element) {
    if (!rotated) {
        element.querySelector(".fa-chevron-down").style.transform = "rotate(180deg)";
        rotated = true;
        element.style.height = "auto";
        element.querySelector(".dropdown").style.display = "flex";
        element.querySelector(".dropdown").style.height = "auto"; //400px
        filterWidth(element);
    } else {
        element.querySelector(".fa-chevron-down").style.transform = "rotate(0deg)";
        rotated = false;
        element.querySelector(".dropdown").style.display = "none";
        element.style.height = "50px";
    }
}

export function filterWidth(element) {
    let divWidth = Math.ceil(element.querySelector(".dropdown").childElementCount / 16) * 130 + 10;
    if (divWidth > document.querySelector(".filter").offsetWidth) {
        element.querySelector(".dropdown").style.width = divWidth.toString() + "px";
    } else { element.querySelector(".dropdown").style.width = "100%"; }
}

//FILTER EVENT BINDING
appareil.addEventListener("click", () => { filterDrop(appareil) });
ingredient.addEventListener("click", () => { filterDrop(ingredient) });
ustensiles.addEventListener("click", () => { filterDrop(ustensiles) });