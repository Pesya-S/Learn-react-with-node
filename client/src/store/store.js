import { combineReducers, applyMiddleware, createStore } from 'redux';//, compose
import thunk from 'redux-thunk';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import {user} from "./user/userReducer";
import { recipes } from './recipesReducer';
import { products } from './productsReducer';

const appReducer = combineReducers(
  {
    user,recipes,products
  }
);
const rootReducer = (state, action) => {
//   if (action.type === 'user_logout')
//     return appReducer(undefined, action);
  return appReducer(state, action);
}



//const store=createStore(appReducer, applyMiddleware(thunk));
const store = createStore(rootReducer, applyMiddleware(thunk));//2021.12.08
window.store = store;
export default store;