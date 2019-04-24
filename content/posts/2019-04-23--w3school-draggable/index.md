---
title: 可拖拉效果如何实现 - W3Schools视频08完结
category: "coding"
cover: draggable.jpg
author: Zack
---

![可拖拉效果](draggable.jpg)

顾名思义，可拖拉效果便是让网页上的元素可以被拖拉到别的地方。其基本逻辑是，在按下滑鼠并拖动元素时，改变元素的文件。很明显，这需要JavaScript监听滑鼠按下的事件（onmousedown）来实现，因此，这个功能的重点就在JavaScript的部分。现在就来看看W3Schools是如何完成这一功能。

* [W3Schools可拖拉效果教学](https://www.w3schools.com/howto/howto_js_draggable.asp)

## 视频连结

* [B站](https://www.bilibili.com/video/av50303514)
* [YouTube](https://youtu.be/sZ7FVnGgvNc)

## 可拖拉效果

可拖拉效果的重点全在JavaScript上。JavaScript分成四个函数来完成：

1. `dragElement(elmnt)`：判断可拖拉区域。
2. `dragMouseDown(e)`：当滑鼠在可拖拉区域按下时，记录当下元素位置，若接下来滑鼠移动，可执行`elementDrag(e)`；若滑鼠松开则执行`closeDragElement()`。
3. `elementDrag(e)`：拖动时执行，计算位置差，为元素设定新位置
4. `closeDragElement`:滑鼠松开时，清除`document.onmouseup`和`document.onmousemove`。

### 可拖拉效果HTML和CSS

由于HTML和CSS的部分比较简单，这里一并放上：

HTML
```
<div id="mydiv">
  <div id="mydivheader">Click here to move</div>
  <p>Move</p>
  <p>this</p>
  <p>DIV</p>
</div>
```

CSS
```
#mydiv {
  position: absolute;
  z-index: 9;
  background-color: #f1f1f1;
  text-align: center;
  border: 1px solid #d3d3d3;
}

#mydivheader {
  padding: 10px;
  cursor: move;
  z-index: 10;
  background-color: #2196F3;
  color: #fff;
}
```

这些设定主要是为了元素的外观，唯一必要的是父级容器`mydive`的`position: absolute;`，这样子级的`mydivheader`的位置便是

### 可拖拉效果JavaScript

以下是JavaScript的部分，一共有4个函数，后面会逐一讲解：
```
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
```

首先，将`mydiv`作为参数（elmnt）传入`dragElement`。

在`dragElement`当中判断是否存在`mydivheader`，若存在，则针对`mydivheader`的`onmousedown`处理拖拉；若不存在，则针对`mydiv`的`onmousedown`处理拖拉。

`dragMouseDown(e)`是处理拖拉的主体函数。一般跟这个事件相关的数据会透过参数`e`传入，但较旧的IE（IE8及以下）则会透过`window.event`传入，因此，第一行的意思是：若存在参数`e`就直接使用；若不存在，就使用`window.event`。而第二行则是取消这个事件的预设动作，因为我们要主动控制接下来的动作。接着，将元素（mydivheader）的当前位置，也就是初始位置，记录下来。最后根据接下来发生动作执行不同的函数。如果滑鼠移动了，就执行`elementDrag`；松开了，就执行`closeDragElement`。

`elementDrag(e)`是对应滑鼠按下后发生移动的处理。同上先取消事件的预设动作，再记录下位置差（X轴和Y轴），并且用新的位置作为初始位置。最后根据位置差更改元素的位置。要注意，这里使用旧的位置减去新的位置（如`pos1 = pos3 - e.clientX`），所以计算元素新位置时要用减法（`elmnt.offsetLeft - pos1`）。如果你用新的位置减去旧的位置（如`pos1 = e.clientX - pos3`），则计算元素新位置时要用加法（`elmnt.offsetLeft + pos1`）。

`closeDragElement`则是简单的将`document.onmouseup`和`document.onmousemove`清空（null）。这样，元素对滑鼠的移动和松开事件便不再有反应。

至此，可拖拉效果也就实现了。

## W3Schools视频系列完结
W3Schools视频系列也同样结束了，希望这个系列对你来讲是有帮助的。

W3Schools系列的代码都在GitHub上：[W3Schools GitHub](https://github.com/ZacharyChim/W3Schools)

## W3Schools教学系列

[W3Schools](https://www.w3schools.com)是知名的网页设计／前端开发教学网站，不仅提供HTML、CSS、JavaScript等的详尽教学，还可以把它当作说明文件（Documents）。有经验的前端或多或少已经接触过这个网站，因为它经常出现在搜索结果的前几项。其中，它的[How To](https://www.w3schools.com/howto/default.asp)部分更是包含了大量非常实用的例子，例如，如何制作SlideShow（图片轮播）、Lightbox、Parallax（视差效果）等等。因此我想做一系列的影片专门介绍这些How To。

W3Schools系列全部视频：

1. [Float响应式网页布局](https://zacklive.com/w3schools-web-layout/)
2. [Flexbox响应式网页布局](https://zacklive.com/w3schools-flex/)
3. [CSS Grid响应式网页布局](https://zacklive.com/w3schools-grid/)
4. [幻灯片如何实现](https://zacklive.com/w3schools-slideshow/)
5. [响应式导航如何实现](https://zacklive.com/w3schools-responsvie-nav/)
6. [灯箱效果如何实现](https://zacklive.com/w3schools-lightbox/)
7. [Parallax-视差效果如何实现](https://zacklive.com/w3schools-parallax/)
8. [可拖拉效果如何实现](https://zacklive.com/w3schools-draggable/)