const { User } = require('../models');

const userLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

const userAddUser = async (email, password, displayName) => {
  const [user, created] = await User.findOrCreate({ 
    where: { email },
    defaults: { email, password, displayName, image: '' },
  });
  return { user, created };
};

const userAll = async () => {
  const user = await User.findAll({ attributes: { exclude: ['password'] } });
  return user;
};

const getByUserId = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  return user;
};

module.exports = { 
  userLogin, 
  userAddUser, 
  getByUserId,
  userAll,
};