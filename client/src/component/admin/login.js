import {Box, Typography, Input,Button} from '@mui/material';
import { useState } from 'react';

export default function Login(){
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');

    const disabled = id === '' || password === '';

    const handleId = (e) => {
        setId(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    return(
        <Box sx={{width:'100%',backgroundColor:'#3D3D3D',height:'100vh'}}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:'100%',flexDirection:"column"}}>
                <Typography sx={{fontFamily:'SUIT Variable',fontWeight:"bold",color:"white",fontSize:'50px'}}>
                    ADMIN Login
                </Typography>

                <form>
                    <Input onChange={handleId} sx={{width:'100%',fontFamily:'Pretendard Variable',fontWeight:'600',fontSize:'22px'}}/>
                    <Input onChange={handlePassword} sx={{width:'100%',fontFamily:'Pretendard Variable',fontWeight:'600',fontSize:'22px'}}/>

                    <Button disabled={disabled} type = "submit" variant="contained" color="primary" sx={{width:'100%',height:'40px',borderRadius:'10px',boxShadow:0,my:2}}>
                        <Typography sx={{fontFamily:'Pretendard Variable',fontWeight:'500',fontSize:'16px',fontWeight:"bold"}}>
                            로그인
                        </Typography>
                    </Button>
                </form>
            </Box>

        </Box>
    )
}