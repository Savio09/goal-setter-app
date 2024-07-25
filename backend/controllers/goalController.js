const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
//@desc Get goals
//@route GET api /api/goals
//@access Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({});
  res.status(200).json(goals);
});

const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  console.log(updatedGoal);
  res.status(200).json(updatedGoal);
});

const delGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Unspecified goal to delete");
  }
  await goal.deleteOne();
  res.status(200).json({
    id: req.params.id,
  });
});

module.exports = {
  getGoals,
  updateGoals,
  delGoals,
  postGoals,
};
