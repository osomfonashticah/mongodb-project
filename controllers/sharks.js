const path = require("path");

const Shark = require("../models/sharks");

exports.index = function (req, res) {
  res.sendFile(path.resolve("views/sharks.html"));
};

exports.create = function (req, res) {
  const newShark = new Shark({
    name: req.body.name,
    character: req.body.character,
  });
  newShark.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/sharks/getshark");
    }
  });
};

exports.list = function (req, res) {
  Shark.find({}).exec(function (err, sharks) {
    if (err) {
      return res.send(500, err);
    }
    res.render("getshark", {
      sharks: sharks,
    });
  });
};
