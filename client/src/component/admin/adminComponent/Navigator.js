import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import {logOut} from '../../../api/login';
import { useNavigate } from 'react-router-dom';


const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

async function handleLogout(){
    const _response = await logOut();

    
    if(_response.success){
        window.location.href = '/';
    }
    else{
        alert('로그아웃에 실패했습니다.');
    }
}

export default function Navigator(props) {
  const navigate = useNavigate();
  const { ...other } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const pathname = window.location.pathname.split('/')[2]; 

  function navigateToTable(){
    navigate('/admin/table');
  }
  
  function navigateToEdit(){
    navigate('/admin/edit');
  }

  const categories = [
    {
      id: 'EDIT',
      children: [
        {
          path:'edit',
          id: '수정',
          icon: <PeopleIcon />,
          Fn:navigateToEdit,
        },
        { 
          path:'table',
          id: '올린 파일', 
          icon: <DnsRoundedIcon />,
          Fn:navigateToTable,
        },
      ],
    },
    {
      id: 'User',
      children: [
        { id: 'LOGOUT', icon: <LogoutIcon />,Fn:handleLogout,active:false },
      ],
    },
  ];
  

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          Inha Venture Club
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ path, id: childId, icon, active,Fn},index) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton onClick={Fn} selected={path?path===pathname:active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}