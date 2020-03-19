const getNotes = (state = '', action) => {
    switch (action.type) {
      case 'GET_NOTES':
        return action.payload;
      default:
        return state;
    }
  };

// getNotes will be on the redux state at:
// state.getNotes
  export default getNotes;
