import { recipes } from "../data/recipes.js";
import { filterSearch, stringSearch } from "../scripts/search.js";
import { getIngredients, renderIngredients, getAppliance, renderAppliance, getUstensils, renderUstensils } from "../scripts/filter.js";

export const ingredientFilter = document.querySelector("#dropdownBlue");
export const applianceFilter = document.querySelector("#dropdownGreen");
export const ustensilsFilter = document.querySelector("#dropdownOrange");

const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".searchbar__input");

let allRecipes = recipes;
let searchedRecipes = [...recipes];
let ingredientList = [];
let applianceList = [];
let ustensilsList = [];
let filteredRecipes = [...recipes];

renderRecipe(allRecipes);
renderIngredients(getIngredients(searchedRecipes));
renderAppliance(getAppliance(searchedRecipes));
renderUstensils(getUstensils(searchedRecipes));
ingHandler();
appHandler();
ustHandler();


export function ingHandler() {
    const domElementIng = [...ingredientFilter.querySelectorAll(".dropdown__item")];
    domElementIng.forEach(domIng => {
        domIng.addEventListener("click", (e) => {
            ingredientToBadge(e.target.textContent)
            domIng.removeEventListener("click", (e))
        })
    })
}

export function appHandler() {
    const domElementApp = [...applianceFilter.querySelectorAll(".dropdown__item")];
    domElementApp.forEach(domApp => {
        domApp.addEventListener("click", (e) => {
            apparelToBadge(e.target.textContent)
        })
    })
}

export function ustHandler() {
    const domElementUst = [...ustensilsFilter.querySelectorAll(".dropdown__item")];
    domElementUst.forEach(domUst => {
        domUst.addEventListener("click", (e) => {
            ustensilsToBadge(e.target.textContent)
        })
    })
}

//SEARCH EVENT HANDLING
searchInput.addEventListener("input", (event) => {
    if (event.target.value.length >= 3) {
        searchedRecipes = stringSearch(event.target.value, allRecipes);
        // let filteredRecipe = applyFilter(searchedRecipes);+-
        /////////////////////////////////////
        renderRecipe(searchedRecipes);
        ingredientList = getIngredients(searchedRecipes);
        applianceList = getAppliance(searchedRecipes);
        ustensilsList = getUstensils(searchedRecipes);
        renderIngredients(ingredientList);
        ingHandler()
        renderAppliance(applianceList);
        appHandler()
        renderUstensils(ustensilsList);
        ustHandler()
    } else {
        searchedRecipes = allRecipes;
        renderRecipe(allRecipes);
        ingredientList = getIngredients(searchedRecipes);
        applianceList = getAppliance(searchedRecipes);
        ustensilsList = getUstensils(searchedRecipes);
        renderIngredients(ingredientList);
        ingHandler()
        renderAppliance(applianceList)
        appHandler()
        renderUstensils(ustensilsList);
        ustHandler()
    }
})


//RENDER RECIPE CARD
function renderRecipe(listRecette) {

    gallery.innerHTML = "";

    if (listRecette.length != 0) {
        for (let recette of listRecette) {
            let ingredients = "";
            for (let i of recette.ingredients) {
                let content = `<p>${i.ingredient}: `;
                if (i.quantity != undefined) { content += i.quantity }
                if (i.unit != undefined) { content += " " + i.unit }
                content += "</p>";
                ingredients += content;
            }
            gallery.insertAdjacentHTML("beforeend", `
            <div class="card">
                <div class="card__img" ></div>
                <div class="card__title">
                    <h6 class="card__title__text">${recette.name}</h6><i class="far fa-clock card__title__icon"></i><p>${recette.time} min</p>
                </div>            
                <div class="card__list">
                    ${ingredients}
                </div>
                <p class="card__desc">${recette.description}</p>
            </div>`)
        }
    } else {
        gallery.insertAdjacentHTML("beforeend", "<p>Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>");
    }
}

function ingredientToBadge(val) {
    let element = document.getElementById("dropdownBlue").firstChild
    let color;
    color = element.closest(".filter").className.split("--")[1];
    document.querySelector(".badgeContainer").insertAdjacentHTML("beforeend", `<span class="badge tag tag--${color}"><p class="badge__text">${val}</p><i class="far fa-times-circle badgeButton"></i></span>`);
    secondaryFilter()
    const IngredientscrossBadge = [...document.querySelectorAll(".badgeButton")];
    IngredientscrossBadge.forEach(cross => {
        cross.addEventListener("click", (e) => {
            const parentElement = e.target.parentNode;
            deleteBadge(parentElement)
        })
    })
}

function apparelToBadge(val) {
    let element = document.getElementById("dropdownGreen").firstChild;
    let color;
    color = element.closest(".filter").className.split("--")[1];
    document.querySelector(".badgeContainer").insertAdjacentHTML("beforeend", `<span class="badge tag tag--${color}"><p class="badge__text">${val}</p><i class="far fa-times-circle badgeButton"></i></span>`);
    secondaryFilter()
    const apparelcrossBadge = [...document.querySelectorAll(".badgeButton")];
    apparelcrossBadge.forEach(cross => {
        cross.addEventListener("click", (e) => {
            const parentElement = e.target.parentNode;
            deleteBadge(parentElement)
        })
    })
}

function ustensilsToBadge(val) {
    let element = document.getElementById("dropdownOrange").firstChild
    let color;
    color = element.closest(".filter").className.split("--")[1];
    document.querySelector(".badgeContainer").insertAdjacentHTML("beforeend", `<span class="badge tag tag--${color}"><p class="badge__text">${val}</p><i class="far fa-times-circle badgeButton"></i></span>`);
    secondaryFilter()
    const UstensilscrossBadge = [...document.querySelectorAll(".badgeButton")];
    UstensilscrossBadge.forEach(cross => {
        cross.addEventListener("click", (e) => {
            const parentElement = e.target.parentNode;
            deleteBadge(parentElement)
        })
    })
}

function secondaryFilter() {
    //////////////////////////////
    const badges = [...document.querySelectorAll(".badge__text")]
    filteredRecipes = [...searchedRecipes]
    badges.forEach(badge => {
            filteredRecipes = filterSearch(badge.textContent.toLowerCase(), filteredRecipes)
        })
        ///////////////////////////////
    renderRecipe(filteredRecipes);
    ingredientList = getIngredients(filteredRecipes);
    applianceList = getAppliance(filteredRecipes);
    ustensilsList = getUstensils(filteredRecipes);
    renderIngredients(ingredientList);
    ingHandler()
    renderAppliance(applianceList)
    appHandler()
    renderUstensils(ustensilsList);
    ustHandler()
}

function deleteBadge(badgeElem) {
    badgeElem.remove()
    secondaryFilter()
}