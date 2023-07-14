const express = require("express");

const usersRouter = require("./routes/users");
const logsMiddleware = require("./middleware/logs");

const app = express();

app.use(logsMiddleware);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/users", usersRouter);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
