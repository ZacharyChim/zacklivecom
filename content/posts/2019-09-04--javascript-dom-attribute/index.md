---
title: 《JavaScript DOM 编程艺术》06：获取与修改属性
category: "JavaScript学徒"
cover: dom-scripting.jpg
author: Zack
---

![JavaScript DOM 编程艺术](dom-scripting.jpg)

这是《JavaScript学徒》系列的第六课，今天会继续《JavaScript DOM 编程艺术》第3章，介绍如何用DOM方法获取与修改元素属性。

##教学视频连结

* [YouTube](https://youtu.be/FXLP7Z6dD-o)
* [优酷](https://v.youku.com/v_show/id_XMzgxMTMxNDUyNA==.html)
* [B站](https://www.bilibili.com/video/av31119311/)

##获取属性：getAttribute

`object.getAttribute(attribute)`

注意，属性是附属于某个HTML元素，如`<img>`、`<p>`等，因此，这个方法要透过元素节点对象（object）来调用，而不是直接用透过document。

```
var para = document.getElementsByTagName("p");

for (var i = 0; i < para.length; i++) {
  alert(para[i].getAttribute("title"));
}
```

若属性不存在，则返回`null`。对`if`语句来讲`null`就等于`false`，属性存在时会返回的字符串，而字符串只要不是空的，对`if`来讲就是`true`。

```
var para = document.getElementsByTagName("p");

for (var i = 0; i < para.length; i++) {
  text = para[i].getAttribute("title")
  if (text) alert(text);
}
```

只有属性存在时才alert。

##修改属性：setAttribute

`object.setAttribute(attribute, value)`

同样透过元素节点对象调用。

```
var buyList = document.getElementById(purchases);
alert(buyList.getAttribute("title"));
buyList.setAttribute("title", "things to buy");
alert(buyList.getAttribute("title"));
```

若属性原本不存在，则会先创建，再赋值。

当你查看网页的源代码时，并不会看到修改后的内容，因为浏览器会先载入网页，再运行JavaScript进行动态修改，因此所有修改并不会影响原本的网页文件（HTML）。

##文本节点？

我们知道节点有三种：元素节点、属性节点和文本节点。而我们学习了：

1. 元素节点的获取：
    * getElementById
    * getElementsByTagName
    * getElementsByClassName

2. 属性节点的获取与修改：
    * getAttribute
    * setAttribute

那文本节点又是如何操作的呢？这便是《JavaScript DOM 编程艺术》第四章的重点。