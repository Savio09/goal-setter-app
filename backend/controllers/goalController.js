const asyncHandler = require("express-async-handler");
//@desc Get goals
//@route GET api /api/goals
//@access Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get goals with Fortune",
  });
});

const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.anything) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({
    message: "Get goals with Fortune",
  });
});

const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update on goal ${req.params.id}`,
  });
});

const delGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Deleted goal ${req.params.id}`,
  });
});

module.exports = {
  getGoals,
  updateGoals,
  delGoals,
  postGoals,
};
