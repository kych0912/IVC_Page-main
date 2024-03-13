import { Paper, Box, Typography, Divider } from "@mui/material"
import UrlTable from "./URLtable"
import FileTable from "./Filetable"

export default function EditTable() {
    return (
        <>
        <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            <Paper sx={{  margin: 'auto', overflow: 'hidden' }}> 
                <Box sx={{p:1.5,display:'flex',flexDirection:"column",margin:"auto"}}>
                    <Typography sx={{mb:1, fontFamily:'SUIT Variable',fontWeight:800,fontSize:'1rem' }} color="text.secondary" >
                        제출 URL
                    </Typography>
                    
                    <Divider />

                    <UrlTable/>
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
        </>
    )
}