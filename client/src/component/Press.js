import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";

export default function Main(){
    return(
        <Box sx={{ width:'100%',backgroundColor:'#1b1b1b',height:{xs:'120vh',md:'150%'}}}>
          <Box sx={{px:2,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',pt:20}}>
            <Box sx={{pb:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                    MEDIA
                </Typography>
                
                <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Link underline="none" color="inherit" href="https://magazine.hankyung.com/job-joy/article/202010193231b">
                        <Box sx={{display:'flex',justifyContent:'center',py:{xs:3,md:5},alignItems:'center',borderTop:1,borderColor:'white'}}>
                            <Box sx={{justifyContent:'center',width:'30%'}}>
                                <Typography color='white' fontSize={{xs:10, md:20}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                    NEWS
                                </Typography>
                            </Box>
                            <Box sx={{width:'100%'}}>
                                <Typography color='white' fontSize={{xs:10, md:20}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                    대한민국 벤처 1호 비트컴퓨터 조현정 대표가 만든 창업동아리 ‘인하벤처클럽’
                                </Typography>
                            </Box>
                        </Box>
                    </Link>

                    <Link underline="none" color="inherit" href="https://www.youtube.com/watch?v=DCJphTKqjG4">
                        <Box sx={{display:'flex',justifyContent:'center',py:{xs:3,md:5},alignItems:'center',borderTop:1,borderColor:'white'}}>
                            <Box sx={{justifyContent:'center',width:'30%'}}>
                                <Typography color='white' fontSize={{xs:10, md:20}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                    YOUTUBE
                                </Typography>
                            </Box>
                            <Box sx={{width:'100%'}}>
                                <Typography color='white' fontSize={{xs:10, md:20}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                동아리 방이 복층이라고?! 인하대 창업 동아리 인하벤처클럽을 만나다! (중앙 동아리)
                                </Typography>
                            </Box>
                        </Box>
                    </Link>
                    
                    <Link underline="none" color="inherit" href="https://www.youtube.com/watch?v=UKaTLy-sK_0">
                        <Box sx={{display:'flex',justifyContent:'center',py:{xs:3,md:5},alignItems:'center',borderTop:1,borderColor:'white'}}>
                            <Box sx={{justifyContent:'center',width:'30%'}}>
                                <Typography color='white' fontSize={{xs:10, md:20}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                    YOUTUBE
                                </Typography>
                            </Box>
                            <Box sx={{width:'100%'}}>
                                <Typography color='white' fontSize={{xs:10, md:20}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                [인하대 창업 동아리] 인하벤처클럽을 만나다 [대학교 창업 동아리]
                                </Typography>
                            </Box>
                        </Box>
                    </Link>
                    
                    <Link underline="none" color="inherit" href="http://startup.inha.ac.kr/schedule/view.htm?pageNo=2&scale=10&menuId=520&id=540">
                        <Box sx={{display:'flex',justifyContent:'center',py:{xs:3,md:5},alignItems:'center',borderTop:1,borderColor:'white'}}>
                            <Box sx={{justifyContent:'center',width:'30%'}}>
                                <Typography color='white' fontSize={{xs:10, md:20}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                    NEWS
                                </Typography>
                            </Box>
                            <Box sx={{width:'100%'}}>
                                <Typography color='white' fontSize={{xs:10, md:20}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                    인하대학교 창업지원단 스타트업 CEO_대한민국 벤처 1호 비트컴퓨터 조현정 대표가 만든 창업동아리 ‘인하벤처클럽’
                                </Typography>
                            </Box>
                        </Box>
                    </Link>
                    
                    <Link underline="none" color="inherit" href="https://www.kihoilbo.co.kr/news/articleView.html?idxno=316319">
                        <Box sx={{display:'flex',justifyContent:'center',py:{xs:3,md:5},alignItems:'center',borderTop:1,borderColor:'white'}}>
                            <Box sx={{justifyContent:'center',width:'30%'}}>
                                <Typography color='white' fontSize={{xs:10, md:20}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                    NEWS
                                </Typography>
                            </Box>
                            <Box sx={{width:'100%'}}>
                                <Typography color='white' fontSize={{xs:10, md:20}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                    인하대 '인하벤처클럽' 동아리
                                </Typography>
                            </Box>
                        </Box>
                    </Link>

                    <Link underline="none" color="inherit" href="http://m.itooza.com/view.php?ud=0000000000000021537">
                        <Box sx={{display:'flex',justifyContent:'center',py:{xs:3,md:5},alignItems:'center',borderTop:1,borderColor:'white'}}>
                            <Box sx={{justifyContent:'center',width:'30%'}}>
                                <Typography color='white' fontSize={{xs:10, md:20}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                    NEWS
                                </Typography>
                            </Box>
                            <Box sx={{width:'100%'}}>
                                <Typography color='white' fontSize={{xs:10, md:20}} sx={{ justifyContent:'center',fontFamily:'SUIT Variable',fontWeight:"bold",alignItems:'center'}}>
                                    인하벤처클럽 "특허 있어야 졸업”
                                </Typography>
                            </Box>
                        </Box>
                    </Link>
                    
                </Box>
            </Box>
          </Box>
        </Box>
    )
}