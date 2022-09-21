import React from "react";
import "./styles/Dashboard.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { deleteEmail } from "../actions/addNewEmailFunctions";

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

const TableList = () => {
  const [deleteId, setDeleteId] = useState(0);
  const dispatch = useDispatch();

  //Open and close Delete modal window
  const [openDelete, setOpenDelete] = useState(false);

  const handleSetId = (text) => {
    setDeleteId((prev) => text);
  };

  const handleOpenDelete = (text) => {
    handleSetId(text);
    setOpenDelete(true);
  };
  const handleDelete = (text, dispatch) => {
    deleteEmail(dispatch, text);
    handleCloseDelete();
  };
  const handleCloseDelete = () => setOpenDelete(false);

  const list = useSelector((state) => state.approveEmailReducer.listOfApproved);

  return (
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
              <td data-label="Name">{email.Name}</td>
              <td data-label="Email">{email.Email}</td>
              <td data-label="Notes">{email.Notes}</td>
              <td data-label="Delete Email">
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
  );
};

export default TableList;
