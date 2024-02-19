import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="black" sx={{fontSize:{xs:20,md:30},fontFamily:'SUIT Variable',fontWeight:"bold"}}>창업 관련 스펙이 없어도 괜찮은가요?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="black" sx={{fontSize:{xs:13,md:20},fontFamily:'GmarketSansMedium'}}>
                그럼요! 인하벤처클럽에서는 창업에 관심만 있으면 OK 입니다!
            </Typography>
            <Typography color="black" sx={{fontSize:{xs:13,md:20},fontFamily:'GmarketSansMedium'}}>
                창업을 꿈꾼다면 누구나 인하벤처클럽에서 같이 활동할 수 있어요
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography color="black" sx={{fontSize:{xs:20,md:30},fontFamily:'SUIT Variable',fontWeight:"bold"}}>활동기간이 어떻게 되나요?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="black" sx={{fontSize:{xs:13,md:20},fontFamily:'GmarketSansMedium'}}>
            활동 기간은 한 학기입니다!
            </Typography>
            <Typography color="black" sx={{fontSize:{xs:13,md:20},fontFamily:'GmarketSansMedium'}}>
            1학기에 지원하셨다면 03~06월 까지 활동하게 됩니다.
            </Typography>
            <Typography color="black" sx={{fontSize:{xs:13,md:20},fontFamily:'GmarketSansMedium'}}>
            2학기에 지원하셨다면 09~12월 까지 활동하게 됩니다.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography color="black" sx={{fontSize:{xs:20,md:30},fontFamily:'SUIT Variable',fontWeight:"bold"}}>회비는 얼마인가요?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography color="black" sx={{fontSize:{xs:13,md:20},fontFamily:'GmarketSansMedium'}}>
                부회원의 한 학기 회비는 50,000원 입니다
            </Typography>
            <Typography color="black" sx={{fontSize:{xs:13,md:20},fontFamily:'GmarketSansMedium'}}>
                정회원의 한 학기 회비는 30,000원 입니다
            </Typography>
            <Typography color="black" sx={{fontSize:{xs:13,md:20},fontFamily:'GmarketSansMedium'}}>
                명예회원 회비는 10,000원입니다
            </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}