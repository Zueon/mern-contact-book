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

contactRouter.route("/:id").delete((req, res) => {
  Contact.deleteOne({ _id: req.params.id }, function (err) {
    if (err) return res.json(err);
    res.json("OK");
  });
});

module.exports = contactRouter;
