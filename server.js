const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
  const data = { message: "Hello, world!" };
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
