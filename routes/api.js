const routes = require('express').Router();

/*
  API Routes

  Here is where you can register api routes for your application. All
  routes that are here will automatically  prepend /api/ for example if 
  you define a route at URI /test/ it will be /api/test in your browser.
*/

// You can use controllers if you want as shown in routes/web.js

routes.get('/test', (req, res) => {
  res.status(200).json({ message: 'API IS WORKING!' });
});

module.exports = routes;