var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var User = require('../models/users');
var ListModel = require('../models/lists');

/* GET home page. */

router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.post('/register', function(req, res) {
  var newUser = new User({ username : req.body.username });

    User.register(newUser, req.body.password, function(err) {
      if (err) return; //handle error;


        var newList1 = new ListModel({user: newUser._id, category: 'to watch'});
        newList1.save(function(err){
          if (err) return; //handle error;
          newUser.lists.push(newList1._id);
          newUser.save(function(err){
            if (err) return; //handle error;
            var newList2 = new ListModel({user: newUser._id, category: 'watching'});

            newList2.save(function(err){
              if (err) return; //handle error;
              newUser.lists.push(newList2._id);
              newUser.save(function(err){
                if (err) return; //handle error;
                var newList3 = new ListModel({user: newUser._id, category: 'watched'});

                newList3.save(function(err){
                  if (err) return; //handle error;
                  newUser.lists.push(newList3._id);
                  newUser.save(function(err){
                    if (err) return; //handle error;

                  });
                });
              });
            });
          });
        });

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
