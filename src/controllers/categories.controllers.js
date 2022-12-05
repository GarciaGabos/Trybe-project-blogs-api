const CategoriesServices = require('../services/categories.services');

const postNewCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' }); 
  const user = await CategoriesServices.newCategory(name);
  return res.status(201).json(user);
};

const categoryListAll = async (_req, res) => {
  const user = await CategoriesServices.categoryAll();
  return res.status(200).json(user);
};

module.exports = {
    postNewCategory,
    categoryListAll,
};
