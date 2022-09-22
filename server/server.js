const express = require("express");
var mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/test", require("./routes/test"));
app.use("/contacts", require("./routes/contacts"));

// get driver connection
const dbconn = require("./db/conn");

app.listen(port, () => {
  // 서버 시작시 DB 연결 수행
  dbconn.connectToServer(function (err) {
    if (err) console.log(err);
  });
  console.log(`Server is now running on port : ${port}`);
});
