import React from "react";
import "./styles/Dashboard.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import CancelMessage from "./CancelMessage";
import LinearProgress from "@mui/material/LinearProgress";
import { setDisplayCancelMessage } from "../actions/updateCancelMessageFunction";

const LoadCancel = () => {
  const [isCancelLoading, setIsCancelLoading] = useState(false);
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
    <div>
      {isCancelLoading ? (
        <div className="loading">
          <Box
            sx={{
              width: 400,
              color: "black",
            }}
          >
            <LinearProgress className="loadingLine" color="inherit" />
          </Box>
        </div>
      ) : (
        <CancelMessage />
      )}
    </div>
  );
};

export default LoadCancel;
