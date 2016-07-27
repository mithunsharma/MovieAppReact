var express = require('express');
var router = express.Router();
var request = require('request');
var mongoose = require('mongoose');
const url=require('url');
var User = require('../movieschema');
var movie = require('node-movie');
//mongoose.connect('mongodb://localhost/movies')
var db = mongoose.connection;
/* GET home page. */
var fdata={};
router.route("/movies/add")
.post(isLoggedIn,function(req, res)
{
 console.log(req.body);
  if(req.body)

{
    var movie1 = new User(req.body);
    movie.save(function(err)
{
    if(err)
    {
      res.send(err);
    }
    else

{
      res.send("Movie inserted");
    }
    });
  }
});
function isLoggedIn (req, res, next) {
  if(req.isAuthenticated()){
  return next();}
  else {
    res.json('not authenticated');
  }
};
router.post('/add',function(req, res){
  //console.log(req.body);
  var fname=new User(req.body);
    fname.save(function (err) {
      res.send("Data Inserted");
      });
});
router.get('/showall', function (req, res){
User.find(function(err, data){
  if (err) res.send(err);
res.send(data);
});
});

//update
router.put('/:id', function(req, res) {
  User.findOne({ _id: req.params.id}, function(err, movie) {
    if(err) {
      return res.send("Movie id not exist, not able to update");
    }
      for(i in req.body) {
      movie[i] = req.body[i];
    }
    //save
    movie.save(function(err) {
      if(err) {
        return res.send("not able to save");
      }

      res.send(movie);
    });
  });
});

router.delete('/delete',function(req,res){
  console.log(req.body);
  User.remove({'Title':req.body.Title},function(err,data){

    if(err)
    res.send(err);
    res.send('deleted');
  });
});
module.exports = router;
