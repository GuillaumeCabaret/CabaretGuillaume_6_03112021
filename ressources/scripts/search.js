export function stringSearch(s, recipeArray) {
    return recipeArray.filter((obj) => {
        let is;
        obj.ingredients.forEach(i => is += i.ingredient);
        let data = obj.name + obj.description + is;
        return data.toLowerCase().indexOf(s.toLowerCase()) !== -1;
    });
}
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