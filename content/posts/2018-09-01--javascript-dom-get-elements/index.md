---
title: 《JavaScript DOM编程艺术》05：获取元素节点
category: "JavaScript学徒"
cover: dom-scripting.jpg
author: Zack
---

![JavaScript DOM编程艺术](dom-scripting.jpg)

这是《JavaScript学徒》系列的第五课，今天会继续《JavaScript DOM编程艺术》第3章，介绍如何用DOM方法获取元素节点。

## 教学视频连结

* [YouTube](https://youtu.be/lwc45ZTDE54)
* [优酷](https://v.youku.com/v_show/id_XMzgwODMyMzgyNA==.html)
* [B站](https://www.bilibili.com/video/av30977472/)
* [腾讯](http://v.qq.com/x/page/e0730w0a5zs.html)


## 获取元素节点的方法

注意JavaScript采用**驼峰式**命名法，即从第二个单字开始，每个单字的首字母都需大写。

在DOM中每一个元素都是一个对象，因此获得的元素节点其实也是一个对象。

以下方法可用于document对象以取得整个文档中符合要求的元素节点，也可用于某个元素节点以取得其底下符合的节点。

1. **getElementById**：根据元素id获取元素。`getElementById(id)`，例如：`document.getElementById("purchases")`。
2. **getElementsByTagName**：（注意Elements为复数）根据标签获取元素。由于同一个标签可以多次出现，因此返回的是一个对象数组。`getElementByTagName(tag)`，例如：`document.getElementByTagName("li")`。既然返回的是数组，便可以透过数组的`.length`属性取得数组长度，即元素个数。星号"＊"为通配符，可以用来取得所有元素节点：`document.getElementsByTagName("*")`
3. **getElementsByClassName**：注意Elements为复数）根据class属性获取元素。同一个class可用于多个HTML标签，因此返回的也是一个对象数组。参数可为多个class（以空格分隔，顺序无影响），代表需同时具有这些class。`getElementByClassName(class)`，例如：`document.getElementByClassName("important sale")`

`typeof`可显示变量类型。