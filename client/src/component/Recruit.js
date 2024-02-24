import {Box,Typography,Button,Link,Skeleton} from '@mui/material';
import React, { useEffect, useState } from "react";
import {submitLink} from "../Variable/index";
import {getURL} from "../api/client";

export default function Main(){
    const [loading,setLoading] = useState(false);
    const [url,setUrl] = useState('');

    const FetchURL = async () => {
        setLoading(true);
        const _response = await getURL();
        console.log(_response)

        if(_response.success){
            setUrl(prev=>prev=_response.message[0].url);
        }
        else{
            alert('URL을 불러오는데 실패했습니다.');
        }
        setLoading(false);
    }

    useEffect(()=>{
        FetchURL();
    },[])

    useEffect(()=>{
        console.log(url);
    },[url])

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

                    {
                        loading?
                        <Box sx={{pr:{xs:3,md:5}}}>

                            <Skeleton
                                    variant="rounded"
                                sx={{
                                    bgcolor: 'grey.900',
                                    width:{xs:'162px',md:'226px'},
                                    height:{xs:"64px",md:"79px"}
                                }}
                            />
                        </Box>
                        :
                        <Box sx={{pr:{xs:3,md:5}}}>
                            <Link underline="none" color="inherit" onClick={() => window.open(url)}>
                                <Button sx={{border:1,color:'white',padding:2}}>
                                    <Typography color="white" sx={{fontSize:{xs:20,md:30},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                                        지원서 다운로드
                                    </Typography>
                                </Button>
                            </Link>
                        </Box>
                    }

                    {
                        loading?
                        <Box>
                            <Skeleton
                                    variant="rounded"
                                sx={{
                                    bgcolor: 'grey.900',
                                    width:{xs:'162px',md:'226px'},
                                    height:{xs:"64px",md:"79px"}
                                }}
                            />
                        </Box>
                        :
                        <Box>
                            <Link underline="none" color="inherit" href={submitLink}>
                                <Button sx={{border:1,color:'white',padding:2}}>
                                    <Typography color="white" sx={{fontSize:{xs:20,md:30},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                                        지원서 제출
                                    </Typography>
                                </Button>
                            </Link>
                        </Box>
                    }

                </Box>
            </Box>
          </Box>
        </Box>
    )
}