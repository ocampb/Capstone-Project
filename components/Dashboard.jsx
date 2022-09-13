import React from "react";
import "./styles/Dashboard.scss";
import { createStore } from "redux";
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
  // const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter);

  //Open and close modal window
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Triple dot menu pop up to remove row
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openDots = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseDots = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: "DUMMY_CASE" })}>
        Increment
      </button> */}
      <div className="dash-add">
        <h1>My Dashboard</h1>

        <input
          type="button"
          onClick={handleOpen}
          id="add-button-modal"
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
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea rows="4" cols="50" placeholder="Notes"></textarea>
              </div>

              <div className="submit-email">
                <input
                  type="submit"
                  value="Add Email"
                  className="submit-inputs-button"
                  onClick={handleClose}
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
            <tr>
              <td>Sally CEO</td>
              <td>sallyceo@gmail.com</td>
              <td>Is the CEO of the business</td>
              <td>
                <Button
                  id="basic-button"
                  aria-controls={openDots ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openDots ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openDots}
                  onClose={handleCloseDots}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleCloseDots}>Delete</MenuItem>
                </Menu>
              </td>
            </tr>
            <tr>
              <td>Bob Salesman</td>
              <td>bobsales@gmail.com</td>
              <td>
                Bob has a pitch he wants to include in our meeting. Remember to
                take notes and ask any questions that you may have for him.
              </td>
              <td>
                <Button
                  id="basic-button"
                  aria-controls={openDots ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openDots ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openDots}
                  onClose={handleCloseDots}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleCloseDots}>Delete</MenuItem>
                </Menu>
              </td>
            </tr>
            <tr>
              <td>Karen DesignComplainer</td>
              <td>karensales@gmail.com</td>
              <td>I mean, I guess she can join?</td>
              <td>
                <Button
                  id="basic-button"
                  aria-controls={openDots ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openDots ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openDots}
                  onClose={handleCloseDots}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleCloseDots}>Delete</MenuItem>
                </Menu>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
