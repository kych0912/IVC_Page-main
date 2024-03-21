import {Box, Typography, Button} from '@mui/material';
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function NotFound(){
    const navigate = useNavigate();
    return(
        <Box sx={{ width:'100%',height:"100vh",backgroundColor:'#1b1b1b',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                404 Not Found
            </Typography>
            <Typography color="white" sx={{fontSize:30,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                페이지를 찾을 수 없습니다.
            </Typography>
            <Button variant="contained" sx={{backgroundColor:'white',color:'black',fontSize:20,fontFamily:'SUIT Variable',fontWeight:"bold",mt:5}} onClick={()=>navigate("/")}>
                홈으로 돌아가기
            </Button>
        </Box>
    )
}
