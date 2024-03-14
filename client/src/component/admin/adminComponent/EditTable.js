import { Paper, Box, Typography, Divider, CircularProgress } from "@mui/material"
import React from "react"
import UrlTable from "./URLtable"
import FileTable from "./Filetable"
import {getURLs} from "../../../api/admin";

export default function EditTable() {
    const [loading,setLoading] = React.useState(true);
    const [urls,setUrls] = React.useState([{}]);

    const fetchURL = async () => {
        const response = await getURLs();
        if(response.success){
            setUrls(response.message);
            setLoading(false);
        }
        else{
            alert('서버 오류');
        }
    }

    React.useEffect(() => {
        fetchURL();
    },[])

    return (
        <>
        <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            <Paper sx={{  margin: 'auto', overflow: 'hidden' }}> 
                <Box sx={{p:1.5,display:'flex',flexDirection:"column",margin:"auto"}}>
                    <Typography sx={{mb:1, fontFamily:'SUIT Variable',fontWeight:800,fontSize:'1rem' }} color="text.secondary" >
                        제출 URL
                    </Typography>
                    
                    <Divider />

                    <UrlTable urlList={urls}/>
                </Box>
            </Paper>
        </Box>
        

        <Box component="main" sx={{ flex: 1, pt: 1, pb:6, px: 4, bgcolor: '#eaeff1' }}>
            <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}> 
                <Box sx={{p:1.5}}>
                    <Typography sx={{mb:1, fontFamily:'SUIT Variable',fontWeight:800,fontSize:'1rem' }} color="text.secondary" >
                        지원서 파일
                    </Typography>
                    <Divider />

                    <FileTable/>
                </Box>
            </Paper>
        </Box>

        {
            loading?
            <Box sx={{position:'fixed',left: '50%',transform:'translate(-50%, 0)',top:"50%"}}>
                <CircularProgress color="primary"/>
            </Box>
            :
            ""
        }
        </>
    )
}