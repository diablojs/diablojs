/*
  Home Controller

  This is the default controller. Controllers are the best way
  to keep your application route logic organized. 
*/

const User = require('../models/User');

exports.index = function (req, res) {
  // list of librarys/frameworks that diablojs USES.
  let uses = [{
      'name': 'express',
      'website': 'https://expressjs.com/'
    },
    {
      'name': 'mongo',
      'website': 'https://www.mongodb.com/'
    },
    {
      'name': 'vuejs',
      'website': 'https://vuejs.org/'
    },
  ];

  // return index.ejs view with data
  return res.render('index', {
    uses: uses
  });
}