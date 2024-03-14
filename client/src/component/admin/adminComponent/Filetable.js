import { Paper, Box, Typography, Switch, CircularProgress } from "@mui/material"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import {selectFile} from "../../../api/admin";
const {useMutation,useQueryClient,useQuery} = require('react-query');

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default function URLtable(props){
  const {list} = props;

  const queryClient = useQueryClient()
  const { mutate, isLoading, isError, error } = useMutation(selectFile,{
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['file'] })
    },
  });

  function getFullYmdStr(d){
    //년월일시분초 문자열 생성
    return d.getFullYear() + "년 " + (d.getMonth()+1) + "월 " + d.getDate() + "일 " + d.getHours() + "시 " + d.getMinutes() + "분 " + d.getSeconds() + "초 " +  '일월화수목금토'.charAt(d.getUTCDay())+'요일';
  }

  return(
    <>
      <TableContainer component={Paper} sx={{mt:1,overflowX:'auto',width:"100%",maxHeight:"400px"}}>
          <Table sx={{  display: 'table', tableLayout: 'fixed' }} aria-label="simple table" stickyHeader>
              <TableHead>
              <TableRow>
                  <TableCell>
                      <Typography variant="body1" sx={{fontFamily:'SUIT Variable',fontWeight:800,fontSize:'0.75rem'}} color="text.secondary" >
                          파일명
                      </Typography>
                  </TableCell>
                  <TableCell>
                      <Typography variant="body1" sx={{fontFamily:'SUIT Variable',fontWeight:800,fontSize:'0.75rem'}} color="text.secondary" >
                          등록 시간
                      </Typography>
                  </TableCell>
                  <TableCell align="right">
                      <Typography variant="body1" sx={{fontFamily:'SUIT Variable',fontWeight:800,fontSize:'0.75rem'}} color="text.secondary" >
                          공개/비공개
                      </Typography>
                  </TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              {list.map((row,index) => (
                  <TableRow
                  key={row.seq}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                  <TableCell component="th" scope="row">
                      <Typography variant="body1" sx={{fontFamily:'SUIT Variable',fontWeight:800,fontSize:'0.75rem', whiteSpace:'nowrap',overflow:'hidden', textOverflow:'ellipsis'}} color="text.secondary" >
                          {row.filename}
                      </Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                      <Typography variant="body1" sx={{fontFamily:'SUIT Variable',fontWeight:800,fontSize:'0.75rem'}} color="text.secondary" >
                      {getFullYmdStr(row.time)}
                      </Typography>
                  </TableCell>
                  <TableCell align="right">
                      <IOSSwitch 
                          checked={row.selected}
                          onChange={()=>mutate(row.seq)
                      }/>
                    </TableCell>
                  </TableRow>
              ))}
              </TableBody>
          </Table>
      </TableContainer>

      {
            isLoading?
            <Box sx={{position:'fixed',left: '50%',transform:'translate(-50%, 0)',top:"50%"}}>
                <CircularProgress color="primary"/>
            </Box>
            :
            ""
        }
      </>
    )
}