const webpack = require("webpack");
const env = require('dotenv').config();

module.exports = {
  mode: 'universal',
  env: env.parsed,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon/favicon-32x32.png' },
      { rel: 'stylesheet', href: '/font-awesome-4.7.0/css/font-awesome.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#867444', height: '3px' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/bootstrap.js',
    '~plugins/date-filter',
    '~plugins/api.js',
    '~/plugins/axios.js',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['nuxt-validate', {
        lang: 'es',
        nuxti18n: {
          locale: {
            'zh-CN': 'zh_CN'
          }
        }
      }]
  ],
  axios: {
    baseURL: process.env.DEV_API_URL || 'http://localhost:8000/api/v1/'  
  },  
  /*
  ** Build configuration
  */
  build: {  
    extractCSS: true,  
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {     
    }
  },
  router: {
    linkActiveClass: 'active'
  },
  //srcDir: 'client-app/' USADO PARA MUDAR A ESTRUTURA DE PASTAS, CASO QUEIRA DEIXAR TODO NUXT DENTRO DE UMA SUBPASTA
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
