const config = require('./.site.json');

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: config.title || process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: config.description || process.env.npm_package_description || '' },
      { name: "keywords", content: config.keywords && config.keywords.join(',') },
      { name: "author", content: "Carlos Rodrigues" },
      { name: "robots", content: 'index, follow' },

      { property: "og:locale", content: 'website' },
      { property: "og:type", content: 'website' },
      { property: "og:title", content: config.title || process.env.npm_package_name || '' },
      { property: "og:url", content: 'https://hypermob.co.uk' },
      { property: "og:site_name", content: 'hypermob.co.uk' },
      { property: "og:type", content: 'https://hypermob.co.uk/img/logo.png' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff8c00' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',
    // '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
