var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017", (err, database) => {
  if (err) return console.log(err);
  db = database.db("exam");
});
/* GET users listing. */
router.get("/", function(req, res, next) {
  db.collection("students")
    .find()
    .toArray((err, result) => {
      res.json(result);
    });
});

router.get("/:naam?", function(req, res, next) {
  if (req.params.naam != undefined || req.params.naam != "") {
    return db
      .collection("students")
      .find({ naam: req.params.naam })
      .toArray((err, result) => {
        res.json(result);
      });
  } else
    return db
      .collection("students")
      .find()
      .toArray((err, result) => {
        res.json(result);
      });
});

router.post("/toevoegen", function(req, res, next) {
  db.collection("students").insertOne(
    {
      naam: req.body.naam,
      geboortedatum: req.body.geboortedatum,
      studierichting: req.body.studierichting
    },
    (err, response) => res.json(response)
  );
});

router.delete("/:naam", function(req, res, next) {
  db.collection("students").removeOne(
    { naam: req.params.naam },
    (err, response) => res.json(response)
  );
});
module.exports = router;
