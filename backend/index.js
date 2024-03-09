const express = require("express");
const mainrouter = require("./routes/index");
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json())

app.use("/netbanking/v1",mainrouter.router)

app.listen(3000) 