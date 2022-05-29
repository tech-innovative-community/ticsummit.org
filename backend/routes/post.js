const {
  getAllPost,
  singlePost,
  Post,
  deletePost,
} = require("../controllers/postController");
const router = require("express").Router();

router.post("/", Post);
router.get("/", getAllPost);
router.get("/:id", singlePost);
router.delete("/:id", deletePost);

module.exports = router;
