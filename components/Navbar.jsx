import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "./styles/Navbar.scss";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import Dialog from "./Dialog";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { StarBorder } from "@mui/icons-material";

const drawerWidth = 240;

const Navbar = (props) => {
  //Settings dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Hamburger settings nested list
  const [openHam, setOpenHam] = React.useState(true);

  const handleClickSettings = () => {
    setOpenHam(!openHam);
  };

  // Delete account modal (Works alongside Dialog.jsx)
  const [openSettings, setOpenSettings] = React.useState(false);
  const handleCloseSettings = () => setOpenSettings(false);

  // Navbar drawer toggle
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Protectly
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to="/dashboard">
              <ListItemText primary="Dashboard" className="drawer-item" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <a href="/logout">
            <ListItemButton>
              <ListItemText primary="Logout" className="drawer-item" />
            </ListItemButton>
          </a>
        </ListItem>
        <ListItemButton
          sx={{ textAlign: "left" }}
          onClick={handleClickSettings}
        >
          <ListItemText primary="Settings" className="drawer-item" />
          {openHam ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openHam} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 10 }}>
              <Dialog />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" id="auth-nav-background">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#221f1f" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link
              variant="h5"
              component="a"
              to="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                color: "#221f1f",
                textDecoration: "none",
              }}
              className="logo"
            >
              Protectly
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/dashboard">
              <Button
                sx={{
                  color: "#221f1f",
                  textTransform: "none",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                Dashboard
              </Button>
            </Link>
            <Button
              sx={{
                color: "#221f1f",
                textTransform: "none",
                marginLeft: "10px",
                marginRight: "10px",
              }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Settings
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleCloseSettings}>
                <Dialog />
              </MenuItem>
            </Menu>
            <Link to="/">
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  backgroundColor: "#221f1f",
                  borderRadius: "30px",
                  marginLeft: "10px",
                  marginRight: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
                id="logout-button"
              >
                Logout
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
