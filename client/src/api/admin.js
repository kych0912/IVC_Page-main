import axios from 'axios';

export async function editURL(url){
    try{
        const body = {
            url:url
        }

        const _response = await axios.post(`/api/admin/editURL`,body);
        return _response.data;
    }
    catch(e){
        return e.response;
    }
}

export async function editFile(base64){
    try{
        const body={
            file:base64[0]
        }
        
        const _response = await axios.post(`/api/admin/uploadFile`,body);
        return _response.data;
    }
    catch(e){
        return e.response;
    }
}

export async function getURLs(){
    try{
        const _response = await axios.get(`/api/admin/getURLs`);
        return _response.data;
    }
    catch(e){
        return e.response;
    }
}

export async function selectURL(id){
    try{
        const _response = await axios.get(`/api/admin/selectURL/${id}`);
        return _response.data;
    }
    catch(e){
        return e.response;
    }
}
