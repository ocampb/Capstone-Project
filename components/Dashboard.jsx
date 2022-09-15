import React from "react";
import "./styles/Dashboard.scss";
import { createStore } from "redux";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Footer from "./Footer";
import {
  NewApprovedState,
  setApprovedEmail,
  setApprovedName,
  setApprovedNotes,
  setApprovedList,
  deleteEmail,
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
  const list = useSelector((state) => state.approveEmailReducer.listOfApproved);
  const approved = useSelector((state) => state.approveEmailReducer.approved);
  const [clicked, setClicked] = React.useState(0);
  const [emailError, setEmailError] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [deleteId, setDeleteId] = React.useState(0);
  const dispatch = useDispatch();
  const toggleClicked = (current) => {
    setClicked((current) => (current += 1));
  };
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
      toggleClicked();
      handleClose();
      setEmailError((prev) => "");
      setNameError((prev) => "");
    }
  };

  const handleDelete = (text, dispatch) => {
    toggleClicked();
    deleteEmail(dispatch, text);
    handleCloseDelete();
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSetId = (text) => {
    setDeleteId((prev) => text);
  };
  //Open and close Delete modal window
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = (text) => {
    handleSetId(text);
    setOpenDelete(true);
  };
  const handleCloseDelete = () => setOpenDelete(false);

  return (
    <div>
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

      <div className="table-flex">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Notes</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {list.map((email) => (
              <tr key={email.Email}>
                <td>{email.Name}</td>
                <td>{email.Email}</td>
                <td>{email.Notes}</td>
                <td>
                  <input
                    type="button"
                    onClick={() => {
                      handleOpenDelete(email.id);
                    }}
                    id="button-modal"
                    value="Delete"
                  />
                </td>
              </tr>
            ))}
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={openDelete}
              onClose={handleCloseDelete}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={openDelete}>
                <Box sx={style}>
                  <div className="modal-close-icon">
                    <CloseIcon
                      onClick={handleCloseDelete}
                      sx={{ cursor: "pointer" }}
                    />
                  </div>

                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                    ml="12px"
                  >
                    Are you sure that you want to delete this email?
                  </Typography>

                  <div className="submit-email">
                    <input
                      type="submit"
                      value="Confirm"
                      className="submit-inputs-button"
                      onClick={() => {
                        handleDelete(deleteId, dispatch);
                      }}
                    />
                  </div>
                </Box>
              </Fade>
            </Modal>
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
