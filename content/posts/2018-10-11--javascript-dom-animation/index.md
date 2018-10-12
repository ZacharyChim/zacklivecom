---
title: 《JavaScript DOM编程艺术》14：动画
category: "JavaScript学徒"
cover: dom-scripting.jpg
author: Zack
---

![JavaScript DOM编程艺术](dom-scripting.jpg)

这是《JavaScript学徒》系列的第十四课，今天会介绍《JavaScript DOM编程艺术》第10章动画，学习用JavaScript来实现动画效果。

##教学视频连结

##setTimeout & clearTimeout

```
movement = setTimeout("moveMessage()", 3000);
```

```
clearTimeout(movement);
```

##parseInt & parseFloat

提取数值：

```
parseInt("39 steps");
```
会得到数值39.

提取浮点数（带小数点）可以用`parseFloat`。

##moveElement函数

```
function moveElement(elementID, final_x, final_y, interval) {
  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == final_x && ypos == final_y) {
    return true;
  }
  if (xpos < final_x) {
    xpos++;
  }
  if (xpos > final_x) {
    xpos--;
  }
  if (ypos < final_y) {
    ypos++;
  }
  if (ypos > final_y) {
    ypos--;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('" +elementID+ "'," +final_x+ "," +final_y+ "," +interval+ ")";
  elem.movement = setTimeout(repeat, interval);
}
```
使用moveElement：
```
moveElement("message", 200, 100, 10);
```

##为元素创建属性

```
elem.movement = setTimeout(repeat, interval);
```
这样，`setTimeout`的handler就交给了elem的movement属性，接下来，可以使用：

```
if (elem.movement) {
  clearTimeout(elem.movement);
}
```
先判断`elem.movement`，也就是是否已执行过`setTimeout`，若是，则清除之前的队列，再执行新的`setTimeout`。

##Math.ceil, Math.floor & Math.round

* Math.round：四舍五入，取最接近的整数
* Math.ceil：向较大值舍入，取最接近的整数
* Math.floor：向较小值舍入，取最接近的整数

```
var dist = 0;
if (xpos > final_x) {
  dist = Math.ceil( (xpos - final_x)/10 );
  xpos = xpos - dist;
}
```

这样可使动画每次移10之一的距离，达到一开始移动较快，渐渐慢下来的效果。

##《JavaScript DOM编程艺术》完结

《JavaScript DOM编程艺术》剩下的章节介绍了HTML5、JavaScript的一些框架以及一个综合示例。由于并没有太多新内容或与JavaScript本身关系不大，我就不深入了。其中，值得一提的是JavaScript框架的部分。本书撰写时，jQuery仍是主流，但现在，建议学习React.js或者Vue.js。