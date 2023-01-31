import { createStore, combineReducers } from 'redux'
import { productReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

export const store = createStore(rootReducer);
