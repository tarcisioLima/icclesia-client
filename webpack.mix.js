const mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': __dirname + '/assets/vue'
      },
    },
  })

mix.options({ imgLoaderOptions: { enabled: false }, processCssUrls: false})
    .js('assets/vue/app.js', 'public/js/vue/app.js')
    .sass('assets/scss/main.scss', 'public/css/main.css')