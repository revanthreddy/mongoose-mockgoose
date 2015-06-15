var assert = require("assert");
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
mockgoose(mongoose);
var Device= require('./Device');



describe('Find a crio', function () {
    describe('#find()', function () {
        it('should be asynchronous', function(done) {
            var id = "sg-xxxxxy";
            //mongoose.connect("mongodb://localhost:27017/insightcm");
       Device.create({"_id" : id},function(err , doc){
                if(err)
                    done(err);
                assert.equal(id, doc._id);
                done();
            });
        });

    });
});