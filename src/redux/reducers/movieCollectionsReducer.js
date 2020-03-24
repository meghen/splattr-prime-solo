const collections = (state = [], action) => {
    if (action.type === 'SET_COLLECTION'){
        return action.payload;
        // return ['this is sample data']
    }
    return state;
}
export default collections;