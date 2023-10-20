//code for hamburger menu and navbar and linking also note when publishing to github pages, change link to blockchain-application/#/about
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import QuizIcon from '@mui/icons-material/Quiz';
import LockIcon from '@mui/icons-material/Lock';
import {BrowserRouter as Router} from "react-router-dom";

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }; //settings to deal with how the sidebar opens

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List> {/*list element ensures proper lisitng of all options*/}
      <Router>{/*router is neccesary to ensure proper page handling*/}


        <ListItem disablePadding> 
          <ListItemButton Link to="/blockchain-application/#/"> {/*direct users to relevant page*/}
            <ListItemIcon>
              <HomeIcon /> {/*displayed icon beside name*/}
            </ListItemIcon>
              <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton Link to="/blockchain-application/#/exam">
            <ListItemIcon>
              <QuizIcon />
            </ListItemIcon>
              <ListItemText primary="EE Exam" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton Link to="/blockchain-application/#/contact">
            <ListItemIcon>
              <ContactPageIcon />
            </ListItemIcon>
              <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton Link to="/blockchain-application/#/teachers">
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
              <ListItemText primary="Teachers View" />
          </ListItemButton>
        </ListItem>

      </Router>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed" 
      > {/*position of hamburger menu on toolbar*/}

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2}}
          > 
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Examchain
          </Typography>
        </Toolbar> {/*toolbar configuration*/}
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;