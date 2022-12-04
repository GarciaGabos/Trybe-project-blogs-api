require('dotenv/config');
const jwt = require('jsonwebtoken');

const UserServices = require('../services/user.services');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const foundUser = await UserServices.userLogin(email, password);
    if (!foundUser) return res.status(400).json({ message: 'Invalid fields' });
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    console.log(foundUser);
    const token = jwt.sign({ data: { user: foundUser } }, secret, jwtConfig);
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
  console.log(created);
  const token = jwt.sign({ data: { user } }, secret, jwtConfig);
  return res.status(201).json({ token });
};

module.exports = {
  userLogin,
  userAdd,
};
