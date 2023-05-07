const list = require('./list');
const create = require('./create');
const show = require('./show');
const update = require('./update');

const login = require('./login');
const logout = require('./logout');
const showMe = require('./show-me');
const listPosts = require('./listPosts')

module.exports = {
  list,
  create,
  show,
  update,
  listPosts,
  login,
  logout,
  showMe,
};
