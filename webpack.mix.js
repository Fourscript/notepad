let mix = require('laravel-mix');

mix.js('src/index.js', 'dist').setPublicPath('dist');
mix.sass('scss/app.scss', 'dist');

mix.disableNotifications();