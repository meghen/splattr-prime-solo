const collections = (state = [], action) => {
    if (action.type === 'SET_COLLECTION'){
        return action.payload;
    }
    return state;
}
export default collections;