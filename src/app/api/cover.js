import api from './api';



const cover = async({coverId})=>{
    
    try{

        const data = await api.get(`/cover/${coverId}`)
        return data.data.data

    }catch(e){

        throw e
    }
}


export default cover;