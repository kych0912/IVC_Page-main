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
