const Timestamp = new Date().getTime();

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Geek",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover, user-scalable=0"
      }
    ],

    link: [],
    script: [{ src: "//at.alicdn.com/t/font_2717088_fiq9yisuhzq.js" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/reset.css",
    { src: "@/assets/css/main.scss", lang: "scss" }
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/axios",
    "@/plugins/route",
    "@/plugins/v-img",
    "@/plugins/element-ui"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "semantic-ui-vue/nuxt", // includes styles from semantic-ui-css
    ["semantic-ui-vue/nuxt", { css: false }], // if you have your own semantic-ui styles
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "cookie-universal-nuxt"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  /*
   ** Axios module configuration
   */
  axios: {
    proxy: true,
    prefix: "/api/",
    credentials: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  router: {
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  },
  proxy: {
    "/api/": {
      // 请填写你的后台接口地址
      // target: "https://api.inis.cn/api",
      // target: "https://api.starssr.com/api",
      target: "https://ask.wjssk.com/inis/api",

      pathRewrite: {
        "^/api/": "/",
        changeOrigin: true
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.output.filename = `js/[name].${Timestamp}.js`; // 每次构建打包时给文件名加上时间戳，保证版本更新时与上版本文件名不一样
      config.output.chunkFilename = `js/[name].${Timestamp}.js`;
      // ...
    },
    extractCSS: { allChunks: true },
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk"
          }
        ]
      ]
    }
  },
  loading: "~/components/custom/Loading.vue"
};
