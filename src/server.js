require("dotenv").config();
const express = require("express");

const app = express();

const routes = require("./routes");

app.get("/", (req, res) => {
  res.send("API is Running!");
});

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);


app.listen(PORT, () => {
  console.log(`Server running um port: ${PORT} 🚀`);
});
