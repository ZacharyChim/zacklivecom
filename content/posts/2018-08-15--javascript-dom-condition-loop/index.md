---
title: 《JavaScript DOM编程艺术》02：条件与循环
cover: dom-scripting.jpg
category: "JavaScript学徒"
author: Zack
---

![JavaScript DOM 编程艺术](dom-scripting.jpg)

本课介绍JavaScript语法中的条件语句和循环语句。《JavaScript DOM 编程艺术》是受到众人推崇的JavaScript入门书籍。《JavaScript学徒》系列将以此书为教材来制作JavaScript学习影片。

这是《JavaScript学徒》系列的第二课，本课会继续《JavaScript DOM 编程艺术》第2章，介绍JavaScript语法中的条件语句和循环语句。

##视频连结
* [YouTube](https://youtu.be/Gi1s6wh6kG0)
* [YouKu](https://v.youku.com/v_show/id_XMzc5MTg5MTk1Ng==.html)
* [BiliBili](https://www.bilibili.com/video/av29972831/)

##条件语句

如果（if）条件成立，则执行大括号里的语句；否则，执行`else`后面的语句。条件放在小括号里，须为布尔值。

```
if (1 > 2) {
  alert("小括号里的条件成立！")；
} else {
  alert("条件不成立！")；
}
```

##比较操作

条件当中可进行比较操作
* 大于： >
* 小于： <
* 等于： == （一个等号是赋值，两个等号才是等于）
* 大于等于： >=
* 小于等于： <=
* 不等于： !=
* 严格等于： ===（比前面提到的等于更严格，建议使用）
* 严格不等于： !==（同理）

##逻辑操作

同样用于条件语句：

* 逻辑与：&& （必须左右同时成立）
```
if (n > 5 && n < 10) {
  alert(n必须同时大于5且小于10，即6到9之间，条件才成立);
}
```

* 逻辑或：|| （任一条件成立即可）
```
if (n < 5 || n > 10) {
  alert(n小于5或者大于10，条件都成立);
}
```

* 逻辑非： ! （相反）
```
if ( !(1 > 2) ) {
  alert(小括号里先运算，再反转，结果为true);
}
```

##循环语句

当条件成立时，执行某段程式，一直循环到条件不再成立。因此，在循环过程中应对条件中的变量作一定程度的改动，条件才会发生变化，最终使条件不再成立，循环结束；否则将会进入无限循环，使电脑死机。

###While循环

```
var count = 1;
while ( count < 5 ) {
  alert(count);
  count++;
}
```

do-while: 至少会执行一次。

```
var count = 1;
do {
  alert(count);
  count++;
} while ( count < 1 );
```

###For循环

For循环将循环相关的设定全部放在括号里：

```
for ( var count = 1; count < 5; count++ ) {
  alert(count);
}
```

常用于数组的遍历（全部元素走一遍）

```
var names = ["John", "David", "Mike"];

for ( var count = 0; count < names.length; count++ ) {
  alert(names[count]);
}
```

`names.length`可以取得数组的长度。