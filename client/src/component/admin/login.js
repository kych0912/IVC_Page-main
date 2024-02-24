import {Box, Typography, Input,Button} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import { getLogin } from '../../api/login';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);

    const navigate = useNavigate();

    const disabled = id === '' || password === '';

    const handleId = (e) => {
        setId(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await getLogin(id,password);

        if(response.loginSuccess){
            navigate('/admin/edit');
        }
        else{
            alert('로그인 실패');
        }
        setLoading(false);
    }

    useEffect(()=>{
        console.log(loading);
    },[loading])

    return(
        <Box sx={{width:'100%',backgroundColor:'#3D3D3D',height:'100vh'}}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:'100%',flexDirection:"column"}}>
                <Typography sx={{fontFamily:'SUIT Variable',fontWeight:"bold",color:"white",fontSize:'50px'}}>
                    ADMIN Login
                </Typography>

                <form>
                    <Input onChange={handleId} sx={{width:'100%',fontFamily:'Pretendard Variable',fontWeight:'600',fontSize:'22px'}}/>
                    <Input onChange={handlePassword} sx={{width:'100%',fontFamily:'Pretendard Variable',fontWeight:'600',fontSize:'22px'}}/>

                    <Button onClick = {handleSubmit} disabled={disabled} type = "submit" variant="contained" color="primary" sx={{width:'100%',height:'40px',borderRadius:'10px',boxShadow:0,my:2}}>
                        <Typography sx={{fontFamily:'Pretendard Variable',fontSize:'16px',fontWeight:"bold"}}>
                            로그인
                        </Typography>
                    </Button>
                </form>
            </Box>

            {
                loading?
                <Box sx={{position:'fixed',left: '50%',transform:'translate(-50%, 0)',top:"50%"}}>
                        <CircularProgress color="primary"/>
                </Box>
                :
                ""
            }
        </Box>
    )
}