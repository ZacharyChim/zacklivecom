---
title: fr介绍：CSS网格带来的新单位（网页设计学徒番外篇02）
subTitle: CSS Grid带来新的单位：fr，代表对剩余空间进行等分。
cover: fr-css-grid.jpg
category: "网页设计学徒"
---

![fr CSS Grid](fr-css-grid.jpg)

CSS网格（grid）大大地降低了网页布局设计的难度，个人认为是最近几年，CSS最重要的更新。从此以后，即使没有[Bootstrap](https://getbootstrap.com/)之类的框架协助也能轻松用网格的模式进行网页布局设计。

**视频链接**：

[Bilibili](https://www.bilibili.com/video/av24356617/)

[YouTube](https://youtu.be/2kF52soxce0)

与CSS网格关系密切的是一个新的单位：fr（来自英文：fraction）。fr将**剩余的空间**进行**等分**，每一个单位便是一等份。我们用一个基本例子进行解释。

##fr例子

以下是一个网页`<body>`内容：

```
<div id="site">
  <div id="part1"></div>
  <div id="part2"></div>
  <div id="part3"></div>
  <div id="part4"></div>
</div>
```

而CSS设定如下：

```
#site {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-template-rows: 100px;
}

#part1 {
  background: blue;
}

#part2 {
  background: green;
}

#part3 {
  background: gray;
}

#part4 {
  background: red;
}
```
我们得到如下画面：

![fr例子](fr-example.jpg)

当然，要做到同样效果，我们也可以用百分比代替fr：

```
grid-template-columns: 40% 20% 20% 20%;
```

两者差异在於，百分比用的是整个萤幕的宽度，而**fr用的是剩余的宽度**。上例中，剩余宽度跟整个萤幕的宽度是相同的。但要是我们为grid加入了gap（空白）那就不一样了：

```
grid-column-gap: 20px;
```

这代表每两栏之间加入20px的空白。如果栏是用百分比来设定的，栏总共已经占满百分之百（40% + 20% + 20% + 20% = 100%），这些空白会变成额外的宽度，也就是会超越整个萤幕的宽度，导致我们要向右拉一段才能看到右侧尽头，而浏览器底部也会出现左右拉动的滚动条。

但若使用fr，由于是剩余宽度，也就是会先减去空白会占掉的空间，再将剩下的空间按比例分配，这样，便能保证不会超出萤幕宽度。

如果你将网格的其中一栏（或多栏）设为固定数值，那fr也会减掉这个固定值，再进行等分：

```
  grid-template-columns: 2fr 100px 1fr 1fr;
```

这里的第二栏设定为固定值100px，这100px会被减去，然后以剩下的宽度作等分，2份给第一栏，1份给第三栏，1份给第4栏。

若同时存在固定值和空白，则两者都会被减去，再等分。

##总结：fr就是以可用空间进行等分。

CSS网格带来的fr单位是一个弹性单位，它会先将已固定的数值减去，再用剩下的可用空间进行等分。这在网页的布局设计上非常有用，推荐大家尽量使用。

《网页设计学徒》课程链接：
1. [网页设计学徒01：什么是网页？](/web-design)
2. [网页设计学徒02：网页的语言、标题和图片](/html-tags)
3. [网页设计学徒03：VS Code专业程式编辑器](/vs-code)
4. [网页设计学徒04：网页由哪些部分构成？](/html-sementic)
5. [网页设计学徒05：用CSS美化网页](/css)
6. [网页设计学徒06：CSS盒子模型](/css-box-model)

《网页设计学徒》番外篇：
1. [CSS中px、em、rem有什么分别？](/px-em-rem)
2. [fr介绍：CSS网格带来的新单位](/fr-css-grid)