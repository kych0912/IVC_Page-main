import { Paper, Box, Typography, Divider, CircularProgress } from "@mui/material"
import React from "react"
import UrlTable from "./URLtable"
import FileTable from "./Filetable"
import {getURLs,getFiles} from "../../../api/admin";
import { useQuery } from "react-query";

export default function EditTable() {
    const [loading,setLoading] = React.useState(true);
    const [urls,setUrls] = React.useState([{}]);
    const query = useQuery('url',getURLs);
    const filequery = useQuery('file',getFiles);

    return (
        <>
        <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            <Paper sx={{  margin: 'auto', overflow: 'hidden' }}> 
                <Box sx={{p:1.5}}>
                    <Typography sx={{mb:1, fontFamily:'SUIT Variable',fontWeight:800,fontSize:'1rem' }} color="text.secondary" >
                        제출 URL
                    </Typography>
                    
                    <Divider />

                    {!query.isLoading&&<UrlTable list={query.data.message}/>}

                </Box>
            </Paper>
        </Box>
        

        <Box component="main" sx={{ flex: 1, pt: 1, pb:6, px: 4, bgcolor: '#eaeff1' }}>
            <Paper sx={{ margin: 'auto', overflow: 'hidden' }}> 
                <Box sx={{p:1.5}}>
                    <Typography sx={{mb:1, fontFamily:'SUIT Variable',fontWeight:800,fontSize:'1rem' }} color="text.secondary" >
                        지원서 파일
                    </Typography>
                    <Divider />

                    {!filequery.isLoading&&<FileTable list={filequery.data.message}/>}
                </Box>
            </Paper>
        </Box>
        

        {
            filequery.isLoading||query.isLoading?
            <Box sx={{position:'fixed',left: '50%',transform:'translate(-50%, 0)',top:"50%"}}>
                <CircularProgress color="primary"/>
            </Box>
            :
            ""
        }
        </>
    )
}