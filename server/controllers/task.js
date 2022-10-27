const express = require("express")
const Task = require("../model/task");
const app = express();

app.use(express.json());

const DeleteAllTask = async (req, res) => {
  try {
    const tasks = await Task.deleteMany({});
    if (!tasks) {
      return res.status(404).json({
        status: "failed",
        message: "Can't get all users",
      });
    }

    res.status(200).json(tasks);
  } catch (err) {
    res.status(err.status || err.statusCode || 500).json(err.message);
  }
};
const GetTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    if (!tasks) {
      return res.status(404).json({
        status: "failed",
        message: "Can't get all users",
      });
    } 

    res.status(200).json(tasks);
  } catch (err) {
    res.status(err.status || err.statusCode || 500).json(err.message);
  }
};

const PostTask = async (req, res) => {
  
  try {
    const tasks = await Task.create(req.body);
    // res.send(tasks);
    if (!tasks) {
      return res.status(404).json({
        status: "failed",
        message: "Can't create user",
      });
    }

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const GetSingleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    // res.send(tasks);
    if (!task) {
      return res.status(404).json({
        status: "failed",
        message: "Can't get user",
      });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json("something went wrong");
  }
};

const UpdateTask = async (req, res) => {
  try {
    const { id: TaskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: TaskId }, req.body, {
      new: true,
      runValidators: true,
    });
    // res.send(tasks);
    if (!task) {
      return res.status(404).json({
        status: "failed",
        message: "Can't get user",
      });
    }

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const DeleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({_id: req.params.id});
 

    if (!task) {
      return res.status(404).json({
        status: "failed",
        message: "Can't find user",
      });
    }

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  GetSingleTask,
  GetTask,
  DeleteTask,
  PostTask,
  UpdateTask,
  DeleteAllTask
};
