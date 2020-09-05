import jsonPlaceholder from "../API/jsonPlaceholder";

let getUsers = async () => {
  const users = await jsonPlaceholder.get('/users')
  return users.data
}

let getUser = async id => {
  let user = await jsonPlaceholder.get(`/users/${id}`);

  return user;
};

export { getUsers, getUser }
