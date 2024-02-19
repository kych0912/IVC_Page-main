import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";
import {resumeLink, submitLink} from "../Variable/index";

export default function Main(){
    return(
        <Box className="App-header" sx={{ width:'100%',backgroundColor:'black',height:'100vh'}}>
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',pt:8}}>
            <Box sx={{pb:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                    RECRUIT
                </Typography>

                <Box sx={{display:'flex', maxWidth:'750px',justifyContent:'center',flexDirection:'column',alignItems:'center',pb:10}}>
                    <Box sx={{display:'flex'}}>
                        <Typography color='white' fontSize={{xs:30, md:50}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',alignItems:'center', pt:8}}>
                            당신의 &nbsp;
                        </Typography>
                        <Typography color='white' fontSize={{xs:30, md:50}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:8}}>
                            새로운 도전에
                        </Typography>
                    </Box>
                    <Box sx={{display:'flex'}}> 
                        <Typography color='white' fontSize={{xs:30, md:50}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:3}}>
                            인하벤처클럽이 &nbsp;
                        </Typography>
                        <Typography color='white' fontSize={{xs:30, md:50}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',alignItems:'center', pt:3}}>
                            함께하기를
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex'}}>
                    <Box sx={{pr:{xs:3,md:5}}}>
                        <Link underline="none" color="inherit" href={resumeLink}>
                            <Button sx={{border:1,color:'white',padding:2}}>
                                <Typography color="white" sx={{fontSize:{xs:20,md:30},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                                    지원서 다운로드
                                </Typography>
                            </Button>
                        </Link>
                    </Box>
                    <Box>
                        <Link underline="none" color="inherit" href={submitLink}>
                            <Button sx={{border:1,color:'white',padding:2}}>
                                <Typography color="white" sx={{fontSize:{xs:20,md:30},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                                    지원서 제출
                                </Typography>
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
          </Box>
        </Box>
    )
}