import React, {useState, useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Image from "../image/LOGO1.png"
import './navbar.css';
import { Link } from '@mui/material';
import Drawer from './drawer';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

  return (
    <Box sx={{ flexGrow: 1, color:'white' }}>
      <AppBar width="100%" position="fixed" color = {scrollPosition < 100 ? 'transparent': ''} >
        <Toolbar sx = {{height:70, size:30}}>
            <Link underline="none" color="inherit" href="/">
              <Typography
                  variant="h4"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' },pr:5,fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold"}}
              >
                Inha Venture Club
              </Typography>
            </Link>
            <Link underline="none" color="inherit" href="/">
              <Typography
                  variant="h4"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'block', sm: 'none' },pr:5,fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold"}}
              >
                  IVC
              </Typography>
            </Link>

          <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link underline="none" color="inherit" href="/Press">
                <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ display: { xs: 'block', sm: 'block' },pr:5,fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold"}}
                >
                  Media
                </Typography>
             </Link>
             <Link underline="none" color="inherit" href="/FAQ">
                <Typography
                    variant="h4"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'block', sm: 'block' } ,pr:5,fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold"}}
                >
                    Contact
                </Typography>
              </Link>
              <Link underline="none" color="inherit" href="/Recruit">
                <Typography
                    variant="h4"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'block', sm: 'block' },pr:5 ,fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold"}}
                >
                    Recruit
                </Typography>
              </Link>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Drawer/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}