---
title: 《JavaScript DOM编程艺术》08：文本节点操作
category: "JavaScript学徒"
cover: dom-scripting.jpg
author: Zack
---

![JavaScript DOM编程艺术](dom-scripting.jpg)

这是《JavaScript学徒》系列的第八课，今天会继续《JavaScript DOM编程艺术》第4章，进一步完善图片库网页。这一课的学习重点是文本节点的操作。

##教学视频连结

* [YouTube](https://youtu.be/fHZVRX6tbCU)
* [微博](http://weibo.com/u/1736214117)
* [优酷](https://v.youku.com/v_show/id_XMzgxNDg5MjYxMg==.html)
* [B站](https://www.bilibili.com/video/av31274606/)

##childNodes属性

**childNodes**可以用来取得一个元素对象的所有子节点，是一个包含全部子节点的数组。是复数，有s。

```
function countBodyChildren() {
  var body_element = document.getElementsByTagName("body")[0];
  alert(body_element.childNodes.length);
}

```

body只有一个，因此是返回数组的第一个元素，即下标（index）为零的元素。childNodes是数组，可以用length得到数组元素总个数。

若要让一个函数在页面加载时执行，可以将该函数赋值给`window`的`onload`事件。

```
function countBodyChildren() {
  var body_element = document.getElementsByTagName("body")[0];
  alert(body_element.childNodes.length);
}

window.onload = countBodyChildren;
```

##nodeType属性

之前讲过节点一共有三种，它们有各自的nodeType属性值：

* **元素节点**的nodeType属性值是**1**。
* **属性节点**的nodeType属性值是**2**。
* **文本节点**的nodeType属性值是**3**。

可以将countBodyChildren函数最后alert的内容改为body_element.nodeType，body是元素节点，结果应为1.

##nodeValue属性

**nodeValue**可以取得文本节点的值。但要记得，诸如段落标签p当中的文字并不是这标签的nodeValue，而是它底下的文本节点的nodeValue。而这个文本节点则是段落标签的第一个childNodes。

在index.html里的placeholder图片底下加入：

`<p id="description">Choose an image.</p>`

接著，在JavaScript里取得这个段落，并输出文字内容：

```
var description = document.getElementById("description");
alert(description.childNodes[0].nodeValue);
```

nodeValue可以修改：

`description.childNodes[0].nodeValue = text;`

##firstChild和lastChild属性

数组元素childNodes[0]可以写成firstChild，即第一个子节点。

同理，最后一个子节点可以写成lastChild。

##修改图片库

将图片的title属性值放到description当中，最终的showPic函数：

```
function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder =document.getElementById("placeholder");
  placeholder.setAttribute("src", srouce);
  
  var text = whichpic.getAttribute("title");
  var description = document.getElementById("description");
  description.firstChild.nodeValue = text;
}
```

参考样式表：
```
body {
  font-family: "Helvetica", "Arial", serif;
  color: #333;
  background-color: #ccc;
  margin: 1em 10%;
}
h1 {
  color: #333;
  background-color: transparent;
}
a {
  color: #c60;
  background-color: transparent;
  font-weight: bold;
  text-decoration: none;
}
ul {
  padding: 0;
}
li {
  float: left;
  padding: 1em;
  list-style: none;
}
img {
  display: block;
  clear: both;
}
```

##《JavaScript DOM编程艺术》第4章重点

这一章的重点是修改文本节点，介绍以下五种属性：

* childNodes
* nodeType
* nodeValue
* firstChild
* lastChild