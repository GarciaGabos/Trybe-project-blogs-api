const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    if (email.length === 0 || password.length === 0) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    } 
    next();
  };

const validadeNewUser = async (req, res, next) => {
    const { password, displayName } = req.body;
    if (password.length < 6) {
      return res.status(400).json({ 
        message: '"password" length must be at least 6 characters long' });
    } 
    if (displayName.length < 8) {
       return res.status(400).json({ 
        message: '"displayName" length must be at least 8 characters long' });
    }
    next();
  };

  const validateEmail = (req, res, next) => {
    const { email } = req.body;
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const validation = regex.test(email);
  
    if (validation === false) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }
  
    return next();
  };
  
  module.exports = {
    validateLogin,
    validateEmail,
    validadeNewUser,
  };