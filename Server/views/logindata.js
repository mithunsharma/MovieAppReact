var mongoose =require('mongoose');
var LoginData =mongoose.Schema({
  username=String;
  pwd=String;
});
module.exports =mongoose.model("log",LoginData);
