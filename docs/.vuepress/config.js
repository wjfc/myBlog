module.exports = {
  title: '点点记录',
  description: '',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '前端',
        items: [
          { text: 'webpack', link: '/front/webpack/' },
          { text: 'vue', link: '/front/vue/' },
          {
            text: 'js',
            items: [
              {
                text: "模块化",
                link: "/front/js/module/"
              },
              {
                text: "ES6",
                link: "/front/js/es6/"
              },
            ]
          },
        ]
      },
      {
        text: 'node',
        items: [
          {
            text: "Buffer",
            link: "/front/node/buffer"
          },
          {
            text: "FileSystem",
            link: "/front/node/fileSystem"
          }
        ]
      },
    ],
    "sidebar": "auto",
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': 'docs/assets'
      }
    }
  }
}