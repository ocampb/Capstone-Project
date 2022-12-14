import React from "react";
import "./styles/Dashboard.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCancelMessage,
  setDisplayCancelMessage,
  NewCancelMessageState,
} from "../actions/updateCancelMessageFunction";

const CancelMessage = () => {
  const [isCancelLoading, setIsCancelLoading] = useState(false);
  const displayMessage = useSelector(
    (state) => state.cancelMessageReducer.CancelMessage
  );
  const controlledMessage = useSelector(
    (state) => state.cancelMessageReducer.cancel_message_control
  );
  const dispatch = useDispatch();

  const getMessage = async () => {
    setIsCancelLoading((prev) => true);
    const result = await fetch("/api/dashboard/getcancel", {
      method: "GET",
    });
    const data = await result.json();
    if (result.status === 200) {
      setDisplayCancelMessage(dispatch, data.cancel_message);
      setIsCancelLoading((prev) => false);
    }
  };
  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div className="cancel-message">
      <p>
        <strong>Current Message: </strong>
        {displayMessage}
      </p>
      <textarea
        onChange={(e) => setCancelMessage(dispatch, e.target.value)}
        name="cancel-message-textarea"
        id="cancel-box"
        placeholder="Update your custom message here"
        cols="71"
        rows="7"
      ></textarea>
      <input
        type="submit"
        id="button-modal"
        value="Submit"
        onClick={() => {
          NewCancelMessageState(dispatch, controlledMessage);
        }}
      />
    </div>
  );
};

export default CancelMessage;
