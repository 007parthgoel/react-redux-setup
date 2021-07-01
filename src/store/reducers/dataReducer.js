const initalState = {
  loading: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "LOADING_DATA":
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};

export default reducer;
