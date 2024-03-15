import {Box,Typography,Button,Link,Skeleton, CircularProgress} from '@mui/material';
import React, { useEffect, useState } from "react";
import {getURL,downloadFile } from "../api/client";

export default function Main(){
    const [loading,setLoading] = useState(false);
    const [downloadLoading,setDownloadLoading] = useState(false);
    const [url,setUrl] = useState('');

    const FetchURL = async () => {
        setLoading(true);
        const _response = await getURL();

        if(_response.message.length === 0 ){
            setUrl('');
            setLoading(false);
        }
        else if(_response.success){
            setUrl(prev=>prev=_response.message[0].url);
        }
        else{
            alert('URL을 불러오는데 실패했습니다.');
        }

        setLoading(false);
    }

    const Download = async () => {
        setDownloadLoading(true);
        const _response = await downloadFile();
        console.log(_response);

        const url = window.URL.createObjectURL(new Blob([_response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', _response.filename);
        link.setAttribute('id', 'tempLink');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadLoading(false);
    }

    const handlegoToURL = () => {
        if(url.length === 0){
            alert('모집 기간이 아닙니다.');
        }
        else{
            window.open("https://"+url);
        }
    }

    useEffect(()=>{
        FetchURL();
    },[])

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
                            <Button sx={{border:1,color:'white',padding:2}} onClick={() => Download()}>
                                {
                                    downloadLoading?
                                    <Box sx={{display:"flex",alignItems:"center",justifyContent:'center',width:{xs:'130px',md:'200px'},height:{xs:'30px',md:'45px'}}}>
                                        <CircularProgress size={35}/>
                                    </Box>
                                    :
                                    <Typography color="white" sx={{fontSize:{xs:20,md:30},fontFamily:'SUIT Variable',fontWeight:"bold",width:{xs:'130px',md:'200px'}}}>
                                        지원서 다운로드
                                    </Typography>
                                }
                            </Button>
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
                            <Link underline="none" color="inherit" onClick={()=>handlegoToURL()}>
                                <Button sx={{border:1,color:'white',padding:2}}>
                                    <Typography color="white" sx={{fontSize:{xs:20,md:30},fontFamily:'SUIT Variable',fontWeight:"bold",width:{xs:'130px',md:'200px'}}}>
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