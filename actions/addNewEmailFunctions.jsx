export const NewApprovedState = (dispatch, approved) => {
  dispatch({ type: "SET_APPROVED", payload: approved });
};

export const setApprovedEmail = (dispatch, text) => {
  dispatch({ type: "SET_APPROVED_EMAIL", payload: text });
};

export const setApprovedName = (dispatch, text) => {
  dispatch({ type: "SET_APPROVED_NAME", payload: text });
};

export const setApprovedNotes = (dispatch, text) => {
  dispatch({ type: "SET_APPROVED_NOTES", payload: text });
};
