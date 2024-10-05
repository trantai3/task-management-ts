import mongoose from "mongoose"

const taskSchema = new mongoose.Schema(
  {
    title: String,
    status: String,
    content: String,
    timeStart: Date,
    timeFinish: Date,
    createdBy: String,
    listUser: Array,
    taskParentId: String,
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
)

const Task = mongoose.model("Task", taskSchema, "tasks")

export default Task // dùng khi biết có 1 chỗ cần export (dùng 1 lần duy nhất) còn không dùng export const 