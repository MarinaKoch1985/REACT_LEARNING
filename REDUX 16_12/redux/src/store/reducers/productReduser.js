const defaultState = [];

const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProduct = payload => ({ type: ADD_PRODUCT, payload })

// payload => eto:

// { 
//   title: title.value,
//   price: price.value
// }

// payload
// id

export const productReduser = (state = defaultState, action) => {
    if (action.type === ADD_PRODUCT) {
      return [...state, {
        id: Date.now(),
        ...action.payload
      }] 
    } else {
      return state
    }
}