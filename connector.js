var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test");

exports.getConnection = function(){
    return mongoose;
};