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
  if (status === 400) {
    alert("Email cannot be added at this time, please try again"); //this is where we would re-render, will add when everything is connected
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

export const setApprovedList = async (dispatch, data) => {
  dispatch({ type: "SET_EMAIL_LIST", payload: data });
};

export const deleteEmail = async (dispatch, id) => {
  const dataWeAreSending = await fetch(`/api/dashboard/emaildelete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const status = dataWeAreSending.status;
  if (status === 400) {
    alert("Email cannot be deleted at this time, please try again"); //this is where we would re-render, will add when everything is connected
  }
};
