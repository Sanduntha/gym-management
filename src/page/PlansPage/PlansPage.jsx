import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'; 
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logout from '@mui/icons-material/Logout';
import Home from '@mui/icons-material/Home';
import People from '@mui/icons-material/People';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import Assessment from '@mui/icons-material/Assessment';
import Person from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import UserInput from '../../common/components/UserInputs/UserInput';
import UserInput1 from '../../common/components/UserInputs/UserInput1';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // const [showAll, setShowAll] = React.useState(false);

  const drawer = (
    <Box
      sx={{
        bgcolor: 'rgba(255, 121, 40, 1)', 
        borderRadius: '70px',
        height: '200%',
        padding: 2,
        marginLeft: -8, 
      }}
    >
      <Toolbar />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        <img
          src=".././src/assets/logo.png"
          alt="Gym Logo"
          style={{ width: 100, height: 40, marginTop: -60, marginBottom: 20, marginLeft: 30 }}
        />
      </Box>

      <List sx={{ color: 'black' }}>
        <ListItem
          button
          sx={{
            bgcolor: 'white',
            borderRadius: '8px',
            mb: 1,
            marginTop: 3,
            width: 176,
            height: 52,
            marginLeft: 8,
          }}
        >
          <ListItemIcon sx={{ color: 'black' }}>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Dashboard" sx={{ color: 'black' }} />
        </ListItem>
        <ListItem
          button
          sx={{
            bgcolor: 'white',
            borderRadius: '8px',
            mb: 1,
            marginTop: 3,
            width: 176,
            height: 52,
            marginLeft: 8,
          }}
        >
          <ListItemIcon sx={{ color: 'black' }}>
            <People />
          </ListItemIcon>
          <ListItemText primary="Members" sx={{ color: 'black' }} />
        </ListItem>
        <ListItem
          button
          sx={{
            bgcolor: 'white',
            borderRadius: '8px',
            mb: 1,
            marginTop: 3,
            width: 176,
            height: 52,
            marginLeft: 8,
          }}
        >
          <ListItemIcon sx={{ color: 'black' }}>
            <FitnessCenter />
          </ListItemIcon>
          <ListItemText primary="Items" sx={{ color: 'black' }} />
        </ListItem>
        <ListItem
          button
          sx={{
            bgcolor: 'white',
            borderRadius: '8px',
            mb: 1,
            marginTop: 3,
            width: 176,
            height: 52,
            marginLeft: 8,
          }}
        >
          <ListItemIcon sx={{ color: 'black' }}>
            <Assessment />
          </ListItemIcon>
          <ListItemText primary="Planes" sx={{ color: 'black' }} />
        </ListItem>
        <ListItem
          button
          sx={{
            bgcolor: 'white',
            borderRadius: '8px',
            mb: 1,
            marginTop: 3,
            width: 176,
            height: 52,
            marginLeft: 8,
          }}
        >
          <ListItemIcon sx={{ color: 'black' }}>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Trainers" sx={{ color: 'black' }} />
        </ListItem>
      </List>

      <Box sx={{ mt: 'auto', p: 2, display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <Button variant="contained" startIcon={<Logout />} sx={{ backgroundColor: '#fff', color: 'black' }}>
          Log Out
        </Button>
      </Box>
    </Box>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'white',
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mr: 2 }}>
              <Typography variant="body1" color="black">
                Jhon Sena
              </Typography>
              <Typography variant="body2" color="black" sx={{ textDecoration: 'underline' }}>
                jhonsena@gmail.com
              </Typography>
            </Box>
            <Avatar />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>


      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <h1 style={{ marginBottom: '20px', marginLeft: '10px' }}>Items</h1>
        <Card sx={{ p: 3, m: 2, borderRadius: 3, boxShadow: 3, backgroundColor: '#fff',width:1100 }}>
          <Grid container spacing={2} sx={{ marginLeft: '10px', marginTop: '10px' }}>
            <Grid item xs={6}>
              <UserInput val="Plan Name" name="" />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '80px', marginTop: '-10px' }}>
              <UserInput val="Duration" name="" />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '80px', marginTop: '20px' }}>
              <UserInput val="Price" name="" />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '20px', marginBottom: 7 }}>
              <UserInput val="Trainer Name" name="" />
            </Grid>
          </Grid>
          <Grid item xs={8} sx={{ marginTop: '20px', marginBottom: 7,marginLeft:3}}>
              <UserInput1 val="Plan Details" name="" />
            </Grid>
          


          <Button variant="outlined" sx={{ marginTop: 11,marginLeft: 45,color:'black',borderRadius:2,width:120,height:45,border:"3px solid yellow"  }}>Update</Button>
          <Button variant="outlined" sx={{ marginTop: 11,marginLeft: 3,color:'black',borderRadius:2,width:120,height:45,border:"3px solid blue"   }}>Edit</Button>
          <Button variant="outlined" sx={{ marginTop: 11,marginLeft: 3,color:'black',borderRadius:2,width:120,height:45,border:"3px solid red"   }}>Delete</Button>
          <Button variant="outlined" sx={{ marginTop: 11,marginLeft: 3,color:'black',borderRadius:2,width:120,height:45,border:"3px solid green"   }}>Save</Button>





        </Card>

      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
