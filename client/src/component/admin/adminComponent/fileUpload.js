import * as React from 'react';
import { Box } from '@mui/system';
import { Button,Typography } from '@mui/material';
import styled from "styled-components"
import CancelIcon from '@mui/icons-material/Cancel';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
    display: 'inline-block',
    cursor: 'pointer'
  });

export default function Navbar(props) {
    const {file,setFile,name,setName} = props;

    const onDropFiles = (e) => {
        e.preventDefault()
        setName(e.dataTransfer.files[0].name);
        handleImageUpload(e.dataTransfer.files);
    };

    const dragOver = (e) => {
        e.preventDefault()
    };

    const onClickFileUpload = (e) => {
        setName(e.target.files[0].name);
        handleImageUpload(e.target.files);
    };

    const handlefile = () =>{
        setFile([]);
    }


    const encodeFileToBase64 = (image) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(image);    
            reader.onload = (event) => resolve(event.target.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleImageUpload = async (e) => {
        setFile([]);
        if(e[0] === undefined) return;

        let file = e[0];

        if (file.type !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            alert(`docx 파일만 가능합니다.`);
        } else {
            try {
                const data = await encodeFileToBase64(file);

                setFile((prev) => [...prev, data ]);
            } catch (error) {
                console.error(error);
            }
        }
    };

  return (
    <Box
        onDrop={onDropFiles}
        onDragOver={dragOver}     
        sx={{display:'flex',justifyContent:"center",alignItems:"center",width:'100%',minHeight:'150px',border:'0.0625rem solid rgb(210, 214, 218)',borderRadius:"8px"}}
    >

        {
            file.length > 0?
            <Box sx={{position:"relative",width:'120px',height:'120px',display:'flex',justifyContent:"center",alignItems:"center",background:'linear-gradient(180deg, #eee, #ddd);',borderRadius:'20px'}}>
                <Typography sx={{ fontFamily:'SUIT Variable',fontWeight:800,fontSize:'0.9rem',whiteSpace:'nowrap',overflow:"hidden",textOverflow:"ellipsis",width:'100%',px:1.5 }} color="text.secondary" >
                    {name.length?name:'docx 파일'}
                </Typography>
                <CancelIcon onClick={handlefile} sx={{color:'rgb(52, 71, 103)',position:"absolute",fontSize:'30px',right:'7px',top:"7px"}}/>
            </Box>


            :
            <Label for="input-file">
                <Typography sx={{ fontFamily:'SUIT Variable',fontWeight:800,fontSize:'0.9rem' }} color="text.secondary" >
                    파일을 업로드 혹은 드래그 해주세요
                </Typography>
            </Label>
        }
    
        <VisuallyHiddenInput
            id="input-file"
            name="photo_file"
            accept=".docx"
            onChange={onClickFileUpload}
            type="file"
        />
    </Box>
  );
}

const Label = styled.label`
    width:100%;
    min-height:150px;
    align-items:center;
    display:flex;
    justify-content:center;
`;