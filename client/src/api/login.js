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

export async function logOut(){
    try{
        const _response = await axios.get(`/api/admin/logout`);
        return _response.data;
    }
    catch(e){
        return e;
    }
}
