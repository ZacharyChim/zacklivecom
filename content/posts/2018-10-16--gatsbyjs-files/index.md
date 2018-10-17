---
title: Gatsby.js 未来的网页03：目录结构
category: "Gatsby.js"
cover: gatsbyjs-files.jpg
author: Zack
---

![Gatsby.js目录结构](gatsbyjs-files.jpg)

我们已经用Gatsby的Command Line工具以预设的Starter安装了一个示范网站。今天我們就來研究一下这个预设Starter生成的目录结构。

## 视频教学连结
* [YouTube](https://youtu.be/7q6gAOu2zM4)
* [微博](https://weibo.com/1736214117/GEhdAspDL)
* [腾讯](https://v.qq.com/x/page/m0750ym86qa.html)
* [B站](https://www.bilibili.com/video/av34007655/)

## 主目录

* .cache：存放cache，可无视。
* node_modules：存放node的modules，可无视。
* public：存放最终由`gatsby build`产生的静态文件，可无视。
* **src**：主要的程式都放在这里面，最常接触。
* .gitignore：Git的ignore设定
* .prettierrc：prettier的设定
* gatasby-browser.js, gatsby.node.js, gatsby-ssr.js：Gatsby的各种专门设定，很少用到
* **gatsby.config**：整个网站的基本设定，包括网站名称和使用的插件。
* package.json：NPM设定
* package-lock.json, yarn.lock：NPM和yarn的锁定文件，无视。

## src目录

这个目录下的结构会因Starter而不同，你也可以自行设计。

* components：网站的主要结构元件，如header或layout（网页结构）
* images：存放图片
* pages：不同页面的内容，通常供components里的layout.js使用。