const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const {checkAuth} = require("../middleware/auth");
const router = express.Router();

router.post("/", checkAuth, createTask);
router.get("/", checkAuth, getTasks);
router.put("/:id", checkAuth, updateTask);
router.delete("/:id", checkAuth, deleteTask);

module.exports = router;
