import axios from 'axios';

export async function getURL() {
    try{
        const _response = await axios.get(`/api/admin/getURL`);
        return _response.data;
    }
    catch(e){
        return e.response;
    }
}

export async function downloadFile() {
    try{
        const _response = await axios.get(`/api/admin/getFile`, {responseType : 'blob'});
        return _response.data;
    }
    catch(e){
        return e.response;
    }
}

export async function auth(){
    try{
        const _response = axios.get(`/api/admin/auth`);
        return _response;
    }
    catch(e){
        return e.response;
    }
}
