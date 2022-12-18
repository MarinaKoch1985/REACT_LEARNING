import { createStore, combineReducers } from 'redux'
import { productReduser } from './reducers/productReduser';

const rootReducer = combineReducers({
    products: productReduser
});

export const store = createStore(rootReducer);

// формируем объект store (хранилище), который обеспечивает работу всего redux