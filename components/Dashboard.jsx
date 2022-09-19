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
import EmailTable from "./EmailTable";
import CancelMessage from "./CancelMessage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {
  NewApprovedState,
  setApprovedEmail,
  setApprovedName,
  setApprovedNotes,
  setApprovedList,
} from "../actions/addNewEmailFunctions";

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

const Dashboard = () => {
  const approved = useSelector((state) => state.approveEmailReducer.approved);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const dispatch = useDispatch();
  const handleApproved = (dispatch, approved) => {
    NewApprovedState(dispatch, approved);
  };

  const handleSubmit = (dispatch, approved) => {
    const validEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!validEmail.test(approved.Email)) {
      setEmailError("Please enter a valid email");
    }
    if (approved.Name.length < 2) {
      setNameError("Please enter a name for your approved email");
    }
    if (validEmail.test(approved.Email) && approved.Name.length > 1) {
      handleApproved(dispatch, approved);
      handleClose();
      setEmailError((prev) => "");
      setNameError((prev) => "");
    }
  };

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

  //Open and close Add modal window
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Navbar />;
      <div className="dash-add">
        <h1>My Dashboard</h1>

        <input
          type="button"
          onClick={handleOpen}
          id="button-modal"
          value="Add"
        />
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div className="modal-close-icon">
                <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
              </div>

              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                ml="12px"
              >
                Add an Approved Email
              </Typography>

              <div className="add-input-flex">
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setApprovedName(dispatch, e.target.value)}
                />
                <p>{nameError}</p>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setApprovedEmail(dispatch, e.target.value)}
                />
                <p>{emailError}</p>
                <textarea
                  rows="4"
                  cols="50"
                  placeholder="Notes"
                  onChange={(e) => setApprovedNotes(dispatch, e.target.value)}
                ></textarea>
              </div>
              <div className="submit-email">
                <input
                  type="submit"
                  value="Add Email"
                  className="submit-inputs-button"
                  onClick={() => {
                    handleSubmit(dispatch, approved);
                  }}
                />
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
      <EmailTable />
      <Footer />
    </div>
  );
};

export default Dashboard;
