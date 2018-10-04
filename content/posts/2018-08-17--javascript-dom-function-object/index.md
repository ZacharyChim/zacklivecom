---
title: 《JavaScript DOM编程艺术》03：函数与对象
category: "JavaScript学徒"
cover: dom-scripting.jpg
author: Zack
---

![JavaScript DOM编程艺术](dom-scripting.jpg)

本课介绍JavaScript中的函数与对象。《JavaScript DOM编程艺术》是受到众人推崇的JavaScript入门书籍。《JavaScript学徒》系列将以此书为教材来制作JavaScript学习影片。

这是《JavaScript学徒》系列的第三课，本课会继续《JavaScript DOM编程艺术》第2章，介绍JavaScript中的函数与对象。

##教学视频连结
* [YouTube](https://youtu.be/8CynRzsC74I)
* [BiliBili](https://www.bilibili.com/video/av29987143/)
* [YouKu](https://v.youku.com/v_show/id_XMzc5MjE3MzAxMg==.html)
* [腾讯](http://v.qq.com/x/page/h0730b7fsg2.html)

##函数

函数是将一段程式码封装起来，以便重覆使用。

```
function printNames() {
  var names = ["John", "David", "Mike"];
  for ( var count = 0; count < names.length; count++ ) {
    alert(names[count]);
  }
}
```
以上声明了一个`printNames`函数，以后只要使用：

```
printNames();
```

函数内的程式码就会被执行一次。

JavaScript提供很多内建函数，包括`alert`。`alert`的括号里放的是参数，是外界提供给函数内部使用的数据，不同的函数会对参数作不同的处理，例如，`alert`将参数显示在弹窗上。函数可以没有参数，如上例的`printNames`，也可以有多个参数：

```
function multiply(num1, num2) {
  var total = num1 * num2;
  return total;
}
```

上例的`multiply`函数接受两个参数，并将它们相乘，再传回：`return total;`。由于有数据返回，所以使用这可函数时应用一个变量接住返回值：

```
var result = multiply(2, 5);

// result = 10
```

函数名不能有空格，大家常使用驼峰式命名：从第二个单字开始，每个单字的第一个字母大写，如printNames。

##变量的作用域

变量的有效范围称为**作用域**（scope）。函数内部声明的变量，如前例`multiply`里的total，只在函数里面有效，称为局部变量（local variable）。而在函数之外，也就是在主程式中声明的变量，则是在任何地方都有效，包括在函数里也能使用，因此称为全局变量（global variable）。

简单的讲，函数开创的自己的小世界。在这个小世界里，可以取用外面大世界的资源（变量），但是，在小世界里原创的变量，只在小世界里有效。除非是透过返回（return）送到大世界，否则，大世界是不承认小世界中原创的变量。

##对象

在[数据类型](/javascript-dom-data-type)中，已经提到过对象（object）。对象是一个数据集合，里面包含两种数据：

1. **属性**（property）：专属于该对象的变量。
2. **方法**（method）：专属于该对象的函数。

可以看到，简单来讲，对象只是将变量和函数整合在一起。

对象的数据透过“点”`.`来访问。假设我们有一个`Person`对象，它有一个`age`属性和一个`sleep`方法，可以分别这样访问：

```
Person.age;
Person.sleep();
```

对象描述了一种数据结构，例如，`Person`这种结构是由`age`属性和`sleep`方法构成。当应用这一结构是，我们要将它实例化，也就是创造这种结构的实际例子（**实例**：instance）：

```
var john = new Person;

alert(john.age);
john.sleep();
```

上例透过`new`关键字建立了一个`Person`的实例，叫做`john`。`john`是一个变量，所以用`var`来声明。这个`john`变量里面存放著一个`Person`对象，换句话说，`john`是`Person`的一个实例，因此，`john`具有`Person`的属性和方法，也就可以使用：`john.age`和`john.sleep()`。

我们可以自行建立对象，JavaScript也提供了一些内建的对象给我们使用。

##JavaScript的内建对象

数组是一个内建对象，以下建立一个数组的实例：

```
var names = new Array();
```

我们可以使用数组的属性取得数组中的元素个数：`names.length`。

`Math`对象提供很多与数学相关的方法，如`Math.round()`可以做四舍五入：

```
var num = 3.5567;
var num2 = Math.round(num);
alert(num2);
```

`Date`对象提供跟时间与日期相关的方法，创建`Date`对象的实例时，会自动使用当前时间：

```
var current_day = new Date();
```

`Date`对象也提供各种实用的方法包括：

* getDay()：取得星期几
* getHours()：几点钟
* getMonth()：取得月份

```
var today = current_day.getDay();
```

##第二章JavaScript基础语法结束

第二章将JavaScript的基础语法快速地介绍了一遍，很多内容没有深入讲解。这种做法，我是支持的。毕竟，现阶段一下子讲太多，读者也无法消化。反而是有了一点基本概念，然后在实际应用中慢慢消化，或许效果会更好。