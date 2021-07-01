export const buttonClicked = () => (dispatch) => {
  console.log("button action clicked");
  dispatch({ type: "LOADING_DATA" });
};
