let result = [];

export function stringSearch(s, recipeArray) {
    result = recipeArray.filter(recipe => {
        let ingredientMatch = false;
        recipe.ingredients.forEach(i => {
            if (i.ingredient.toLowerCase().indexOf(s.toLowerCase()) !== -1) {
                ingredientMatch = true;
            }
        });
        return recipe.name.toLowerCase().indexOf(s.toLowerCase()) !== -1 || recipe.description.toLowerCase().indexOf(s.toLowerCase()) !== -1 || ingredientMatch; //TODO: RETURN BOOLEAN
    });
    console.log(result);
    return result;
}