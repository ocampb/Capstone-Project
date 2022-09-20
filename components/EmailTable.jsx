import React from "react";
import "./styles/Dashboard.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { deleteEmail, setApprovedList } from "../actions/addNewEmailFunctions";
import FirstEmail from "./FirstEmail";
import TableList from "./TableList";

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

  const dispatch = useDispatch();

  const getList = async () => {
    const result = await fetch("/api/dashboard/list", {
      method: "GET",
    });
    const data = await result.json();
    if (result.status === 200) {
      setApprovedList(dispatch, data);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  return <div>{list.length ? <TableList /> : <FirstEmail />}</div>;
};

export default EmailTable;
