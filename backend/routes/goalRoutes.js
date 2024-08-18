const express = require("express");
const router = express.Router();
const {
  getGoals,
  delGoals,
  postGoals,
  updateGoals,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, postGoals);
router.route("/:id").put(protect, updateGoals).delete(protect, delGoals);

module.exports = router;
