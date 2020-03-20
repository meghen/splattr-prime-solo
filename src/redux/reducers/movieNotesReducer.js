const gotNotes = (state = '', action) => {
    switch (action.type) {
      case 'GET_NOTES':
        return 'hi this is test data';
      default:
        return state;
    }
  };

// getNotes will be on the redux state at:
// state.getNotes
  export default gotNotes;
