import {Box,Typography} from '@mui/material';
import React, { useState } from "react";
import Accordion from './accordion';

export default function Main(){
    return(
        <Box sx={{ width:'100%',backgroundColor:'black'}}>
          <Box sx={{display:'flex',justifyContent:'start',alignItems:'start',flexDirection:'column',pt:15}}>
            <Box sx={{pb:5}}>
              <Typography color="white" sx={{fontSize:40,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                Email
              </Typography>
              <Typography color="white" sx={{fontSize:20,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                inha.venture.club@gmail.com
              </Typography>
            </Box>
            <Box sx={{pb:5}}>
              <Typography color="white" sx={{fontSize:40,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                Instagram
              </Typography>
              <Typography color="white" sx={{fontSize:20,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                @ivc_inha
              </Typography>
            </Box>
            <Box sx={{pb:5}}> 
              <Typography color="white" sx={{fontSize:40,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                KakaoTalk
              </Typography>
              <Typography color="white" sx={{fontSize:20,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                준비중...
              </Typography>
            </Box>
          </Box>
          <Box paddingBottom={'100px'} sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
              <Typography paddingBottom ={'50px'} color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                FAQ
              </Typography>
              <Accordion />
          </Box>
        </Box>
    )
}