import { Box, Typography,InputBase, CircularProgress, Button,Toolbar,Grid,TextField, Paper, Tooltip,IconButton } from "@mui/material"
import Divider from '@mui/material/Divider';    
import { useState } from "react"
import { editURL } from "../../../api/admin"
import Auth from "../../../hoc/auth"

function Admin(){
    const [url,setUrl] = useState('')
    const [loading,setLoading] = useState(false)

    const handleURL = (e) =>{
        setUrl(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        const response = await editURL(url);

        if(response.success){
            alert('수정 성공');
        }
        else{
            alert('수정 실패');
        }
        setLoading(false);
    }

    return(
        <Box sx={{}}>
        <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}> 
            <Box sx={{p:1.5}}>
                <Typography sx={{mb:1, fontFamily:'SUIT Variable',fontWeight:800,fontSize:'1rem' }} color="text.secondary" >
                    제출 URL 수정
                </Typography>
                <Divider />

                <Typography sx={{ my: 1,fontFamily:'SUIT Variable',fontWeight:800,fontSize:'0.75rem' }} color="text.secondary" >
                    구글 폼 URL
                </Typography>

                <form>
                    <InputBase onChange={handleURL} 
                        inputProps={{
                            style:{
                                padding:0,
                            }
                        }}
                        sx={{
                            width:"100%",
                            fontFamily:'SUIT Variable',
                            border:"0.0625rem solid rgb(210, 214, 218)"
                            ,borderRadius:'8px'
                            ,p:'0.5rem'
                        }}
                        required={true}
                    />
                    <Button disabled={!url} onClick = {handleSubmit} type = "submit" variant="contained" color="primary" sx={{width:'100%',height:'35px',borderRadius:'10px',boxShadow:0,my:2}}>
                        <Typography sx={{fontFamily:'Pretendard Variable',fontSize:'16px',fontWeight:"bold"}}>
                            제출 URL 수정
                        </Typography>
                    </Button> 
                </form>

                
                {
                    loading?
                    <Box sx={{position:'fixed',left: '50%',transform:'translate(-50%, 0)',top:"50%"}}>
                        <CircularProgress color="primary"/>
                    </Box>
                    :
                    ""
                }
            </Box>           
        </Paper>
        </Box>
    )
}

export default Auth(Admin);