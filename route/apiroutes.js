const express = require("express");
const router = express.Router();
//communicate with db
const db = require("../models");

//setup some end points this is one of our end point ot get all of our staff
router.get("/all", (req, res) => {
    db.district.findAll().then(districts => res.send(districts));
});

//post(insert)
router.post("/new", (req, res) => {
    db.district.create({
        district_name: req.body.district_name
    }).then(submiteddistrict => res.send(submiteddistrict));
});
//delete
router.delete("/delete/:id", (req,res) => {
    db.district.destroy({
        where: {id: req.params.id}
    }).then(() => res.send("succesfully deleted"));
});

//update
router.put("/edit", (req, res) => {
    db.district.update({
        district_name: req.body.district_name
    }, 
    {
        where: {id: req.body.id}
    }).then(() => res.send('success'))
})
module.exports = router;
