import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import  getProducts  from './product.js';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  products: getProducts
  // your reducer here
});
