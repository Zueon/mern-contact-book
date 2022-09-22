const express = require("express");
var mongoose = require("mongoose");
const contactRouter = express.Router();

var contactSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String },
  phone: { type: String },
});
var Contact = mongoose.model("contact", contactSchema); // 5

contactRouter.route("/").get((req, res) => {
  Contact.find({}, function (err, contacts) {
    res.json(contacts);
  });
});

// contactRouter.route("/form").get((req, res)=>{
//   res.render
// })

contactRouter.route("/add").post((req, res) => {
  Contact.create(req.body, function (err, contact) {
    if (err) return res.json(err);
    res.json(contact);
  });
});

module.exports = contactRouter;
