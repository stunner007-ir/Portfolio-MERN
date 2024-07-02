require("dotenv").config();
require("./db/connection");
const express = require("express");
const cors = require("cors");
const router = require("./Routes/router");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
