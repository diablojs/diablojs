const config = require('./diablo/config');
const chalk = require('chalk');
const express = require('express');
const app = require('express')();
const bodyParser = require('body-parser');
const sockets = require('./diablo/sockets');

// Routes
const routes = require('./routes/web');
const api = require('./routes/api');
app.use('/', routes);
app.use('/api', api);

// Express Options
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Start Web Server
app.listen(process.env.SERVER_PORT, () => {
    console.log(chalk.red('DiabloJS') + chalk.yellow(' server started on port: ' + process.env.SERVER_PORT));
});