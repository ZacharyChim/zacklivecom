---
title: 网页设计学徒09：移动优先设计原则
subTitle: 移动优先(Mobile First)设计原则是指优先设计手机版的网页，再设计平板与桌面版本。
cover: mobile-first.jpg
category: "网页设计学徒"
---

![移动优先设计](mobile-first.jpg)

这一课我们要讲**移动优先(Mobile First)**设计原则。这个原则很简单，就是从小到大：先设计手机版的网页界面，再透过[媒体请求](/media-query)完成版面较大的平板与桌面版的设计。

**视频连结**

1. [YouTube](https://youtu.be/qLsa_BnoqE0)

2. [BiliBili](https://www.bilibili.com/video/av26697768/)

3. [YouKu](https://v.youku.com/v_show/id_XMzcxOTI4MzkyMA==.html)

我们以上一课的例子来实作一下，让大家能够了解这一思路。

##移动优先设计原则实例

首先我们要思考不同版本之间的差异。

这个例子中我们一共有两个版本，手机和桌面版本，平板就省略掉，但思路是一样的，也可能自先完成。两者的差异只有字体大小和网格的布局。

手机版为优先，与之相关的CSS便是主要的CSS内容；而桌面版非优先，其专属的CSS则要放在媒体请求当中。

因此，我们一开始的网格设计应该以手机版为主，一栏五行的设计，所以`#site`应该是这样：

```
#site {
  display: grid;
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

另外在`body`里则要加入字体大小：

```
body {
  background: #333;
  color: #fff;
  font-size: 1.2rem;
}
```

其他保持原样，这样便完成手机版的设计。

桌面版非优先，所以放在媒体查询当中。我们将屏幕宽度大于600px的都当作桌面版，因此查询条件为最小宽度为600px，即宽度600px以上套用以下设定：

```
@media (min-width: 600px) {

}
```

在媒体查询当中，我们要将网格的设计改为两栏四行：

```
@media (min-width: 600px) {
  #site {
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 3rem 3rem 1fr 3rem;
    grid-template-areas:
      "header header"
      "nav    nav"
      "main   aside"
      "footer footer"
  } 
}
```

同样地，`display: grid`这一行不用重复。

最后再将字体缩小，最后的媒体查询如下：

```
@media (min-width: 600px) {
  #site {
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 3rem 3rem 1fr 3rem;
    grid-template-areas:
      "header header"
      "nav    nav"
      "main   aside"
      "footer footer"
  }
  body {
    font-size: 1rem
  }
}
```

##总结：移动优先=从小到大地设计

移动优先设计原则就是这么简单，从宽度最小的开始设计，接著利用媒体查询的`min-width`一级一级地扩大。这样，整个设计便有一个系统可循，你的CSS也一层一层地分得很清楚，不会因为媒体查询的加入而让整个设计乱了套。

这便是今天的内容，下一课我们会讨论一下VS Code与GitHub的整合。

《网页设计学徒》课程链接：
1. [网页设计学徒01：什么是网页？](/web-design)
2. [网页设计学徒02：网页的语言、标题和图片](/html-tags)
3. [网页设计学徒03：VS Code专业程式编辑器](/vs-code)
4. [网页设计学徒04：网页由哪些部分构成？](/html-sementic)
5. [网页设计学徒05：用CSS美化网页](/css)
6. [网页设计学徒06：CSS盒子模型](/css-box-model)
7. [网页设计学徒07：CSS Grid网页排版2018](/css-grid)
8. [网页设计学徒08：媒体查询与响应式网页设计](/media-query)
9. [网页设计学徒09：移动优先设计原则](/mobile-first)

《网页设计学徒》番外篇：
1. [CSS中px、em、rem有什么分别？](/px-em-rem)
2. [fr介绍：CSS网格带来的新单位](/fr-css-grid)
3. [CSS网格(CSS Grid)完整教学](/css-grid-grid)