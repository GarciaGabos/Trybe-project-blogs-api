const { Category } = require('../models');

const newCategory = async (name) => {
    const user = await Category.create({ name });
    return user;
  };

const categoryAll = async () => {
    const user = await Category.findAll();
    return user;
  };

  module.exports = { 
    newCategory,
    categoryAll,
  };