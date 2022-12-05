require('dotenv/config');
const jwt = require('jsonwebtoken');

const UserServices = require('../services/user.services');

const secret = process.env.JWT_SECRET;

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserServices.userLogin(email, password);
  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };
  console.log(user.dataValues.id);
  // const { id } = user;
  // console.log(id);
  console.log(secret);
  const token = jwt.sign({ data: { userId: user.dataValues.id } }, secret, jwtConfig);
  return res.status(200).json({ token });
};

const userAdd = async (req, res) => {
  const { email, password, displayName } = req.body;
  const { user, created } = await UserServices.userAddUser(email, password, displayName);
  if (!created) return res.status(409).json({ message: 'User already registered' });
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const { id } = user;
  const token = jwt.sign({ data: { userId: id } }, secret, jwtConfig);
  return res.status(201).json({ token });
};

const userListAll = async (_req, res) => {
  const user = await UserServices.userAll();
  console.log(user.dataValues);
  return res.status(200).json(user);
};

const userListById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const user = await UserServices.getByUserId(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

module.exports = {
  userLogin,
  userAdd,
  userListAll,
  userListById,
};
