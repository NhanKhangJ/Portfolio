import * as api from '../api'

export const createMessage = (message) => async (dispath) =>{
    try{
        const {data} = await api.createMessage(message);
        dispath({type: 'CREATE', payload: data})
    } catch(error){
        console.log(error)
    }
}