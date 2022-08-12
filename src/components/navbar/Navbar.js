import React, { useState } from "react";
import {
  Menu,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  MenuItem,
  CardMedia,
} from "@mui/material";

import { Menu as MenuIcon } from "@material-ui/icons";
import useStyles from "./Styles";
import { Link } from "react-router-dom";
import beerLogo from "../../assets/beerLogo.png";

const pages = [
  <Link style={{ color: "black", textDecoration: "none" }} to="/">
    Home
  </Link>,
  <Link style={{ color: "black", textDecoration: "none" }} to="/about">
    About
  </Link>,
  <Link style={{ color: "black", textDecoration: "none" }} to="/contact">
    Contact
  </Link>,
  <Link style={{ color: "black", textDecoration: "none" }} to="/randombeer">
    Random Beer
  </Link>,
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const classes = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar
        sx={{ backgroundColor: "hsla(0, 100%, 50%, 0.15)" }}
        position="fixed"
      >
        <Container maxWidth="xl">
          <Toolbar className={classes.toolbar} disableGutters>
            <Link to="/">
              <CardMedia
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={beerLogo}
                  alt="1"
                />
              </CardMedia>
            </Link>

            <Link to="/">
              <CardMedia
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={beerLogo}
                  alt="1"
                />
              </CardMedia>
            </Link>

            <div className={classes.grow} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={Math.random()}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                {pages.map((page) => (
                  <MenuItem key={Math.random()} onClick={handleCloseNavMenu}>
                    <Typography>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Navbar;
