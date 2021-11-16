import { recipes } from "../data/recipes.js";
import { stringSearch } from "../scripts/search.js"
import { populateFilter } from "./filter.js";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".searchbar__input");
const ingredientFilter = document.querySelector("#dropdownBlue");
const ustensilesFilter = document.querySelector("#dropdownOrange");
const appareilFilter = document.querySelector("#dropdownGreen");

let allRecipes = recipes;
let filteredRecipes = [];

renderRecipe(allRecipes);
populateFilter(allRecipes, ingredientFilter, appareilFilter, ustensilesFilter);

//SEARCH EVENT HANDLING
searchInput.addEventListener("input", (event) => {

    if (event.target.value.length >= 3) {
        console.log(event.target.value);
        filteredRecipes = stringSearch(event.target.value, allRecipes);
        renderRecipe(filteredRecipes);
        populateFilter(filteredRecipes, ingredientFilter, appareilFilter, ustensilesFilter);
    } else {
        renderRecipe(allRecipes);
        populateFilter(filteredRecipes, ingredientFilter, appareilFilter, ustensilesFilter);
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