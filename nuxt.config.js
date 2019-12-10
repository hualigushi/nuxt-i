
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'static/favicon.ico' }
    ],
    script: [
      { src: 'https://res.wx.qq.com/open/js/jweixin-1.4.0.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
 css: [
  {
    src: 'static/sass/base.sass',
    lang: 'sass?indentedSyntax=true'
  },
  {
    src: 'swiper/dist/css/swiper.css'
  }
],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
    { src: '~plugins/swiper.js', ssr: false },
    { src: '~plugins/flexible.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
