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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/* <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: "DUMMY_CASE" })}>
        Increment
      </button> */}
      <div className="dash-add">
        <h1>My Dashboard</h1>

        {/* <input type="button" value="Add" className="add-button" /> */}
        <Button onClick={handleOpen} id="add-button-modal">
          Add
        </Button>
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
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Text in a modal
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>

      {/* <div className="input-flex">
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="text" placeholder="company" />
      </div> */}

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
                <MoreVertIcon />
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
                <MoreVertIcon />
              </td>
            </tr>
            <tr>
              <td>Karen DesignComplainer</td>
              <td>karensales@gmail.com</td>
              <td>I mean, I guess she can join?</td>
              <td>
                <MoreVertIcon />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
