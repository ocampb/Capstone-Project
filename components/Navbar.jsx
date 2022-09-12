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

const Navbar = () => {
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
        <Toolbar disableGutters sx={{}}>
          {/* ====== HAMBURGER NAV ====== */}
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
                // flexDirection: "row-reverse",
              },
            }}
          >
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
              {/* Hamburger Tab Links */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography>
                  <Link to="/dashboard">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        textTransform: "none",
                        fontFamily: "Poppins",
                      }}
                    >
                      Dashboard
                    </Button>
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/login">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        textTransform: "none",
                        fontFamily: "Poppins",
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
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        textTransform: "none",
                        fontFamily: "Poppins",
                      }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/settings">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        textTransform: "none",
                        fontFamily: "Poppins",
                      }}
                    >
                      Settings
                    </Button>
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

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

          {/* Nav tabs on page */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/dashboard">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textTransform: "none",
                  fontFamily: "Poppins",
                }}
              >
                Dashboard
              </Button>
            </Link>
            <Link to="/login">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textTransform: "none",
                  fontFamily: "Poppins",
                }}
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textTransform: "none",
                  fontFamily: "Poppins",
                }}
              >
                Sign Up
              </Button>
            </Link>
            <Link to="/settings">
              <SettingsIcon />
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
