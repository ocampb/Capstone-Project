const initialState = {
  cancel_message_control: "",
  CancelMessage: "",
};

const cancelMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CANCEL_MESSAGE":
      return { ...state, cancel_message_control: action?.payload };
    case "SET_DISPLAY_CANCEL_MESSAGE":
      return { ...state, CancelMessage: action?.payload };
    default:
      return state;
  }
};

export default cancelMessageReducer;
