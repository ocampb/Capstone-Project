export const NewCancelMessageState = async (dispatch, message) => {
  const cancel_message = message;
  const data = {
    cancel_message: cancel_message,
    updatedAt: new Date(),
  };
  const dataWeAreSending = await fetch("/api/dashboard/updatecancel", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const status = dataWeAreSending.status;
  if (status === 400) {
    alert("Message cannot be added at this time, please try again");
  } else {
    const result = await fetch("/api/dashboard/getcancel", {
      method: "GET",
    });
    const message = await result.json();
    if (result.status === 200) {
      setDisplayCancelMessage(dispatch, message.cancel_message);
    }
  }
};
export const setCancelMessage = (dispatch, text) => {
  dispatch({ type: "SET_CANCEL_MESSAGE", payload: text });
};

export const setDisplayCancelMessage = (dispatch, text) => {
  dispatch({ type: "SET_DISPLAY_CANCEL_MESSAGE", payload: text });
};
