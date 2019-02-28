---
title: Flexbox响应式网页布局 - W3Schools视频02
category: "coding"
cover: w3schools-flex.jpg
author: Zack
---

![Flex响应式网页布局](w3schools-flex.jpg)

今日继续[W3Schools响应式网页布局](https://zacklive.com/w3schools-web-layout/)的实现，采用**Flexbox**方案。使用Flexbox实现响应式网页布局是目前最流行的做法。如果你对Flexbox并不熟悉，可以查看W3Schools的教学：

* [W3Schools Flexbox教学](https://www.w3schools.com/css/css3_flexbox.asp)

* [Flexbox实现响应式网页布局例子](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_make_a_website)

## 视频连结

* [B站](https://www.bilibili.com/video/av44889284/)
* [YouTube](https://youtu.be/0URcIG52iNI)

## Flexbox响应式网页布局

透过Flexbox实现响应式网页布局同样可分为三步：

1. 将容器显示为flex，并让它wrap；
2. 将需要响应的元素放在容器当中，并用百分比设定每一个元素的basis；
3. 通过**Media Query**将容器的flex方向改为column（预设为row）。

在W3Schools的例子中，Flex容器是这样设定的：

```
.row {  
  display: flex;
  flex-wrap: wrap;
}
```

容器当中的两栏，即Flex项目：

```
/* Sidebar/left column */
.side {
  flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
}

/* Main column */
.main {
  flex: 70%;
  background-color: white;
  padding: 20px;
}
```

最后是媒体查询，断点设在700px:

```
@media screen and (max-width: 700px) {
  .row {
    flex-direction: column;
  }
}
```

## 改进：移动优先

同样地，我们也对这个例子进行移动优先的改进，当作是练习。

Flex容器：

```
.row {  
  display: flex;
  flex-direction: column
}
```

Flex项目：

```
.side {
  padding: 20px;
  background-color: #f1f1f1;
}

/* Main column */
.main {
  padding: 20px;
  background-color: white;
}
```

媒体查询：

```
@media screen and (min-width: 700px) {
  .row {
    flex-direction: row;
  }
  .side {
    flex: 30%;
  }
  .main {
    flex: 70%;
  }
}
```

一样是，将媒体查询内外的内容交换。

W3Schools系列的代码都在GitHub上：[W3Schools GitHub](https://github.com/ZacharyChim/W3Schools)

## W3Schools教学系列

[W3Schools](https://www.w3schools.com)是知名的网页设计／前端开发教学网站，不仅提供HTML、CSS、JavaScript等的详尽教学，还可以把它当作说明文件（Documents）。有经验的前端或多或少已经接触过这个网站，因为它经常出现在搜索结果的前几项。其中，它的[How To](https://www.w3schools.com/howto/default.asp)部分更是包含了大量非常实用的例子，例如，如何制作SlideShow（图片轮播）、Lightbox、Parallax（视差效果）等等。因此我想做一系列的影片专门介绍这些How To。

1. [Float响应式网页布局](https://zacklive.com/w3schools-web-layout/)
2. [Flexbox响应式网页布局 - W3Schools视频02](https://zacklive.com/w3schools-flex/)