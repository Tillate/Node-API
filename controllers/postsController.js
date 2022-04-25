const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
const { PostsModel } = require('../models/postsModel');


//ROUTE GET
router.get('/', (req, res) => {
    PostsModel.find((err, docs) =>{
        if (!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
});

//ROUTE POST
router.post('/', (req, res) => {
    const newRecord = new PostsModel ({
        author: req.body.author,
        message: req.body.message
    });

    newRecord.save((err, docs) => {
        if(!err) res.send(docs);
        else console.log('Error creating new data ' + err)
    })
});

//ROUTE PUT
router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("Id unknown :" + req.params.id)
    const updateRecord = {
        author: req.body.author,
        message: req.body.message
    };

    PostsModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord },
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Update error : " + err);
        }
    )
});

//ROUTE DELETE
router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("Id unknown :" + req.params.id)

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Delete error : " + err);
        }
    )
});


module.exports = router