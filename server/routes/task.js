const express = require("express");
const router = express.Router();
const {
  GetTask,
  PostTask,
  DeleteTask,
  GetSingleTask,
  UpdateTask,
  DeleteAllTask
} = require("../controllers/task");
router.route("/").get(GetTask).post(PostTask).delete(DeleteAllTask);

router.route("/:id").get(GetSingleTask).patch(UpdateTask).delete(DeleteTask);

module.exports = router;
