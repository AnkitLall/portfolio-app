import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { PropTypes } from 'prop-types';
import styled from '@emotion/styled';
import { StyledToolbar } from '../styledComponents/styledToolBar';

const drawerWidth = '100%';
const pages = [
    {
        name:'About',
        url:'/' 
    },
    {
        name:'Portfolio',
        url:'/portfolio' 
    },
    {
        name:'Contact',
        url:'/contact' 
    }
];

export default function Navigation(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setMobileOpen(true);
    };

    const handleDrawerClose = () => {
        setMobileOpen(false);
    };

    const container = window !== undefined ? () => window().document.body : undefined;
  
    const drawer = (
      <Box sx={{ textAlign: 'center' }}>
        <Box sx={{display: 'flex', justifyContent:'space-between'}}>
            <Box></Box>
            <Typography variant="h3" sx={{ my: 2, ml: 7 }}>
                ANKIT LALL
            </Typography>
            <IconButton onClick={handleDrawerClose} >
                <CloseIcon />
            </IconButton>            
        </Box>
        <Divider />
        <List>
          {pages.map((page) => (
            <ListItem key={page} disablePadding>
              <ListItemButton href={page.url} sx={{ textAlign: 'center' }}>
                <ListItemText primary={page.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" 
            sx={{'flex-direction': {xs:'row-reverse', sm:'row-reverse', md:'column'}, background:'black'}}
        >
          <StyledToolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerOpen}
              sx={{ display: { md: 'none' }, p: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
                href={'/'}
                variant="h4"
                component="div"
                sx={{ flexGrow: 1, display: { xs:'none', sm: 'none', md: 'block' } }}
            >
              ANKIT LALL
            </Typography>
            <Box sx={{ display: {  xs:'none', sm: 'none', md: 'block' } }}>
              {pages.map((page) => (
                <Button href={page.url} key={page.name} sx={{ color: '#fff', fontSize:'1.5rem' }}>
                  {page.name}
                </Button>
              ))}
            </Box>
          </StyledToolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            anchor='top'
            container={container}
            variant="temporary"
            open={mobileOpen}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { sm: 'block', md: 'none' },              
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: '100%' },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>

    )
}

Navigation.propTypes = {
    window: PropTypes.func,
};