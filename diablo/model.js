const config = require('../diablo/config');
const mongoose = require("mongoose");

/*
  Model Bootstrap

  This is the bootstrapping code for each model. As you
  can see it's just a simple mongoose (mongodb) instance.
  Check models/User.js to see how it's implemented.
*/

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, {useNewUrlParser: true});

module.exports = mongoose;