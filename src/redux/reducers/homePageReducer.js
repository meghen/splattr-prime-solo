const homepage = (state = [], action) => {
    switch (action.type) {
      case 'GET_MOVIES':
        return action.payload;
      default:
        return state;
    }
  };

// homepage will be on the redux state at:
// state.homepage
  export default homepage;
  