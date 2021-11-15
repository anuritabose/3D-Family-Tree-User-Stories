const express = require("express");
const router = express.Router();
const multer = require("multer");
const Members = require("../models/members");

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./client/public/uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });


//REQUEST ADD NEW MEMBER 
router.post("/add-member", upload.single("memberImage"), (req, res) => {
    const newMember = new Members({
      memberName: req.body.memberName,
      relatedName: req.body.relatedName,
      relation: req.body.relation,
      memberImage: req.file.originalname,
    });
  
    newMember
      .save()
      .then(() => res.json("New Member added!"))
      .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.post("/:id/add-relation", (req, res) => {
    var relatedName = req.body.relatedName;
    var relation = req.body.relation;
    console.log(relatedName);
    console.log(relation);
    
    console.log(newRelation);

    Members.findById(req.params.id)
        .then((member) => {
        member.relatedName.push(relatedName);
        member.relation.push(relation);

        article
            .save()
            .then(() => res.json("relation added"))
            .catch((err) => res.status(400).json(`Error: ${err}`));
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

//REQUEST DISPLAY TREE
router.get("/display-tree", (req, res) => {
    Articles.find()
      .then((article) => res.json(article))
      .catch((err) => res.status(400).json(`Error: ${err}`));
});


module.exports = router;


