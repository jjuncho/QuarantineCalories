const express = require("express");
const mongoose = require("mongoose");

const userModel = mongoose.model("users");

const router = express.Router();

router.get("/register", (req, res) => {
    res.render('register.ejs');
});

router.post("/register", (req, res) => {

    console.log(req.body);
    var users = new userModel();
    users.userName = req.body.userName;
    users.password = req.body.password;
    users.name = req.body.name;
    users.save((err, docs)=> {
        if(!err) {
            res.redirect("/users");
        } else {
            res.send("Error Happened!");
        }
    });
});



router.get("/", (req, res) => {
    userModel.find((err, docs) => {
        if (!err) {
            console.log(docs);
            res.render('users.ejs' ,{data: docs});
        } else {
            res.send("Error");
        }
    });
});

module.exports = router;