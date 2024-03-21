import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography } from '@mui/material';
import {AiOutlineMenu} from 'react-icons/ai'
import {Link} from '@mui/material';

const link = ['/Press','/FAQ','/Recruit'];

export default function TemporaryDrawer() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    const [state, setState] = React.useState({
        'top': false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        style={{backgroundColor:'#3D3D3D'}}
        >
        <List >
            {['Media', 'Contact', 'Recruit'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton >
                    <Link underline="none" color="inherit" sx={{width:"100%"}} href={link[index]}>
                        <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            color ="white"
                            sx={{ display: { xs: 'block', sm: 'block' },fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold",width:'100%'}}
                        >
                            {text}
                        </Typography>
                    </Link>
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Box>
    );

  return (
    <div>
        <React.Fragment key={'top'}>
            <Button onClick={toggleDrawer('top', true)}>
                <AiOutlineMenu size ='27' color={scrollPosition < 100 ? 'white': 'white'}/>
            </Button>
            <Drawer
            anchor={'top'}
            open={state['top']}
            onClose={toggleDrawer('top', false)}
            color="primary"
            >
            {list('top')}
            </Drawer>
        </React.Fragment>
    </div>
  );
}