import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";
import "./styles/Navbar.scss";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

const LandingNavbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Protectly
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to="/login">
              <ListItemText primary="Login" className="drawer-item" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <Link to="/signup">
              <ListItemText primary="Get Started" className="drawer-item" />
            </Link>
          </ListItemButton>
        </ListItem>
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
            <a href="/oauth">
              <Button
                sx={{
                  color: "#221f1f",
                  textTransform: "none",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                Login
              </Button>
            </a>
            <Link to="/signup">
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
                Get Started
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

export default LandingNavbar;
