const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "程式学徒 ZackLive", // <title>
  shortSiteTitle: "程式学徒", // <title> ending for posts and pages
  siteDescription: "让每一个人都能学会编程",
  siteUrl: "https://zacklive.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "zh-cmn-Hans",
  // author
  authorName: "Zack",
  authorTwitterAccount: "zacklive",
  // info
  infoTitle: "程式学徒",
  infoTitleNote: "让每一个人都能学会编程",
  // manifest.json
  manifestName: "程式学徒 - 让每一个人都能学会编程",
  manifestShortName: "zacklive", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.bg,
  manifestThemeColor: colors.bg,
  manifestDisplay: "standalone",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/zacharychim" },
    { name: "twitter", url: "https://twitter.com/zacklive" },
    { name: "facebook", url: "http://facebook.com/zacharychim" }
  ]
};
