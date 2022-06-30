const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    taks: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    checked_date: {
      type: Date,
      default: undefined,
    },
  },
  { timestamps: { createdAt: "created at" } }
);

module.exports = mongoose.model("task", taskSchema);
