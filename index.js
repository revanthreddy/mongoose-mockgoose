var Device = require('./Device');

Device.find({"_id" : "device1"},function(err , device){
   if(err)
    console.error(err);
   else
       console.log(device);
});