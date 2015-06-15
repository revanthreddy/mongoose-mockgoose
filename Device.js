/* global exports */

var mongoose = require('./connector').getConnection();

Schema = mongoose.Schema;

var DeviceSchema = new Schema({
    _id: {type: String, unique: true},
    name: String
});



var Device = mongoose.model('devices', DeviceSchema);

module.exports = Device;