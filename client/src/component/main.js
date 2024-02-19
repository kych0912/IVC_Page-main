import '../App.css';
import {Container,Box} from "@mui/material";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";


const cards = ["https://ivcpageimg.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2022-12-18-17-09-30+025.jpeg"
                , "https://ivcpageimg.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2022-12-18-17-12-45+001.jpeg"
                , "https://ivcpageimg.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2022-12-18-17-25-45+005.jpeg"];

const cards_title = ["정기 총회 및 네트워킹","10만원 프로젝트","우린 스타트업"];
const cards_content = ["창업에 대한 기본적인","10만원 예산 내에서","린 스타트업에 대해 학습,"];
const cards_content1 = ["지식 학습 및 실행하는 과정","최고의 성과를 내기위해 경쟁"," 그리고 실전창업"];

export default function Main(){
    const navigate = useNavigate();
    
    const onRecruitHandler = () =>{
        navigate("/Recruit")
    }

    return(
        <Box sx={{textAlign:'center',backgroundColor:'black',width:'100%'}}>
            <header className="App-header">
                <p className='mainslogun'>
                    IN your VENture, 
                </p>
                <p className='mainslogun1'>
                    With our IVC
                </p>
            </header>

            <Container sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Box sx={{flexDirection:'column',display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                    <Typography color='white'sx={{ justifyContent:'center',fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', py:2,fontSize:30}}>
                        인하벤처클럽은,
                    </Typography>
                    <Container sx={{width:'100%',height:'80vh',minHeight:'60vh'}}>
                        <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:'60vh'}}>
                            <Box sx={{display:'flex',justifyContent:'center',height:'80%',width:'100%',alignItems:'center',flexDirection:'column',borderRight:1,borderColor:'white'}}>
                                <Typography color='white' fontSize={{xs:15, md:30}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                    인하대학교 대표
                                </Typography>
                                <Typography color='white' fontSize={{xs:15, md:30}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                    창업동아리
                                </Typography>
                                <Box sx={{pt:8}}>
                                    <Typography color='white' fontSize={{xs:15, md:30}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                        창업지원단 소속
                                    </Typography>
                                    <Typography color='white' fontSize={{xs:15, md:30}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center',pt:1.5}}>
                                        인하대학교 직할
                                    </Typography>
                                    <Typography color='white' fontSize={{xs:15, md:30}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center',pt:1.5}}>
                                        창업동아리
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{display:'flex',justifyContent:'center',height:'100%',width:'100%',alignItems:'center',flexDirection:'column',pl:{xs:1}}}>
                                <Box>
                                    <Typography color='white' fontSize={{xs:15, md:30}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:5}}>
                                        전통이 있는 동아리
                                    </Typography>
                                    <Typography color='white' fontSize={{xs:10, md:17}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',alignItems:'center', pt:1}}>
                                        1997년 조현정 회장님에 의해 설립
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='white' fontSize={{xs:15, md:30}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:5}}>
                                        창업에 강한 동아리
                                    </Typography>
                                    <Typography color='white' fontSize={{xs:10, md:17}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',alignItems:'center', pt:1}}>
                                        매년 3팀 이상의 창업
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='white' fontSize={{xs:15, md:30}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:5}}>
                                        능력있는 사람들의
                                    </Typography>
                                    <Typography color='white' fontSize={{xs:15, md:30}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                        모임
                                    </Typography>
                                    <Typography color='white' fontSize={{xs:10, md:17}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',alignItems:'center', pt:1}}>
                                        2022년 20개 이상의 수상
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Container>

            <Container sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Box sx={{flexDirection:'column',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Typography color='white'sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:8,fontSize:30}}>
                        주요 활동
                    </Typography>
                    <Box>
                    <Container sx={{ py: 5  }} >
                            {/* End hero unit */}
                            <Grid container px={{xs:0,md:5}} py={5} width='100%'>
                                {cards.map((card,index) => (
                                <Grid px={3} py = {4} item key={card} xs={12} sm={4} md={4}>
                                    <Card
                                    sx={{height: "100%", display: 'flex', flexDirection: 'column' }}
                                    >
                                    <CardMedia
                                        component="img"
                                        image={cards[index]}
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2" sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                            {cards_title[index]}
                                        </Typography>
                                        <Typography sx={{ fontSize:18 ,justifyContent:'center',fontFamily:'  Variable',fontWeight:"bold",alignItems:'center'}}>
                                            {cards_content[index]}  
                                        </Typography>
                                        <Typography sx={{ fontSize:18 ,justifyContent:'center',fontFamily:'  Variable',fontWeight:"bold",alignItems:'center'}}>
                                            {cards_content1[index]}  
                                        </Typography>
                                    </CardContent>
                                    </Card>
                                </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Box>
                </Box>
            </Container>

            <Container sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Box sx={{flexDirection:'column',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <Typography fontSize={{xs: 25, md: 25}} color='white'sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:8,fontSize:30}}>
                            신입부원 모집
                        </Typography>

                    <Box sx={{display:'flex', maxWidth:'750px',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                        <Box sx={{display:'flex'}}>
                            <Typography color='white' fontSize={{xs:20, md:25}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',alignItems:'center', pt:8}}>
                                당신의 &nbsp;
                            </Typography>
                            <Typography color='white' fontSize={{xs:20, md:25}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:8}}>
                                새로운 도전에
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex'}}> 
                            <Typography color='white' fontSize={{xs:20, md:25}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center', pt:3}}>
                                인하벤처클럽이 &nbsp;
                            </Typography>
                            <Typography color='white' fontSize={{xs:20, md:25}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',alignItems:'center', pt:3}}>
                                함께하기를
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{pb:10 ,px:10,pt:7}}>
                        <Link underline="none" color="inherit" href={"/Recruit"}>
                            <Button variant="contained" color="inherit" size="large" sx={{px:6, py:3}}>
                                <Typography fontSize={{xs: 20, md: 25}} color='black'sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                    지원하기
                                </Typography>
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}