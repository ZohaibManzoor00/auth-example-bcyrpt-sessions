const postRouter = require("express").Router();
const addModels = require("./middleware/add-models");
const postController = require("./controllers/post");

postRouter.use(addModels);

postRouter.get("/posts", postController.list);

module.exports = postRouter;
