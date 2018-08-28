const routes = require('express').Router();

/*
  Web Routes

  Here is where you can register web routes for your application. It is
  in good practice to keep your application routes separated. If you need
  to make a API place those routes in routes/api.js
*/

const HomeController = require('../controllers/HomeController');

routes.get('/', (req, res) => {
  HomeController.index(req, res);
});

module.exports = routes;