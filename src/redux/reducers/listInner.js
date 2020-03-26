const listInner = (state = [], action) => {
    if (action.type === 'SET_LIST_INNER'){
        return action.payload;
    }
    return state;
}
export default listInner;