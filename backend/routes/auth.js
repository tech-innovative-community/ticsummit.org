const {
  login,
  register,
  deleteUser,
  getAllUsers,
} = require("../controllers/userController");
const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.delete("/delete", deleteUser);

router.get("/users", getAllUsers);

module.exports = router;
