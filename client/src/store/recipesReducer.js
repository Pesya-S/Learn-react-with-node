import recipeService from "../services/recipeService";


export const type = {
    get: 'getRecipe', post: 'postRecipe', fill: 'fillRecipe'
};


const initilize = [];

export const recipes = (state = initilize, action) => {
    switch (action.type) {
        case type.get: return state;
        case type.post: return [...state, action.payload];
        case type.fill: return action.payload;
        default: return state;
    }
}


// actions
export const recipeAction_post = (recipe) => {
    return async (dispatch) => {
        let result = await recipeService.post(recipe);
        recipe.id = result.insertId;
        dispatch({ type: type.post, payload: recipe })
    }
}

export const recipeAction_get = (list) => {
    return async (dispatch) => {
        if (list && list.length > 0)
            return type.get
        if (list === undefined || list.length === 0) {
            let result = await recipeService.get();
            dispatch({ type: type.fill, payload: result });
        }
    }
}


