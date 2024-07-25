const express = require("express");
const router = express.Router();
const {
  getGoals,
  delGoals,
  postGoals,
  updateGoals,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(postGoals);
router.route("/:id").put(updateGoals).delete(delGoals);

module.exports = router;
