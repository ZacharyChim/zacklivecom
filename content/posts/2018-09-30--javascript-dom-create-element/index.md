---
title: 《JavaScript DOM编程艺术》11：动态创建标记
category: "JavaScript学徒"
cover: dom-scripting.jpg
author: Zack
---

![JavaScript DOM编程艺术](dom-scripting.jpg)

这是《JavaScript学徒》系列的第十一课，今天会进入《JavaScript DOM编程艺术》第7章，我们会一起学习如何用JavaScript动态创建标记。动态的意思是，在程式运行中创建标记，而不是在运行前就已经写好在index.html里面。之前，我们学习的是如何用JavaScript操作那些已经写好在index.html中的标记，现在我们要用JavaScript直接创建标记。

##教学视频连结
* [YouTube](https://youtu.be/6mmdnm5nM0M)
* [微博](https://weibo.com/1736214117/GC7KviH6e)

##传统方法

传统方法方法不建议使用，只需大概了解一下，以便遇到时，知道是做什么的。

###document.write

`document.write("<p>This is inserted.</p>")`

###innerHTML

`innerHTML`既可以读取，也可以写入（赋值），但只能取得整体，不能取得里面的标记。

```
window.onload = function() {
  var testdiv = document.getElementById("testdiv");
  testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
  alert(testdiv.innerHTML);
}
```

##DOM方法

###createElement

```
var para = document.createElement("p");
alert(para.nodeName + ", " + para.nodeType);
```

###appendChild

```
var testdiv = document.getElementById("testdiv");
var para = document.createElement("p");
testdiv.appendChild(para);
```

###CreateTextNode

```
var txt = document.createTextNode("Hello world");
para.appendChild(txt);
```

###insertBefore

```
var gallery = document.getElementById("iamgegallery");
gallery.parentNode.insertBefore(placeholder, gallery);
```

要插入到gallery前面，那便是在其父元素底下进行。

###insertAfter

JavaScript不提供，自己写：

```
function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}
```

##修改图片库例子

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

function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

function preparePlaceholder() {
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;

  var placeholder = document.createElement("img");
  placeholder.setAttribute("id", "placeholder");
  placeholder.setAttribute("src", "https://via.placeholder.com/500x333");
  placeholder.setAttribute("alt", "description");
  
  var description = document.createElement("p");
  description.setAttribute("id", "description");
  var desctext = document.createTextNode("Choose an image");
  description.appendChild(desctext);
  
  var gallery = document.getElementById("imagegallery");
  insertAfter(placeholder, gallery);
  insertAfter(description, placeholder);
}

function prepareGallery() {
  if (!document.getElementsByTagName || 
      !document.getElementById ||
      !document.getElementById("imagegallery")) return false;

  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  for ( var i=0; i<links.length; i++) {
    links[i].onclick = function() {
      return showPic(this);
    }
    links[i].onkeypress = links[i].onclick;
  }
}

function showPic(whichpic) {
  if (!document.getElementById("placeholder")) return true;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);

  var text = whichpic.getAttribute("title");
  if (description = document.getElementById("description")) description.firstChild.nodeValue = text;
  return false;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
```