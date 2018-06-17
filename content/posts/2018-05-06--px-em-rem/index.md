---
title: CSS中px、em、rem有什么分别？（视频）网页设计学徒番外篇01
subTitle: CSS有三种计量大小的单位：px、em、rem，它们到底有什么不同？何时用哪个？
cover: px-em-rem.jpg
category: "网页设计学徒"
---

![px, em, rem](/px-em-rem.jpg)

在CSS当中，有三个常见的计量单位：**px**、**em**和**rem**。它们都能表示大小，那它们有什么分别？为什么需要三个不同的单位？还有最重要的是，什么时候该用哪一个？这些问题便是本篇要回答的内容。

**视频链接**：

[Bilibili](https://www.bilibili.com/video/av23419060/)

[YouTube](https://youtu.be/PvE0knGPvlo)

##px是什么（pixel：像素）？

![pixel](/pixel.gif)

图片来源：[source](http://friendship-bracelets.net/a28799)

我们的萤幕是由一个个小方格构成，每一个方格称为一个像素（pixel）。同样大小的萤幕（如13吋），像素越多（如2560x1600），则画面越细致。CSS的px来自像素的概念，可以理解为萤幕上一个最小可见点，越多可见点（即像素越大），在萤幕上显示的效果也就越大。例如说，HTML预设的字体大小为16px。

##rem是什么？

**rem**是一个相对单位，它相对HTML的字体大小。例如说，当HTML字体大小为16px时，1rem就等16px，2rem就32px。这样的好处是，我们只要改变HTML字体大小，全部rem的大小也会随时改变，而不需要一个个地找出来修改。这种相对的设计，能很好地适应不同萤幕大小（例如，以电脑萤幕查看及以手机萤幕查看）。因此，随著越来越多人使用手机上网，rem也就越来越多人使用，我们也推荐大家尽量使用rem。

在Google浏览器的设定（右上角的三个点）中，外观的中间有一项字体大小的设定，试者将它设为很大，再分别将字体设为px跟rem。你会发现设为px时，网页字体没有任何变化，但设为rem时，字体也相应变大。

##em是什么？

**em**跟rem一样是相对单位，它跟rem不同的地方在于：rem相对的是HTML字体的大小，em相对的上层容器（如div）的字体大小。请看下例：

```
container {
  font-size: 20px
}

container p {
  margin: 1em;
  padding: 1rem;
}
```

可以看到`<p>`是在container这个`<div>`里面，即container这个`<div>`是这个`<p>`的上层。上层的container设定了字体大小为20px，这就会变成下层`<p>`的em的基础，即`<p>`的1em变成20px，但rem只考虑HTML的字体大小，因此仍然是16px。em也能很好地适应不同萤幕大小，但由于它是相对于上层，你需要对自己的各层级的字体大小有很清晰的概念，不然可能会弄混。

如果你没有修改过容器的字体大小，那么最上层的还是HTML，所有容器的字体大小都会跟随HTML，也就是rem跟em是一样的。

总的来讲，px、em和rem都能很好地完成任务（设定大小），我们推荐的优先次序如下：

##rem > em > px

当然，rem是基于HTML的字体大小，或要改变HTML的字体大小，我们要用px来设定。

```
html {
  font-size: 12px
}
```

另外，px、rem和em都可以用小数点，如0.5rem等。

##总结

1. px是最基本单位。
2. HTML字体的预设大小为16px。
3. rem相对于HTML字体大小，1rem等于一个单位HTML字体大小，若没改过HTML字体大小，1rem就等于16px。
4. em相对于上层容器字体大小，1em等于一个单位的上层容器字体大小。若上层容器字体大小为12px，则1em就等于12px。
5. px、rem和em都能用小数点表示。

《网页设计学徒》课程链接：
1. [网页设计学徒01：什么是网页？](/web-design)
2. [网页设计学徒02：网页的语言、标题和图片](/html-tags)
3. [网页设计学徒03：VS Code专业程式编辑器](/vs-code)
4. [网页设计学徒04：网页由哪些部分构成？](/html-sementic)
5. [网页设计学徒05：用CSS美化网页](/css)
6. [网页设计学徒06：CSS盒子模型](/css-box-model)
7. [网页设计学徒07：CSS Grid网页排版2018](/css-grid)

《网页设计学徒》番外篇：
1. [CSS中px、em、rem有什么分别？](/px-em-rem)
2. [fr介绍：CSS网格带来的新单位](/fr-css-grid)
3. [CSS网格(CSS Grid)完整教学](/css-grid-grid)