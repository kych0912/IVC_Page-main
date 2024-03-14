import { Box, Typography,InputBase, CircularProgress, Button,Toolbar,Grid,TextField, Paper, Tooltip,IconButton } from "@mui/material"
import Divider from '@mui/material/Divider';    
import { useEffect, useState } from "react"
import Auth from "../../../hoc/auth"
import Upload from "./fileUpload";
import {editFile} from "../../../api/admin"

function Admin(){
    const [loading,setLoading] = useState(false)
    const [file,setFile] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        const response = await editFile(file);

        if(response.success){
            alert('수정 성공');
        }
        else{
            alert('수정 실패');
        }
        setLoading(false);
    }

    return(
        <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}> 
            <Box sx={{p:1.5}}>
                <Typography sx={{mb:1, fontFamily:'SUIT Variable',fontWeight:800,fontSize:'1rem' }} color="text.secondary" >
                    지원서 파일 수정
                </Typography>
                <Divider />

                <Typography sx={{ my: 1,fontFamily:'SUIT Variable',fontWeight:800,fontSize:'0.75rem' }} color="text.secondary" >
                    파일 업로드
                </Typography>
            
                <Upload file={file} setFile={setFile}/>   
                <Button disabled={!file.length} onClick = {handleSubmit} type = "submit" variant="contained" color="primary" sx={{width:'100%',height:'35px',borderRadius:'10px',boxShadow:0,my:2}}>
                    <Typography sx={{fontFamily:'Pretendard Variable',fontSize:'16px',fontWeight:"bold"}}>
                        지원서 파일 수정
                    </Typography>
                </Button> 

                
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
    )
}

export default Auth(Admin);