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
      { pagePath: "pages/index/index", text: "首页", iconPath: "./icon/home-default.png", selectedIconPath: "./icon/home.png" },
      { pagePath: "pages/shop/index", text: "购物车", iconPath: "./icon/shop-default.png", selectedIconPath: "./icon/shop.png" },
      { pagePath: "pages/login/index", text: "我的", iconPath: "./icon/my-default.png", selectedIconPath: "./icon/my.png" },
    ]
  }
})
