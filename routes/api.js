var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users');
var List = require('../models/lists');
var Listing = require('../models/listings');
var Rating = require('../models/ratings');

router.get('/users/:id', function(req, res) {
  User.findById(req.params.id).populate('lists').exec(function(err, user){
    res.json(user);
  });
});

router.get('/lists/:id', function(req, res){
  List.findById(req.params.id).populate('shows').exec(function(err, list){
    res.json(list);
  });
  // //
  // List.findById(req.params.id, function(err, list){
  //   res.json(list);
  // });
});

router.post('/listings/:list_id', function(req, res){


  var listing = new Listing({
      list: req.params.list_id,
      show: req.body.params.show_id
    });
  listing.save(function(err, listing){
    if(err) { return; }
    List.findById(req.params.list_id, function(err, list){
      list.shows.push(req.body.params.show_id);
      list.save(function(err){
        //error handling
        res.json(listing);
      });
    });
  });

});

router.get('/listings/:list_id', function(req, res){
  Listing.findBy({
      list: req.params.list_id,
      show: req.query.show_id
    }, function(err, listing){
        res.json(listing);
  });
});

router.delete('/listings/:list_id', function(req, res){

  Listing.find({
      list: req.params.list_id,
      show: req.query.show_id
    }).remove(function(err){
        List.findById(req.params.list_id, function(err, list){
          //delete item from lists's shows array
          console.log(list)
          var index = list.shows.indexOf(req.query.show_id);
          list.shows.splice(index, 1);
          list.save(function(err, list){
            res.json('deleted');
          })
        })
  });
});
router.post('/ratings/:user_id', function(req, res){
  // console.log(req.params)
  // console.log(req.body)
  // console.log(req.query)
  // console.log('making post request')

  //delete/overwrite if rating with same user/show id already exists
  //!!!

  Rating.create({
    user: req.params.user_id,
    show: req.body.show_id,
    value: req.body.value
  }, function(err, rating){
    // console.log(err);
    // console.log(rating);
    res.json(rating);
  });
});
router.get('/ratings/:user_id', function(req, res){
  // console.log(req.params)
  // console.log(req.body)
  // console.log(req.query)
  // console.log(req.query.show_id)
  Rating.find({
    user: req.params.user_id,
    show: req.query.show_id
  }, function(err, rating){

      // console.log(err);
      // console.log(rating);
    res.json(rating);
  });
});
router.patch('/ratings/:user_id', function(req, res){
  //
  // Rating.findOne({
  //   user: req.params.user_id,
  //   show: req.body.show_id}, function(err, rating){
  //     console.log(rating)
  //   })

  Rating.update({
    user: req.params.user_id,
    show: req.body.show_id
  },
  {value: req.body.value}, function(err, rating){
    res.json(rating);
  });

});

module.exports = router;
