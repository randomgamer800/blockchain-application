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
import { Button, Stack } from '@mui/material';

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }; //settings to deal with how the sidebar opens


    const handleListItemClick = () => {
      if (mobileOpen) {
        setMobileOpen(false);
      }
    }; //closes the sidebar once user selects a page

    const [teachers, setTeachers] = React.useState(false); // Initial state, for hiding teachers view

    const handleStudentClick = () => {
      // Hide the Teacher's View when the Student button is clicked
      setTeachers(false);
    };
  
    const handleTeacherClick = () => {
      // Show the Teacher's View when the Teacher button is clicked
      setTeachers(true);
    }; //by right a login system, but due to time constraints, this is put in place

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List> {/*list element ensures proper lisitng of all options*/}
      <Router>{/*router is neccesary to ensure proper page handling*/}


        <ListItem disablePadding onClick={handleListItemClick}> 
          <ListItemButton Link to="/blockchain-application/#/"> {/*direct users to relevant page*/}
            <ListItemIcon>
              <HomeIcon /> {/*displayed icon beside name*/}
            </ListItemIcon>
              <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={handleListItemClick}>
          <ListItemButton Link to="/blockchain-application/#/exam">
            <ListItemIcon>
              <QuizIcon />
            </ListItemIcon>
              <ListItemText primary="EE Exam" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={handleListItemClick}>
          <ListItemButton Link to="/blockchain-application/#/contact">
            <ListItemIcon>
              <ContactPageIcon />
            </ListItemIcon>
              <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>

        <Divider />

        {teachers && ( // Conditionally render the "Teachers View" list item based on button click
        <ListItem disablePadding onClick={handleListItemClick}>
          <ListItemButton Link to="/blockchain-application/#/teachers">
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary="Teachers View" />
          </ListItemButton>
        </ListItem>
      )}
  

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
          <Stack direction="row" spacing={2}  justifyContent="center" alignItems="center" paddingTop='100px'>
          <Button variant="contained" onClick={handleStudentClick}>Student</Button>
          <Button variant="contained" onClick={handleTeacherClick}>Teacher</Button>
          {<setTeachers />} {/*display teachers view based on this state*/}
          </Stack>
          <Typography>These buttons simulate the login system for teachers and students</Typography>
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;