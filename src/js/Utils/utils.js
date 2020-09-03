import jsonPlaceholder from '../API/jsonPlaceholder'

let users = undefined;

const getUser = async function(id){
    let user = await jsonPlaceholder.get(`users/${id}`)
    return user.data;
}

const loadUsers = async function(){
    if(users == undefined) 
        users = await jsonPlaceholder.get('users');
}

export default {getUser, loadUsers}