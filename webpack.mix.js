const mix = require('laravel-mix');

mix.options({ imgLoaderOptions: { enabled: false }, processCssUrls: false })
    .js('assets/vue/app.js', 'public/js/vue/app.js')
    .sass('assets/scss/main.scss', 'public/css/main.css')