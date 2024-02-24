import axios from 'axios';

export async function getLogin(id,password) {
    try{
        const _response = await axios.post(`/api/admin/login`,{
            name:id,
            password:password
        });

        return _response.data;
    }
    catch(e){
        return e.response;
    }
}

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