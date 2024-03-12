import { Paper, Box, Typography, Divider } from "@mui/material"
import UrlTable from "./URLtable"

export default function EditTable() {
    return (
        <>
        <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}> 
                <Box sx={{p:1.5}}>
                    <Typography sx={{mb:1, fontFamily:'SUIT Variable',fontWeight:800,fontSize:'1rem' }} color="text.secondary" >
                        제출 URL 수정
                    </Typography>
                    
                    <Divider />

                    <UrlTable/>
                </Box>
            </Paper>
        </Box>

        <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}> 
                <Box sx={{p:1.5}}>
                    <Typography sx={{mb:1, fontFamily:'SUIT Variable',fontWeight:800,fontSize:'1rem' }} color="text.secondary" >
                        제출 URL 수정
                    </Typography>
                    <Divider />

                    <Typography sx={{ my: 1,fontFamily:'SUIT Variable',fontWeight:800,fontSize:'0.75rem' }} color="text.secondary" >
                        구글 폼 URL
                    </Typography>  
                </Box>
            </Paper>
        </Box>
        </>
    )
}