import {Box, Typography, Input,Button} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading(){
    return(
        <Box sx={{width:'100%',backgroundColor:'#3D3D3D',height:'100vh'}}>
            <Box sx={{position:'fixed',left: '50%',transform:'translate(-50%, 0)',top:"50%"}}>
                    <CircularProgress color="primary"/>
            </Box>
        </Box>
    )
}