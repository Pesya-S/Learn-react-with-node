import productService from "../services/productService";


export const type = {
    get: 'getProduct', post: 'postProduct', fill: 'fillProduct'
};


const initilize = [];

export const products = (state = initilize, action) => {
    switch (action.type) {
        case type.get: return state;
        case type.post: return [...state, action.payload];
        case type.fill: return action.payload;
        default: return state;
    }
}


// actions
export const productAction_post = (product) => {
    return async (dispatch) => {
        let result = await productService.post(product);
        product.id = result.insertId;
        dispatch({ type: type.post, payload: product })
    }
}

export const productAction_get = (list,userId) => {
    return async (dispatch) => {
        if (list && list.length > 0)
            return type.get
        if (list === undefined || list.length === 0) {
            let result = await productService.getByUser(userId);
            dispatch({ type: type.fill, payload: result });
        }
    }
}


