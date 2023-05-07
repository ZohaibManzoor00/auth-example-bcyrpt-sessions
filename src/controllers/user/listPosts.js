const listPosts = async (req, res) => {
    const { User } = req.db;
    const posts = await User.listPosts();
    res.send(posts);
};
  
module.exports = listPosts;
  