import { ADD_ITEM, COMPLETE_ME } from '../actions';

const initialState = {
    todo: [
        {task: 'Add an Item', completed: false, id: 45928}
    ],
}


export function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                todo: [
                    ...state.todo,
                    {task: action.payload, completed: false, id: Date.now()}
                ]
            }
        case COMPLETE_ME:
            return {
                ...state,
                todo: state.todo.map(item => {
                    if(item.id === action.payload) {
                        console.log(state)
                        return {
                        ...state,
                        completed: !item.completed
                        }
                    }
                    return item;
                })
          }
        default:
            return state;
    }
}