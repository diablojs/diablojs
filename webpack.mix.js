const mix = require('laravel-mix');

mix.setPublicPath('public')
    .js('assets/js/app.js', 'public/js')
    .sass('assets/sass/app.scss', 'public/css');