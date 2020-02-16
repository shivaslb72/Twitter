const express = require("express");
const setupDB = require("./config/database");
const router = require("./config/routes");
const port = 3010;
const app = express();
app.use(express.json());
app.use("/", router);
setupDB();

app.get("/", (req, res) => {
  res.json({
    notice: "welcome to the website"
  });
});
app.listen(port, () => {
  console.log("listing on port", port);
});
