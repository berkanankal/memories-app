const express = require("express");
const { deleteAllUsers, getAllUsers } = require("../controllers/admin");

const router = express.Router();

router.get("/users", getAllUsers);
router.delete("/deleteall", deleteAllUsers);

module.exports = router;
