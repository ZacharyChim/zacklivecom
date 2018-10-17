---
title: 《JavaScript DOM编程艺术》13：CSS-DOM
category: "JavaScript学徒"
cover: dom-scripting.jpg
author: Zack
---

![JavaScript DOM编程艺术](dom-scripting.jpg)

这是《JavaScript学徒》系列的第十三课，今天会介绍《JavaScript DOM编程艺术》第9章CSS-DOM，学习用JavaScript来操作CSS。

## 教学视频连结
* [YouTube](https://youtu.be/QVncmU0dNTM)
* [腾讯](https://v.qq.com/x/page/d0744gyb6jy.html)
* [微博](https://weibo.com/1736214117/GDG0vlB9m)
* [B站](https://www.bilibili.com/video/av33718091/)

## 结构--表示--行为

* HTML：结构层（Structural layer）
* CSS：表示层（Presentation layer）
* JavaScript：行为层（Behavior layer）

## style属性

```
<p id="example" style="color: grey; font-family: 'Arial', sans-serif;">An Example</p>
```

```
var para = document.getElementById("example");
alert(typeof para.style);
```

`style`属性是一个对象（object）。

```
para.style.color
para.style.fontFamily
```

所有带"-"号的属性改用驼峰命名，font-family变成fontFamily。

只能取得内嵌（inline）样式。

可直接修改：

```
para.style.color = "black";
```

## className属性

覆盖`class`属性：
```
para.setAttribute("class", "intro");
```
或
```
para.className = "intro";
```
添加新class：
```
para.className += " intro";
```
注意"intro"前面有一个空格。也可自行写一个函数判断`className`是否存在，再决定是直接赋值还是添加。