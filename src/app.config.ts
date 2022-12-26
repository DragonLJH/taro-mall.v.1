export default defineAppConfig({
  pages: [
    'pages/shop/index',
    'pages/index/index',
    'pages/login/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      { pagePath: "pages/index/index", text: "首页" },
      { pagePath: "pages/shop/index", text: "购物车" },
      { pagePath: "pages/login/index", text: "登录" },
    ]
  }
})
