import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./styles/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = ["Login", "Sign Up", "Dashboard"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" id="nav-background">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* ====== HAMBURGER NAV ====== */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              id="hamburger"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography>
                  <Link to="/login">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        textTransform: "lowercase",
                      }}
                    >
                      Login
                    </Button>
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/signup">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/dashboard">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      Dashboard
                    </Button>
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          {/* Name when browser at tablet */}
          <Link
            variant="h5"
            component="a"
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "#000",
              textDecoration: "none",
            }}
            className="logo"
          >
            Protectly
          </Link>

          {/* Tab Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/login">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Sign Up
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Dashboard
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
