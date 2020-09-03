import jsonPlaceholder from '../API/jsonPlaceholder'

let users = undefined;

const getUser = function(id){
    let user = users.find(user=>user.id == id)
    return user;
}

const updateUser = function(settings){
    let user = getUser(settings.userId);
    user.name = settings.name;
    user.email = settings.email;
}

const loadUsers = async function(){
    if(users == undefined){
        users = await jsonPlaceholder.get('users');
        users = users.data
    } 
}

export default {getUser, loadUsers, updateUser}