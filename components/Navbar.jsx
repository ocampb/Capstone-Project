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

const Navbar = (props) => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

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
            <Link to="/dashboard">
              <ListItemText primary="Dashboard" className="drawer-item" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <Link to="/">
              <ListItemText primary="Logout" className="drawer-item" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "left" }}>
            <ListItemText primary="Settings" className="drawer-item" />
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
            >
              Settings
            </Button>
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
    // <AppBar position="static" id="nav-background">
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters sx={{}}>
    //       {/* Name when browser at tablet */}
    //       <Link
    //         variant="h5"
    //         component="a"
    //         to="/"
    //         sx={{
    //           mr: 2,
    //           display: { xs: "flex", md: "none" },
    //           flexGrow: 1,
    //           fontWeight: 700,
    //           color: "#000",
    //           textDecoration: "none",
    //         }}
    //         className="logo"
    //       >
    //         Protectly
    //       </Link>

    //       {/* ====== HAMBURGER NAV ====== */}
    //       <Box
    //         sx={{
    //           flexGrow: 1,
    //           display: {
    //             xs: "flex",
    //             md: "none",
    //           },
    //         }}
    //       >
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit"
    //           id="hamburger"
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: "bottom",
    //             horizontal: "left",
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: "top",
    //             horizontal: "left",
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: "block", md: "none" },
    //           }}
    //         >
    //           {/* Hamburger Tab Links */}
    //           <MenuItem onClick={handleCloseNavMenu}>
    //             <Typography>
    //               <Link to="/dashboard">
    //                 <Button
    //                   onClick={handleCloseNavMenu}
    //                   sx={{
    //                     my: 2,
    //                     color: "black",
    //                     display: "block",
    //                     textTransform: "none",
    //                     fontFamily: "Poppins",
    //                   }}
    //                 >
    //                   Dashboard
    //                 </Button>
    //               </Link>
    //             </Typography>
    //             <Typography>
    //               <Link to="/login">
    //                 <Button
    //                   onClick={handleCloseNavMenu}
    //                   sx={{
    //                     my: 2,
    //                     color: "black",
    //                     display: "block",
    //                     textTransform: "none",
    //                     fontFamily: "Poppins",
    //                   }}
    //                 >
    //                   Login
    //                 </Button>
    //               </Link>
    //             </Typography>
    //             <Typography>
    //               <Link to="/signup">
    //                 <Button
    //                   onClick={handleCloseNavMenu}
    //                   sx={{
    //                     my: 2,
    //                     color: "black",
    //                     display: "block",
    //                     textTransform: "none",
    //                     fontFamily: "Poppins",
    //                   }}
    //                 >
    //                   Sign Up
    //                 </Button>
    //               </Link>
    //             </Typography>
    //             <Typography>
    //               <Link to="/settings">
    //                 <Button
    //                   onClick={handleCloseNavMenu}
    //                   sx={{
    //                     my: 2,
    //                     color: "black",
    //                     display: "block",
    //                     textTransform: "none",
    //                     fontFamily: "Poppins",
    //                   }}
    //                 >
    //                   Settings
    //                 </Button>
    //               </Link>
    //             </Typography>
    //           </MenuItem>
    //         </Menu>
    //       </Box>

    //       {/* Nav tabs on page */}
    //       <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    //         <Link to="/dashboard">
    //           <Button
    //             onClick={handleCloseNavMenu}
    //             sx={{
    //               my: 2,
    //               color: "black",
    //               display: "block",
    //               textTransform: "none",
    //               fontFamily: "Poppins",
    //             }}
    //           >
    //             Dashboard
    //           </Button>
    //         </Link>
    //         <Link to="/login">
    //           <Button
    //             onClick={handleCloseNavMenu}
    //             sx={{
    //               my: 2,
    //               color: "black",
    //               display: "block",
    //               textTransform: "none",
    //               fontFamily: "Poppins",
    //             }}
    //           >
    //             Login
    //           </Button>
    //         </Link>
    //         <Link to="/signup">
    //           <Button
    //             onClick={handleCloseNavMenu}
    //             sx={{
    //               my: 2,
    //               color: "black",
    //               display: "block",
    //               textTransform: "none",
    //               fontFamily: "Poppins",
    //             }}
    //           >
    //             Sign Up
    //           </Button>
    //         </Link>
    //         <Link to="/settings">
    //           <SettingsIcon className="settings-icon" />
    //         </Link>
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
  );
};

export default Navbar;
