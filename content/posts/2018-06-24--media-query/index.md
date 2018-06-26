---
title: 网页设计学徒08：响应式网页设计与媒体查询
subTitle: 响应式设计是指网页会根据用户设备屏幕大小而调整版面以达致更好的用户体验；媒体查询（Media Query）则是实现这一设计的重要工具。
cover: media-query.jpg
category: "网页设计学徒"
---

![媒体查询](media-query.jpg)

随著手机和平板的普及，网页设计也从最初只需考虑电脑浏览器的大小发展到今天连小屏幕的使用体验也一并考虑。响应式网页设计（Responsive Web Design）正是为此而生。所谓响应式，便是网页会根据浏览器的宽度而自动调整页面的布局，例如：减少留白、将边栏移到主要内容之下、将横向排列的内容改为坚向排列并放大显示、还有图片和文字放大等等。

上一课所介绍的[CSS网格](/css-grid)本身便能够很好地支持响应式设计：只要使用fr或百分比作为单位，网格便会根据屏幕宽度调整大小。但为了更好地查看网页内容，在手机屏幕下，我们应该让正文占满整个宽度，并将边栏移到正文下方。要实现这个效果，我们便需要媒体查询（Media Query）。

##媒体查询（Media Query）

媒体查询是CSS的一部分，用起来和一般的CSS差不多。

###1. max-width

媒体查询允许你透过`@media`来查询浏览器屏幕的大小，并为之加入特定的CSS设定。例如：

```
@media (max-width: 600px) {
  body {
    font-size: 1.2rem;
  }
}
```

`max-width`是最大宽度，这里的意思便是，当屏幕宽度在600px以下（不超过最大宽度）时，应用以下设定。`@media`的大括号包着的是符合条件才会应用的设定，其写法和一般的CSS完全一样。上例中，将`body`的字体改为`1.2rem`。现在你将浏览器拉到小于600px，便会看到字体变大了。

###2. min-width

除了最大宽度，还有最小宽度`min-width`，用法一样，意思相反，即最少要达至该宽度以上才会应用其设定。你可以将上例改为`min-width`，并改动浏览器宽度以查看效果。

###3. and

如果你想要对600px到768px这个区间的屏幕（大屏手机及小型平板）进行特别设定，可以使用关键字`and`，如下例：

```
@media (min-width: 600px) and (max-width: 768px) {
  body {
    font-size: 1.5rem;
  }
}
```

`and`称为“与”运算，只有在左右两边的条件同时符合时才成立。上例便是，必须同时符合，最小宽度为600px（600px以上）以及最大宽度不超过768px（768px以下），也就是所要求的600px到768之间。

###4. 断点（breakpoint）

上述的600px和768px是常见的屏幕大小分界点，也称为断点（breakpoint），以下列出较常见的断点：

* 超小型设备（手机及以下）：600px以下

* 小型设备（平板坚屏、大屏手机等）：600px以上

* 中型设备（平板横屏等）： 768px以上

* 大型设备（笔电及桌上电脑等）：992px以上

* 超大型设备（大屏幕笔电及桌上电脑等）：1200px以上

你可以参考这些断点来针对不同设备提供不同设定。当然，今天的世界光手机屏幕大小都五花八门，这些断点是目前来讲常见的，或许明天又不一样了。若你发现有更适合自己网站的，也无须硬要跟随以上的断点。

###改变布局

回到上一课基本网站的布局的设计例子，我们原本采用的是双栏设计，现在要改成当屏幕宽度小于600px时，转为单栏设计，并将边栏移到正文的下方，这样行便会增加了一行（边栏），暂定为3rem。因此我们的`#site`会变成这样（注意：不要改动原本的`#site`）：

```
#site {
  grid-template-columns: 1fr;
  grid-template-rows: 3rem 3rem 1fr 3rem 3rem;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "aside"
    "footer"
}
```

可以看到，栏只剩一栏，占1fr；行变成五行，除了正文，其他各占3rem；`grid-template-areas`也相应变成只有一栏，从上往下将各个区域显示出来。

接着，我们将这段新设定放到媒体查询当中，并加到style.css的最后：

```
@media (max-width: 600px) {
  #site {
    grid-template-columns: 1fr;
    grid-template-rows: 3rem 3rem 1fr 3rem 3rem;
    grid-template-areas:
      "header"
      "nav"
      "main"
      "aside"
      "footer"
  }
}
```

这便代表着，只有在屏幕宽度小于600px时，这些设定才会生效。而在屏幕宽度大于600px时，则会用上原本的`#site`设定。

你或许已经注意到新的设定少了`display: grid;`这一行，这表示，新的设定没有要改变这一设定的意思，也就是这一设定在屏幕宽度少于600px时依然有效。更具体地说，只要没改，便依然有效。

最后，我们把`body`的字体放大一些，以方便在小屏幕中查看：

```
@media (max-width: 600px) {
  #site {
    grid-template-columns: 1fr;
    grid-template-rows: 3rem 3rem 1fr 3rem 3rem;
    grid-template-areas:
      "header"
      "nav"
      "main"
      "aside"
      "footer"
  }
  body {
    font-size: 1.2rem;
  }
}
```

现在尝试改变浏览器的宽度，当宽度小于600px时，你会看到边栏移到正文下方，字体会放大。

我已将这个例子上传到CodePen上，你可以查看效果並直接进行修改：[前往CodePen修改](https://codepen.io/ZacharyChim/pen/qKMKPY)

以上是媒体查询较常用到的功能，下面再介绍一些媒体查询也能做到的事情，你只需大概了解即可。

###5. min-height与max-height

可以查询宽度，自然也能查询高度。`min-height`与`max-height`便是对应的屏幕高度查询，用法和宽度基本相同。

###6. 横屏与坚屏

你还可以针对横屏和坚屏提供不同设定。

坚屏：`@media (orientation: portrait)`

横屏：`@media (orientation: landscape)`

当然，你可以组合使用： `@media (orientation: landscape) and (min-width: 600px)`，即横屏且屏幕宽度大于600px。

###7. 设备类型

媒体查询还能查询设备类型，以针对不同设备作出不同设定。常见的有以下几种：

* all：全部设备

* print：列印

* screen：屏幕

* projection：投影

* tv：电视

其他设备：braille／handheld／tty／embossed／speech

##总结

媒体查询让我们可以为不同屏幕大小提供不同的CSS设定，以实现响应式网页设计。媒体查询最重要的用法可以总结为以下程式：

```
@media (min-width: 600px) and (max-width: 768px) {
  body {
    font-size: 1.5rem;
  }
}
```

下一课，我们会继续深入，讨论一下什么是**移动优先**网页设计原则。

《网页设计学徒》课程链接：
1. [网页设计学徒01：什么是网页？](/web-design)
2. [网页设计学徒02：网页的语言、标题和图片](/html-tags)
3. [网页设计学徒03：VS Code专业程式编辑器](/vs-code)
4. [网页设计学徒04：网页由哪些部分构成？](/html-sementic)
5. [网页设计学徒05：用CSS美化网页](/css)
6. [网页设计学徒06：CSS盒子模型](/css-box-model)
7. [网页设计学徒07：CSS Grid网页排版2018](/css-grid)
8. [网页设计学徒08：媒体查询与响应式网页设计](/media-query)

《网页设计学徒》番外篇：
1. [CSS中px、em、rem有什么分别？](/px-em-rem)
2. [fr介绍：CSS网格带来的新单位](/fr-css-grid)
3. [CSS网格(CSS Grid)完整教学](/css-grid-grid)