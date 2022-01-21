export function stringSearch(s, recipeArray) {
    let array = [];
    for (let i = 0; i < recipeArray.length; i++) {
        if (recipeArray[i].name.toLowerCase().includes(s.toLowerCase()) || recipeArray[i].description.toLowerCase().includes(s.toLowerCase()) ||
            recipeArray[i].ingredients.some(ingredientObj => ingredientObj.ingredient.toLowerCase().includes(s.toLowerCase()))) {
            array.push(recipeArray[i])
        }
    }
    return array
}

// function Filter(array, callback) {
//     let arrayTemp = [];
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i])) {
//             arrayTemp.push(array[i])
//         }
//     }
//     return arrayTemp
// }

// Filter([1,2,3], (val) => val > 2)

export function filterSearch(s, recipeArray) {
    let result = recipeArray.filter(recipe => {
        let ingredientMatch = false;
        recipe.ingredients.forEach(i => {
            if (i.ingredient.toLowerCase().indexOf(s.toLowerCase()) !== -1) {
                ingredientMatch = true;
            }
        });
        let lowerCaseUstensils = recipe.ustensils.map(u => u.toLowerCase());
        return lowerCaseUstensils.indexOf(s.toLowerCase()) !== -1 || recipe.appliance.toLowerCase() == s.toLowerCase() || ingredientMatch;
    })
    return result;
}