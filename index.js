require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
const emailService = require("./src/api/EmailService");

app.use("/api/email", emailService);
app.use(express.static(__dirname + "/src/public/"));
app.get(/.*/, (req, res) => {
     res.sendFile(__dirname + "/src/public/index.html");
});

app.listen(port, () => console.log(`port ${port}`));
