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
        element.querySelector(".dropdown").style.height = "400px";
        element.querySelector(".dropdown").style.height = "auto"; //400px
    } else {
        element.querySelector(".fa-chevron-down").style.transform = "rotate(0deg)";
        rotated = false;
        element.querySelector(".dropdown").style.display = "none";
        element.style.height = "50px";
    }
}
//FILTER EVENT BINDING
appareil.addEventListener("click", () => { filterDrop(appareil) });
ingredient.addEventListener("click", () => { filterDrop(ingredient) });
ustensiles.addEventListener("click", () => { filterDrop(ustensiles) });

let ingredientData = [];
let appareilData = [];
let ustensilData = [];

//FILTER DATA HANDLING
export function populateFilter(recipeList, ingredientFilter, appareilFilter, ustensilesFilter) {

    ingredientFilter.innerHTML = "";
    appareilFilter.innerHTML = "";
    ustensilesFilter.innerHTML = "";


    for (let recipe of recipeList) {

        for (let i of recipe.ingredients) {

            //ingredientData.push(i.ingredient);
            noDuplicate(ingredientData, i.ingredient);
        }
        //appareilData.push(recipe.appliance);
        noDuplicate(appareilData, recipe.appliance);
        for (let ustensil of recipe.ustensils) {
            //ustensilData.push(ustensil);
            noDuplicate(ustensilData, ustensil);
        }
    }
    generateFilterHtml(ingredientData, ingredientFilter);
    generateFilterHtml(appareilData, appareilFilter);
    generateFilterHtml(ustensilData, ustensilesFilter);
}

function generateFilterHtml(array, element) {
    let htmlText = "";
    for (let item of array) {
        htmlText += `<p class="dropdown__item">${item}</p>`;
    }
    element.innerHTML = htmlText;
}

function noDuplicate(array, item) {

    if (array.indexOf(item) === -1) {
        array.push(item);
    }
    return;
}

const ingredientInput = document.querySelector("#ingredientInput");
const appareilInput = document.querySelector("#appareilInput");
const ustensilInput = document.querySelector("#ustensilInput");

//TODO ADD CASE HANDLING
ingredientInput.addEventListener("change", e => {

    let filtered = ingredientData.filter(i => i.includes(e.target.value));
    generateFilterHtml(filtered, document.querySelector("#dropdownBlue"));
})
appareilInput.addEventListener("change", e => {

    let filtered = appareilData.filter(i => i.includes(e.target.value));
    generateFilterHtml(filtered, document.querySelector("#dropdownGreen"));
})
ustensilInput.addEventListener("change", e => {

    let filtered = ustensilData.filter(i => i.includes(e.target.value));
    generateFilterHtml(filtered, document.querySelector("#dropdownOrange"));
})