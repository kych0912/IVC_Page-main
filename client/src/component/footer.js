import '../App.css';
import {Container,Box} from "@mui/material";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BsInstagram} from "react-icons/bs";
import {RiKakaoTalkFill} from 'react-icons/ri';
import {AiOutlineMail} from 'react-icons/ai'
import './footer.css';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="/">
          IVC
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Main(){
    return(
        <Box
        component="footer"
        sx={{
          display:'flex',
          width:'100%',
          justifyContent:'space-between',
          py: 3,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Inha Venture Club
          </Typography>
          <Copyright />
        </Container>

        <Container maxWidth="sm" sx={{display:'flex', justifyContent:'end',alignItems:'center',px:0}}>
            <Link color="inherit" href="https://www.instagram.com/ivc_inha/?hl=ko">
                <BsInstagram size='27' className='logo'/>
            </Link>
            <Link color="inherit">
                 <RiKakaoTalkFill size='27' className='logo'/>
            </Link>
            <Link color="inherit" href="mailto:yujin1016@inha.edu">
                <AiOutlineMail size='27' className='logo'/>
            </Link>
        </Container>

      </Box>
    )
}