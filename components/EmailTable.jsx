import React from "react";
import "./styles/Dashboard.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { setApprovedList } from "../actions/addNewEmailFunctions";
import FirstEmail from "./FirstEmail";
import TableList from "./TableList";
import LinearProgress from "@mui/material/LinearProgress";

// Styling for MUI modal window
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const EmailTable = () => {
  const list = useSelector((state) => state.approveEmailReducer.listOfApproved);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const getList = async () => {
    setIsLoading((prev) => true);
    const result = await fetch("/api/dashboard/list", {
      method: "GET",
    });
    const data = await result.json();
    if (result.status === 200) {
      setApprovedList(dispatch, data);
      setIsLoading((prev) => false);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      {isLoading ? (
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
      ) : list.length ? (
        <TableList />
      ) : (
        <FirstEmail />
      )}
    </div>
  );
};

export default EmailTable;
