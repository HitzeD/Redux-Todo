export const ADD_ITEM = 'ADD_ITEM';

export const addItem = newItem => {
    console.log(newItem);
    return {
        type: ADD_ITEM,
        payload: newItem
    };
}