const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("all items");
};

const createTasks = (req, res) => {
  res.json(req.body);
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("update Task");
};
const deleteTasks = (req, res) => {
  res.send("delete Task");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTasks,
};
