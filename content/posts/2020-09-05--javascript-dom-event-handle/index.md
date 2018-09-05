---
title: 《JavaScript DOM 编程艺术》07：事件处理函数
category: "JavaScript学徒"
cover: dom-scripting.jpg
author: Zack
---

![JavaScript DOM 编程艺术](dom-scripting.jpg)

这是《JavaScript学徒》系列的第七课，今天会进入《JavaScript DOM 编程艺术》第4章，这一章我们将完成一个图片库网页。这一课，我们先完成图片库的趋型，并学习事件处理函数的概念。

##教学视频连结

* [YouTube](https://youtu.be/htTnq9RMAkM)
* [微博](https://weibo.com/1736214117/Gy3hi1Zt2)

##事件处理函数

事件处理函数会在特定事件发生时触发，例如，当鼠标停在某个元素上时会触发`onmouseover`事件处理函数；鼠标离开时，又会触发`onmouseout`事件。在图片库中，我们会用到`onclick`事件，也就是点击事件。使用方法如下：

`<a href="https://zacklive.com" onclick="showPic(this)">Click me</a>`

意思是，当有人点击这条连结时，执行`showPic`函数，并传入`this`作为参数，即这个`<a>`元素对象。

当这个函数执行完后，若返回`true`，则代表这条连结被点击了，即前往连结网址，窗口会被刷新；若返回`false`，则代表没被点击，没事发生。我们可以透过返回`false`，让窗口不刷新：

`<a href="https://zacklive.com" onclick="showPic(this); return false;">Click me</a>`

##图片库设计

* “占位符（placeholder）”图片预留一个浏览区域。
* 图片连结被点击时，拦截网页的默认行为，即不前往连结地址（不刷新窗口）
* 图片连结被点击时，将placeholder图片换成该图片连结相对应的图片。

##HTML与JavaScript

index.html：

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Image Gallery</title>
</head>
<body>
  <h1>Snapshots</h1>
  <ul>
    <li><a href="images/balloon.jpg" title="Balloon" onclick="showPic(this); return false;"> Ballon</a></li>
    <li><a href="images/cloud.jpg" title="Cloud" onclick="showPic(this); return false;"> Cloud</a></li>
    <li><a href="images/fire.jpg" title="Fire" onclick="showPic(this); return false;"> Fire</a></li>
    <li><a href="images/sky.jpg" title="Sky" onclick="showPic(this); return false;"> Sky</a></li>
  </ul>

  <img id="placeholder" src="https://via.placeholder.com/500x333" alt="my image gallery">

  <script src="myScript.js"></script>
</body>
</html>
```

图片来自[Unsplash](https://unsplash.com)，存放于images目录底下。

Placeholder图片来自[PlaceHolder.com](https://placeholder.com)，这个网站让你透过连结产生占位符图片，连结格式：`https://via.placeholder.com/widthxheight`。

myScript.js

```
function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);
}
```
