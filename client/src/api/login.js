import axios from 'axios';

export async function getLogin(id,password) {
    try{
        const _response = await axios.post(`${process.env.REACT_APP_URL}/api/admin/login`,{
            name:id,
            password:password
        },{
            withCredentials:true
        });

        return _response.data;
    }
    catch(e){
        return e.response;
    }
}

export async function logOut(){
    try{
        const _response = await axios.get(`${process.env.REACT_APP_URL}/api/admin/logout`);
        return _response.data;
    }
    catch(e){
        return e;
    }
}
