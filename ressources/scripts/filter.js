import { ingredientFilter, applianceFilter, ustensilsFilter } from "../scripts/homepage.js";

export function getIngredients(recipeList) {
    let tempIng = [];
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

    let tempApp = [];
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
    let tempUst = [];
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