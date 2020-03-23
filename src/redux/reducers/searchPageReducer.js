const searchResults = (state = [], action) => {
    if (action.type === 'GET_SEARCH_RESULTS'){
        return action.payload;
    }
    return state;
}

export default searchResults;