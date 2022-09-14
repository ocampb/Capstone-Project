export const NewApprovedState = async (dispatch, approved) => {
  const Email = approved.Email;
  const Name = approved.Name;
  const Notes = approved.Notes;
  const data = {
    Email: Email,
    Name: Name,
    Notes: Notes,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const dataWeAreSending = await fetch("/api/dashboard/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const status = dataWeAreSending.status;
  if (status === 200) {
    alert("Email Added"); //this is where we would re-render, will add when everything is connected
  }
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
