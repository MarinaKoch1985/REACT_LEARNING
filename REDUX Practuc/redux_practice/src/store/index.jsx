import { createStore, combineReducers } from 'redux'
import { userReduser } from './redusers/userReduser';
import { postReduser } from './redusers/postReducer';


const rootReducer = combineReducers({
    users: userReduser,
    posts: postReduser
});

export const store = createStore(rootReducer);