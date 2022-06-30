const tasks = require("./routes/tasks");
const cors = require("cors");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

mongoose
  .connect(
    "mongodb+srv://admin:sanchir12345@cluster0.v1tocnc.mongodb.net/Todo?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("connected to database and listening to localhost 5000")
  )
  .catch((err) => console.log(err));
