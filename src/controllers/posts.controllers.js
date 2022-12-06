const PostsServices = require('../services/posts.services');

const postNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const user = await PostsServices.createBlogPost({ title, content, categoryIds });
  return res.status(201).json(user);
};

const listAllPost = async (_req, res) => {
    const user = await PostsServices.listAll();
    return res.status(200).json(user);
  };

module.exports = {
    postNewPost,
    listAllPost,
};