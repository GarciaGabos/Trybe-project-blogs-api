const { User, Category, BlogPost } = require('../models');

const createBlogPost = async ({ title, content, categoryIds }) => {
    const newBlog = await BlogPost.create({ title, content, categoryIds });
    return newBlog;
  };

const listAll = async () => {
    const user = await BlogPost.findAll({
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories' }],
      });
    return user;
  };

  module.exports = { 
    listAll,
    createBlogPost,
  };