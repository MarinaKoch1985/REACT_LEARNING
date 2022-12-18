const defaultState = [];

const ADD_CARD = 'ADD_CARD';
const DELETE_CARD = 'DELETE_CARD';
const CHANGE_SITE = 'CHANGE_SITE'


export const addCard = payload => ({ type: ADD_CARD, payload })
export const deleteCard = payload => ({ type: DELETE_CARD, payload })
export const changeSite = payload => ({ type: CHANGE_SITE, payload })


export const languageCardReducer = (state = defaultState, action) => {
    if (action.type === ADD_CARD) {
        return [...state, {
            id: Date.now(),
            lang: 'eng', 
            ...action.payload
        }]

    } else if (action.type === DELETE_CARD) {
        return state.filter(el => el.id !== action.payload)

    } else if (action.type === CHANGE_SITE) {
        return state.map(el => {
            if(el.id !== action.payload) {
            el.lang = el.lang === 'eng' ? 'rus' : 'eng'
        }

    })
    } else {
        return state
    }
}