import axios from 'axios';

export async function editURL(url){
    try{
        const body = {
            url:url
        }

        const _response = await axios.post(`${process.env.REACT_APP_URL}/api/admin/editURL`,body);
        return _response.data;
    }
    catch(e){
        return e.response;
    }
}

export async function editFile(filename,base64){
    try{
        const body={
            name:filename,
            file:base64[0]
        }
        
        const _response = await axios.post(`${process.env.REACT_APP_URL}/api/admin/uploadFile`,body);
        return _response.data;
    }
    catch(e){
        return e.response;
    }
}

export async function getURLs(){
    try{
        const _response = await axios.get(`${process.env.REACT_APP_URL}/api/admin/getURLs`);
        return _response.data;
    }
    catch(e){
        return e.response;
    }
}

export async function selectURL(id){
    try{
        const _response = await axios.put(`${process.env.REACT_APP_URL}/api/admin/selectURL/${id}`);
        return _response.data;
    }
    catch(e){
        return e.response;
    }
}

export async function getFiles(){
    try{
        const _response = await axios.get(`${process.env.REACT_APP_URL}/api/admin/getFiles`);
        return _response.data;
    }
    catch(e){
        return e.response;
    }
}

export async function selectFile(id){
    try{
        const _response = await axios.put(`${process.env.REACT_APP_URL}/api/admin/selectFile/${id}`);
        return _response.data;
    }
    catch(e){
        return e.response;
    }
}

export async function getFileBySeq(id){
    try{
        const _response = await axios.get(`${process.env.REACT_APP_URL}/api/admin/getFile/${id}`,{
            responseType: 'blob'
        });
        return _response;
    }
    catch(e){
        return e.response;
    }
}

export async function deleteURL(id){
    try{
        const _response = await axios.delete(`${process.env.REACT_APP_URL}/api/admin/deleteURL/${id}`);
        return _response.data;
    }
    catch(e){
        return e.response;
    }
}

export async function deleteFile(id){
    try{
        const _response = await axios.delete(`${process.env.REACT_APP_URL}/api/admin/deleteFile/${id}`);
        return _response.data;
    }
    catch(e){
        return e.response;
    }
}