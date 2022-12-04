const { User } = require('../models');

const userLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  console.log(user);
  return user;
};

const userAddUser = async (email, password, displayName) => {
  const [user, created] = await User.findOrCreate({ 
    where: { email },
    defaults: { email, password, displayName, image: '' },
  });
  return { user, created };
};

module.exports = { userLogin, userAddUser };