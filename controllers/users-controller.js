import users from './users.js';

const userController = (app) => {
  app.get('/api/users', findAllUsers);
  app.get('/api/users/:uid', findUserById);
}

const findAllUsers = (req, res) => {
  const type = req.query.type;
  if (type) {
    res.json(findUsersByType(type));
    return;
  }

  res.json(users);
}

const findUsersByType = (type) => {
  return users.filter(user => user.type === type)
}

const findUserById = (req, res) => {
  const userId = req.params.uid;
  const user = users.find(u => u._id === userId);
  res.json(user);
}


export default userController;
