const mainFormReducer = (state = [], action) => {
  switch (action.type) {
    case "CHANGE_DEPARTURE_CITY":
      return state.concat([action.data]);
    default:
      return state;
  }
};

export default mainFormReducer;
