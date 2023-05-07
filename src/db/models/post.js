const knex = require("../knex");

class Post {
  constructor({ id, user_id, content, username }) {
    this.id = id;
    this.user_id = user_id;
    this.content = content;
    this.username = username;
  }

  static async list() {
    try {
      const SQL =
        "SELECT posts.*, username FROM posts JOIN users ON posts.user_id = users.id";
      const { rows } = await knex.raw(SQL);
      return rows.map((post) => new Post(post));
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Post;
