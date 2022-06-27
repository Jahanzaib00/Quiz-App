const Reducer = (state, action) => {
  if (action.type === "HANDLE_SUBMIT") {
    return {
      ...state,
      category: action.payload.categoryRef.current.value,
      difficulty: action.payload.difficultyRef.current.value,
      type: action.payload.typeRef.current.value,
    };
  } else if (action.type === "SCORE") {
    console.log(action.payload);
    return {
      ...state,
      score: state.score + action.payload,
    };
  } else if (action.type === "RESET") {
    return {
      ...state,
      score: 0,
    };
  }
};
export default Reducer;
