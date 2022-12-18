import { createStore, combineReducers } from 'redux'
import { productReduser } from './reducers/productReduser';
import { languageCardReducer } from './reducers/languageCardReducer'

const rootReducer = combineReducers({
    products: productReduser,
    languageCards: languageCardReducer
});

export const store = createStore(rootReducer);

// формируем объект store (хранилище), который обеспечивает работу всего redux