import { ADD_ITEM } from '../actions';

const initialState = {
    todo: [],
}


export function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        default:
            return state;
    }
}