import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import logo from "../assets/logo.png"


function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" sx={{ backgroundColor: '#4F2C84', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem
                component={Link}
                to={"/"}
                onClick={handleCloseNavMenu}>
                Home
              </MenuItem>
              <MenuItem
                component={Link}
                to={"/about"}
                onClick={handleCloseNavMenu}>
                About
              </MenuItem>
              <MenuItem
                component={Link}
                to={"/members"}
                onClick={handleCloseNavMenu}>
                Members
              </MenuItem>
              <MenuItem
                component={Link}
                to={"/sponsors"}
                onClick={handleCloseNavMenu}>
                Sponsors
              </MenuItem>
              <MenuItem
                component={Link}
                to={"/donate"}
                onClick={handleCloseNavMenu}>
                Donate
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
              <Button
                component={Link}
                to={"/about"}
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'flex', textAlign: 'center' }}
                style={{ width: '144px', height: '50px' }}>
                  ABOUT
              </Button>
              <Button
                component={Link}
                to={"/members"}
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'flex', textAlign: 'center' }}
                style={{ width: '144px', height: '50px' }}>
                  Our Board
              </Button>
              <Link to={"/"}>
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: '205px', height: 'auto', cursor: 'pointer' }}
                />
              </Link>
              <Button
                component={Link}
                to={"/sponsors"}
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'flex', textAlign: 'center' }}
                style={{ width: '144px', height: '50px' }}>
                  Sponsors
              </Button>
              <Button
                component={Link}
                to={"/donate"}
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'flex', textAlign: 'center' }}
                style={{ width: '144px', height: '50px' }}>
                  Donate
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;