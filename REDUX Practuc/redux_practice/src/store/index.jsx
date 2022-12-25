import { createStore, combineReducers } from 'redux'
import { userReduser } from './userReduser';


const rootReducer = combineReducers({
    users: userReduser
});

export const store = createStore(rootReducer);