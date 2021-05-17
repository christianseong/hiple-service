var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Room = require('../../model/Room');
const User = require('../../model/User');


/* GET ALL ROOMS */
router.get('/', function(req, res, next) {
  Room.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE ROOM BY ID */
router.get('/:id', function(req, res, next) {
  Room.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE ROOM */
router.post('/', function(req, res, next) {

  Room.create(req.body, function (err, post) {

    if (err) return next(err);

    console.log('리퀘스트 : '+req.body.id)

    var room = {
      roomid : post._id,
      name : req.body.room_name
    }

    User.findByIdAndUpdate( req.body.id,
      {$addToSet : {room : room}}, (err, success)=>{
        if (err) return next(err);
        console.log(post._id);


        res.json(post);
      });

  });


});

/* UPDATE ROOM */
router.post('/:id', function(req, res, next) {
  Room.findByIdAndUpdate(req.params.id, {room_name : req.body.room_name}, function (err, post) {
    console.log("req.body", req.body);
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE ROOM */
router.delete('/:id', function(req, res, next) {
  Room.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
