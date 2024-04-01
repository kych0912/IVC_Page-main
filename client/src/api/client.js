import axios from 'axios';

export async function getURL() {
    try{
        const _response = await axios.get(`${process.env.REACT_APP_URL}/api/admin/getURL`,{
            withCredentials:true
        });
        return _response.data;
    }
    catch(e){
        return e.response;
    }
}

export async function downloadFile() {
    try{
        const _response = await axios.get(`${process.env.REACT_APP_URL}/api/admin/getFile`,{
            responseType: 'blob',
            withCredentials:true
        });
        return _response;
    }
    catch(e){
        return e.response;
    }
}

export async function auth(){
    try{
        const _response = axios.get(`${process.env.REACT_APP_URL}/api/admin/auth`,{
            withCredentials:true
        });
        return _response;
    }
    catch(e){
        return e.response;
    }
}
