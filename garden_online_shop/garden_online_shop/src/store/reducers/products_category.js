const defaultState = [];
let first_state = [];

const LOAD_PRODUCTS_CATEGORY = 'LOAD_PRODUCTS_CATEGORY';
const SORT_PRODUCTS_CATEGORY = 'SORT_PRODUCTS_CATEGORY';
const SEARCH_PRODUCTS_CATEGORY_PRICE = 'SEARCH_PRODUCTS_CATEGORY_PRICE';


export const loadProductsCategory = payload => ({
    type: LOAD_PRODUCTS_CATEGORY, payload});

export const sortProductsCategory = payload => ({
    type: SORT_PRODUCTS_CATEGORY, payload});  
    
export const searchProductsCategoryPrice = payload => ({
    type: SEARCH_PRODUCTS_CATEGORY_PRICE, payload});      

export const productsCategoryReducer = (state = defaultState, action) => {
    if (action.type === LOAD_PRODUCTS_CATEGORY){
        first_state = action.payload
        return first_state
    } else if (action.payload === SORT_PRODUCTS_CATEGORY) {
        if (action.payload === 'default'){
        return first_state 
    } else if (typeof state[0][action.payload] === 'string') {
        return [...state]
                .sort((a, b) => a[action.payload]
                .localeCompare(b[action.payload]))
    } else {
        return [...state].sort((a, b) => a[action.payload] - b[action.payload])
    }
} else if (action.type === SEARCH_PRODUCTS_CATEGORY_PRICE){
        const { min_value, max_value } = action.payload;
            return state.map(el => {
                if (el.price >= min_value && el.price <= max_value) {
                    el.hide = false
                } else {
                    el.hide = true
                }
                return el
            })
        }  else {
            return state
        }
    }  
    
        

   


