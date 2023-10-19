import { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css'
import { Button, Divider, List, ListItem, Toolbar, ListItemButton, Box, CssBaseline, AppBar, Typography } from '@mui/material';

function App() {

  const drawerWidth = 240;
  
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <div>
      <List>
        <ListItem>
        <ListItemButton>Home</ListItemButton>
        <ListItemButton>Services</ListItemButton>
        <ListItemButton>Our Works</ListItemButton>
        <ListItemButton>Clients</ListItemButton>
        <ListItemButton>Contact</ListItemButton>
        </ListItem>
      </List>
    </div>
  )
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <AppBar
      position='fixed'
      sx={{
        width: {sm: `calc(100% - ${drawerWidth}px)`},
        ml: { sm: `${drawerWidth}px`},
      }}
      >
        
          <IconButton
            
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        
      </AppBar>
    </Box>
   
      <div className='nav-container'>
      <div className='title'>
        <h1>Edie</h1>
      </div>
      <div className='btns'>
        <Button>Home</Button>
        <Button>Services</Button>
        <Button>Our Works</Button>
        <Button>Clients</Button>
        <Button>Contact</Button>
      </div>
      </div>

      <h3>Unhappy with your website?</h3>
      <h1>We create beutiful and fast web services</h1>
      <img src="/edie-homepage-master/heroImage.jpg" alt="" />
    </>
  )
}

export default App
