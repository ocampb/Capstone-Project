import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";

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

const Dialog = () => {
  // Delete account modal
  const [openSettings, setOpenSettings] = React.useState(false);
  const handleOpenSettings = () => setOpenSettings(true);
  const handleCloseSettings = () => setOpenSettings(false);

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
        aria-controls={openSettings ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openSettings ? "true" : undefined}
        onClick={handleOpenSettings}
      >
        Delete Account
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openSettings}
        onClose={handleCloseSettings}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openSettings}>
          <Box sx={style}>
            <div className="modal-close-icon">
              <CloseIcon
                onClick={handleCloseSettings}
                sx={{ cursor: "pointer" }}
              />
            </div>

            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              ml="12px"
            >
              Are you sure that you want to delete this account?
            </Typography>

            <div className="submit-email">
              <input
                type="submit"
                value="Confirm"
                className="submit-inputs-button"
                onClick={() => {
                  handleCloseSettings();
                }}
              />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Dialog;