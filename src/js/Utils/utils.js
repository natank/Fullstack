import jsonPlaceholder from '../API/jsonPlaceholder'

const getUser = async function(id){
    let user = await jsonPlaceholder.get(`users/${id}`)
    return user.data;
}

export default {getUser}