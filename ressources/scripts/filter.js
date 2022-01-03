import { ingredientFilter, applianceFilter, ustensilsFilter, ingHandler, appHandler, ustHandler } from "../scripts/homepage.js";
import { filterWidth } from "../scripts/dropdown.js"

let tempIng = [];
let tempApp = [];
let tempUst = [];


export function getIngredients(recipeList) {
    for (let recipe of recipeList) {
        for (let i of recipe.ingredients) {
            noDuplicate(tempIng, i.ingredient);
        }
    }
    return tempIng.sort();
}


export function renderIngredients(ingredientList) {
    ingredientFilter.innerHTML = "";
    ingredientList.forEach(item => ingredientFilter.innerHTML += `<p class="dropdown__item">${item}</p>`)
}

export function getAppliance(recipeList) {
    for (let recipe of recipeList) {
        noDuplicate(tempApp, recipe.appliance);
    }
    return tempApp.sort();
}


export function renderAppliance(applianceList) {
    applianceFilter.innerHTML = "";
    applianceList.forEach(item => applianceFilter.innerHTML += `<p class="dropdown__item">${item}</p>`)
}

export function getUstensils(recipeList) {
    for (let recipe of recipeList) {
        for (let ustensil of recipe.ustensils) {
            noDuplicate(tempUst, ustensil);
        }
    }
    return tempUst.sort();
}

export function renderUstensils(ustensilsList) {
    ustensilsFilter.innerHTML = "";
    ustensilsList.forEach(item => ustensilsFilter.innerHTML += `<p class="dropdown__item">${item}</p>`)
}

function noDuplicate(array, item) {
    if (array.indexOf(item) === -1) {
        array.push(item);
    }
    return;
}

const ingredientInput = document.querySelector("#ingredientInput");
const applianceInput = document.querySelector("#appareilInput");
const ustensilInput = document.querySelector("#ustensilInput");


ingredientInput.addEventListener("keyup", e => {
    let filtered = tempIng.filter(i => i.toLowerCase().includes(e.target.value.toLowerCase()));
    renderIngredients(filtered)
    ingHandler()
    filterWidth(e.target.closest(".filter"));

})
applianceInput.addEventListener("keyup", e => {
    let filtered = tempApp.filter(i => i.toLowerCase().includes(e.target.value.toLowerCase()));
    renderAppliance(filtered);
    appHandler()
    filterWidth(e.target.closest(".filter"));

})
ustensilInput.addEventListener("keyup", e => {

    let filtered = tempUst.filter(i => i.toLowerCase().includes(e.target.value.toLowerCase()));
    renderUstensils(filtered);
    ustHandler()
    filterWidth(e.target.closest(".filter"));

})