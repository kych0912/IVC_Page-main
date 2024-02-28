import { Box, Typography,Input, CircularProgress, Button } from "@mui/material"
import { useState } from "react"
import { editURL } from "../../api/login"
import Auth from "../../hoc/auth"

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
        <Box sx={{width:'100%',backgroundColor:'#3D3D3D',height:'100vh'}}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:'100%',flexDirection:"column"}}>
                <Typography sx={{fontFamily:'SUIT Variable',fontWeight:"bold",color:"white",fontSize:'50px'}}>
                    EDIT SUBMIT URL
                </Typography>


                <Box sx={{width:"50%"}}>
                    <Input onChange={handleURL} sx={{width:'100%',fontFamily:'Pretendard Variable',fontWeight:'600',fontSize:'22px'}}/>   
                    <Button onClick = {handleSubmit} type = "submit" variant="contained" color="primary" sx={{width:'100%',height:'40px',borderRadius:'10px',boxShadow:0,my:2}}>
                        <Typography sx={{fontFamily:'Pretendard Variable',fontSize:'16px',fontWeight:"bold"}}>
                            제출 URL 수정
                        </Typography>
                    </Button> 
                </Box>
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

export default Auth(Admin);