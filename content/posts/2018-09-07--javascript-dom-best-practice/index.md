---
title: 《JavaScript DOM编程艺术》09：最佳实践
category: "JavaScript学徒"
cover: dom-scripting.jpg
author: Zack
---

![JavaScript DOM 编程艺术](dom-scripting.jpg)

这是《JavaScript学徒》系列的第九课，今天会进入《JavaScript DOM 编程艺术》第5章，谈谈JavaScript的最佳实践。

##教学视频连结

* [YouTube](https://youtu.be/uWd6M1gkH3w)
* [优酷](https://v.youku.com/v_show/id_XMzgxNTI3ODE4MA==.html)
* [B站](https://www.bilibili.com/video/av31299614/)

##平穏退化

平穏退化是指即使访问者的浏览器不支持JavaScript，网页也可能完成基本操作。

例如：

`window.open(url, name, features);`

这是一个BOM方法（用到window，和浏览器相关），不影响DOM（用document，和HTML文档相关）。用来创建新浏览器窗口。

三个参数分别代表：

1. 新窗口要打开的网页URL，若少了这个参数，会创建空白窗口。
2. 新窗口的名字，可通过该名字操作新窗口。
3. 一个以逗号分隔的字符串，为新窗口的各种属性，如宽度与高度。

一种典型的应用是将它放在一个函数里：

```
function popUp(winURL) {
  window.open(winURL, "popup", "width=320,height=480");
}
```

和之前一样，将这个函数放在一个外部文件（如myScript.js）中，再通过`<script>`标签导入到HTML当中。

调用这个函数的常见方法有两种，一是"javascript:"伪协议，二是内嵌的事件处理函数。

所谓真协议是指电脑之间传输数据包的协议，如HTTP、FTP等；而伪协议是非标准化的协议。"javascript:"伪协议可以通过一个连结来调来JavaScript函数：

`<a href="javascript:popUp('https://zacklive.com');">Example</a>`

内嵌事件处理函数的做法就是透过onclick事件调用函数：

`<a href="#" onclick="popUp('https://zacklive.com'); return false;">Example</a>`

`#`代表文档开头。

这两个方法的问题是，当JavaScript被禁示时，连结也会无效。更好的做法是，将网址放在href当中，再透过`this.href`调用：

`<a href="https://zacklive.com" onclick="popUp(this.href; return false;)">Example</a>`

但这样还不够好，因此JavaScript代码出现在HTML当中，最好能将JavaScript分离到外部文件中。

##分离JavaScript

最理想的情况是，所有JavaScript代码都放在一个独立的文件中，HTML文档中透过`<script>`载入这个文件。

在JavaScript中，可以将事件添加到元素当中：

`element.event = action`

我们可以通过给元素添加特定的id或class来找到这些元素，例如：

`<a href="https://zacklive.com" class="popup">Example</a>`

透过遍历文档中所有连结，只要有popup这个class就给这个连结的onclick事加入popUp函数：

```
window.onload = prepareLinks;
function prepareLinks() {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("class") == "popup") {
      links[i].onclick =  function() {
        popUp(this.getAttribute("href"));
        return false;
      }
    }
  }
}
```

`window.onload`是确保整个HTML文档加载完成后，再执行JavaScript，避免发生JavaScript文件先载入完成，但HTML文档（也就是DOM）还没准备好。

##向后兼容

另一个要考虑的问题是，浏览器对JavaScript的支持程度不一样。某些访问者的浏览器由于版本较旧等原因，不支持某些方法。可以透过以下方式检查：

`if (!getElementById) return false;`

即，若不支持`getElementById`，马上结束函数并返回false。

上面的函数就变成：

```
window.onload = prepareLinks;
function prepareLinks() {
  if (!document.getElementsByTagName) return false;
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute("class") == "popup") {
      links[i].onclick =  function() {
        popUp(this.getAttribute("href"));
        return false;
      }
    }
  }
}
```

##性能考虑

###少访问DOM和减少标记

每执行一次`document.getElementById`等DOM方法，就会搜索整个DOM一次。需要多次用到搜索结果时，可以将第一次的结果存到一个变量当中，之后就使用这个变量，便无需再度搜索DOM。如：

`var links = document.getElementsByTagName("a");`

另外，HTML文档中标签越多，DOM的规模就越大，搜索的成本也就越高，因此，可尽量减少标签数量。

###合并脚本

尽量将JavaScript代码全部放在一个文件中，而不要分开在多个脚本文件，因为每个`<script>`标签都会向服务器发出一次请求，请求越多，网页的载入速度越慢。

之前也讲过，最好将`<script>`标签放在文档最后，即`</body>`之前，这样网页载入得更快。

###压缩脚本

最后一步是压缩脚本，即去除脚本中不必要的东西，如空格和注释等。压缩后的代码不好读，但可以减少文件大小，可将它另存一个文件，在文件名加入min字样：myScript.min.js。

压缩的工作可交给[Uglify JS](https://github.com/mishoo/UglifyJS2)完成：[http://lisperator.net/uglifyjs/](http://lisperator.net/uglifyjs/)