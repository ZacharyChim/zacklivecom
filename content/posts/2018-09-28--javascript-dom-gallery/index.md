---
title: 《JavaScript DOM编程艺术》10：应用最佳实践
category: "JavaScript学徒"
cover: dom-scripting.jpg
author: Zack
---

![JavaScript DOM编程艺术](dom-scripting.jpg)

这是《JavaScript学徒》系列的第十课，今天会进入《JavaScript DOM编程艺术》第6章，将上一章的最佳实践应用到图片库例子中。

## 教学视频连结

* [YouTube](https://youtu.be/eGdJuXp2p20)
* [B站](https://www.bilibili.com/video/av32729095/)
* [优酷](https://v.youku.com/v_show/id_XMzg0Mzc0OTY3Ng==.html)
* [腾讯](http://v.qq.com/x/page/h0730affpau.html)


## 能否平穏退化？

```
<li><a href="images/balloon.jpg" title="Balloon" onclick="showPic(this); return false;"> Ballon</a></li>
```

以这段程式为例，`href`中我们不使用JavaScript伪协议（`javascript:`）或者`#`号，就是为了即使JavaScript不可用，程式仍能打开图片。

## JavaScript是否与HTML标记分离？

在上面那段程式中，`onclick`的部分便是JavaScript，它跟HTML混在一起了。这是可以改进的地方。

首先，将`onclick`从各连结移除，并为`ul`加入`id = imagegallery`。再加入以下函数：

```
function prepareGallery() {
  if (!document.getElementsByTagName || 
      !document.getElementById ||
      !document.getElementById("imagegallery")) return false;

  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  for ( var i=0; i<links.length; i++) {
    links[i].onclick = function() {
      showPic(this);
      return false;
    }
  }
}
```

这个函数先检查我们要用的方法，再透过刚加入的id取得图片库中所有连结，最后为每一条连结绑定`onclick`事件，并赋与它一个函数来执行`showPic`及返回`false`。

`prepareGallery`函数要在网页载入后马上执行，可以使用之前提到的`window.onload`，但我们可能有多个需要在载入后马上执行的函数，因此，我们需要以下函数：

```
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
```

这个函数先将旧的`window.onload`存到一个变量`oldonload`中，接著判断旧`window.onload`是否已经是函数，如果不是，代表里面没有任何函数，可以将新函数`func`直接赋与；如果是，则代表里面存在其他函数，那就将旧函数`oldonload`和新函数`func`一起放到一个新的函数里再赋与`window.onload`。

我们可以重复使用这个函数，将多个函数放入`window.onload`：

`addLoadEvent(prepareGallery);`

至此，我们成功将JavaScript和HTML分离。

最后，我们也应为`showPic`函数加上检查：

```
function showPic(whichpic) {
  if (!document.getElementById("placeholder")) return false;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);

  var text = whichpic.getAttribute("title");
  if (description = document.getElementById("description")) description.firstChild.nodeValue = text;
  return true;
}
```

在第二个`if`的条件当中，我直接进行赋值，这是因为对`if`来讲，赋值的结果正是被赋值的值。

至于最后为什么要返回`true`，这是要告诉`prepareGallery`，`showPic`没发生任何错误。前面的`prepareGallery`，不管`showPic`是否成功都会返回`false`，也就是取消连结的跳转动作。这样，万一`showPic`出错，连结就会失效，不能平稳退化。因此，`onclick`的函数应改为：

`return !showPic(this);`

这代表`showPic`成功（`showPic`返回`true`），我们应取消连结跳转，即`prepareGallery`要返回`false`，与`showPic`相反；反之，若`showPic`出错并返回`false`，`prepareGallery`则应返回`true`，让连结进行跳转。

## #三元操作符（ternary operator）

`showPic`当中还可以加入更多的检查：

```
var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
```

这里的问号和冒号组成**三元操作符**，意思是，若问号前的条件成立，取冒号前的值；若不成立，则取冒号后的值。这里便是，若存在`title`属性，则取该属性为`text`的值；若不存在，则取空字符串为`text`的值。

检查`placeholder`是否为图片：

`if (placeholder.nodeName != "IMG") return false;`

`nodeName`属性永远是大写字母。

这此检查可按个人喜好加入。

## 键盘事件

按下键盘上任一个出键都会触发`onkeypress`事件，如果我们也想让用户按下键盘任意键来显示图片，可以加入：

```
links[i].onclick = function() {
  return !showPic(this);
}
links[i].onkeypress = links[i].onclick;
```

但`onkeypress`会使所有键失去原本的功能，如Tab键，不再能够跳到下一个元素；同时，`onclick`其实也会被回车键触发，因此，如非必要，不应使用`onkeypress`。

## 加入CSS

在index.html的`head`中加入：

`<link rel="stylesheet" href="style.css">`

接着新增style.css，并加入：

```
body {
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

#imagegallery {
  list-style: none;
}

#imagegallery li {
  display: inline;
}

#imagegallery li a img {
  border: 0;
}
```

## DOM Core和HTML-DOM

**DOM Core**：任何程式语言都可以使用，不限JavaScript或网页，方法包括

* getElementById
* getElementsByTagName
* getAttribute
* setAttribute

**HTML-DOM**：只适用于web文档，较简短：

DOM Core写法：
```
element.getAttribute("src")
placeholder.setAttribute("src", source);
```

HTMl-DOM写法：
```
element.src
placeholder.src = source
```

建议使用DOM Core方法，JavaScript目前已不只用于网页范筹，习惯同一种写法比较有利。