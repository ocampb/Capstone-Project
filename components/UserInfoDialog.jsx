import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";

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

const UserInfoDialog = () => {
  const [openUserInfo, setOpenUserInfo] = React.useState(false);
  const [userInfo, setUserInfo] = useState({});
  const handleOpenUserInfo = async () => {
    const result = await fetch("/api/userinfo", {
      method: "GET",
    });
    const data = await result.json();

    if (result.status === 200) {
      console.log(data);
      setUserInfo(data);
      setOpenUserInfo(true);
    }
  };
  const handleCloseUserInfo = async () => setOpenUserInfo(false);

  return (
    <div>
      <Button
        sx={{
          color: "#221f1f",
          textTransform: "none",
          marginLeft: "10px",
          marginRight: "10px",
        }}
        id="basic-button"
        aria-controls={openUserInfo ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openUserInfo ? "true" : undefined}
        onClick={handleOpenUserInfo}
      >
        User Information
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openUserInfo}
        onClose={handleCloseUserInfo}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openUserInfo}>
          <Box sx={style}>
            <div className="modal-close-icon">
              <CloseIcon
                onClick={handleCloseUserInfo}
                sx={{ cursor: "pointer" }}
              />
            </div>
            <Typography
              id="transition-modal-title"
              variant="h5"
              component="h2"
              ml="12px"
            >
              Calendly Account Info
            </Typography>
            <Typography
              id="transition-modal-title"
              variant="body1"
              component="h2"
              ml="12px"
            >
              Name: {userInfo.name}
            </Typography>
            <Typography
              id="transition-modal-title"
              variant="body1"
              component="h2"
              ml="12px"
            >
              Email: {userInfo.email}
            </Typography>
            <Typography
              id="transition-modal-title"
              variant="body1"
              component="h2"
              ml="12px"
            >
              Scheduling URL: {userInfo.scheduling_url}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default UserInfoDialog;
