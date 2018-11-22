var mongoose = require('mongoose');
require('dotenv').config();

const connectUri = "mongodb://" + process.env.MONGO_USER +
":" + process.env.MONGO_PASSWORD + "@" + process.env.MONGO_URL

var options = {
    "server" : {
      "socketOptions" : {
        "keepAlive" : 300000,
        "connectTimeoutMS" : 30000
      }
    }
  }

console.log(connectUri)
mongoose.connect(connectUri,err => {if(err) console.log(err)})