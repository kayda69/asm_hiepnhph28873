// cài thư viện: npm install mongoose --save
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://nhhtcp:4ob0iq7MWbLOWvEL@cluster0.ecxazko.mongodb.net/",
  )
  .catch((err) => {
    console.log("Loi ket noi csdl");
    console.log(err);
  });
module.exports = { mongoose };
