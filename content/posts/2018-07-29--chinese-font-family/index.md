---
title: 中文网页字体设定2018篇 - 《网页设计学徒》番外篇
subTitle: 2018年，Font-family怎样设定最适合中文网页？
cover: chinese-font-family.jpg
category: "网页设计学徒"
---

![中文网页字体](chinese-font-family.jpg)

在介绍 HTML 时，我们提到过在 index.html 中可以设定[网页的语言](/html-tags)：`<html lang="zh-cmn-hans">`；字符编码：`<meta charset="utf-8">`；但还有一项相当重要设定并未提到，那便是字体。这是因为字体要在 CSS 当中，透过`font-family`来设定。而且字体需要考虑的问题相当多，例如：

1.  若字体需要额外载入，字体文件的大小会影响网页的载入速度。特别是中文，字体文件以 MB 为单位，大大影响网页速度；

2.  `font-family`列出字体的顺序会影响最终套用的字体，因此，顺序也要考虑清楚；

3.  不同系统（Windows, OS X, Android 等）有不同的预设字体，当`font-family`列出的字体不存在时，会套用预设字体，这可能会导致网页在不同系统显示的效果不一样。

因此，今天我们就来讨论一下 2018 中文网页的字体该如何设定。

##使用系统预设字体

除非你的网站是关于字体或美术设计之类，必须使用特殊字体，否则的话，最好还是选择用户系统的预设字体。毕竟，字体不是网页的重点，文字内容才是；而且，现在的系统预设字体也都设计得相当不错（苹果有苹方，微软有雅黑）。另外还有两个重要的好处：

1.  原生感：网页字体和系统一致，让人感觉两者是一体的，更容易代入。

2.  速度：网页不用额外载入字体，速度更快。

##英文字体：国外大厂是怎样做的？

我们先来看看国外的大厂是怎样写`font-family`的，这对中文的写法有很大的参考价值。

首先来看全球最大内容管理系统(CMS：就是帮你架网站的系统)：[WordPress](https://make.wordpress.org/core/2016/07/07/native-fonts-in-4-6/)。据统计，全世界30%的网站都是用WordPress制作的。而它的`font-family`是这样写的：

```
body {
  font-family: -apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                Roboto,
                Oxygen-Sans,
                Ubuntu,
                Cantarell,
                "Helvetica Neue",
                sans-serif;
}
```

以下是每一项分别对应的系统：

1. **-apple-system** : iOS Safari, macOS Safari, macOS Firefox

2. **BlinkMacSystemFont** : macOS Chrome

3. **Segoe UI** : Windows

4. **Roboto** : Android, Chrome OS

5. **Oxygen-Sans** : KDE

6. **Ubuntu** : Ubuntu

7. **Cantarell** : GNOME

8. **Helvetica Neue** : 旧版macOS

9. **sans-serif** : 任何系统都有的字体

前两项对应了所有苹果公司的设备，让苹果系统自行选择字体（预设字体），第三项对应Windows设备，第四项是安桌，最后一项是每一个系统都会存在的字体，其他几项则是一些比较少见的系统。这样的设定已经能够让网页在绝大多数的系统上使用预设字体。

再看其他一些大站，如GitHub、Medium，所使用的设定都是大同小异。当然，WordPress的设定是深思熟虑以及大规模测试的。因此，我们可以以这个设定为基础，加入一些中文的考量。

##中文网页字体设定

-apple-system 和 BlinkMacSystemFont 让苹果系统自行匹配字体，实测也适用于中文，也就是说，苹果方面连中文也不用担心了。

Windows方面，Segoe UI是英文字体，我们需要加上中文字体："**Microsoft YaHei**"（**微软雅黑**）。微软雅黑的英文字体是基于Segoe的，但配合中文字作了些许调整（比较大之类），所以，更适合中英文同时显示的情况。换句话说，只要这个网页有中文，就把雅黑放在Segoe前面。若你使用的繁体中文，则将雅黑换成**微软正黑**：**Microsoft JhengHei**。

其实，苹果和微软这两个系统已经涵盖了大多数情况，其他的可以让它自动选择即可。你可能会说，安卓的份额也相当大，但问题是，手机厂商未必使用安卓预设的字体（**思源黑体**），这就使得，即使指定思源黑体却未必是手机的预设字体，所以，干脆就让手机自行决定。若你还是想要指定的话，可以在Roboto前加入：**Noto Sans CJK SC**；繁体则为：**Noto Sans CJK TC**。

##总结：2018年中文网页字体设定

综上所述，我们得到中文网页字体的“正确”设定方法为：

```
body {
  font-family: -apple-system,
                BlinkMacSystemFont,
                "Microsoft YaHei"
                "Segoe UI",
                Roboto,
                Oxygen-Sans,
                Ubuntu,
                Cantarell,
                "Helvetica Neue",
                sans-serif;
}
```

比起WordPress的版本只增加了`"Microsoft YaHei"`；要不要加入思源黑体，请自行决定；繁体中文只要将相应的字体换成繁体即可。

事实上，这一设定已经得到越来越多设计师的认可，就连VS Code的预设值也提供了一个非常类似的选项（英文版）。输入完`font-family`后，输入`-`，按下Tab或Enter便能得到该选项，只要加入微软雅黑，中文字体设定就完成，无需记住每一个字体。

《网页设计学徒》课程链接：

1.  [网页设计学徒 01：什么是网页？](/web-design)
2.  [网页设计学徒 02：网页的语言、标题和图片](/html-tags)
3.  [网页设计学徒 03：VS Code 专业程式编辑器](/vs-code)
4.  [网页设计学徒 04：网页由哪些部分构成？](/html-sementic)
5.  [网页设计学徒 05：用 CSS 美化网页](/css)
6.  [网页设计学徒 06：CSS 盒子模型](/css-box-model)
7.  [网页设计学徒 07：CSS Grid 网页排版 2018](/css-grid)
8.  [网页设计学徒 08：媒体查询与响应式网页设计](/media-query)
9.  [网页设计学徒 09：移动优先设计原则](/mobile-first)
10. [网页设计学徒10：VS Code整合GitHub](github-vscode)

《网页设计学徒》番外篇：

1.  [CSS 中 px、em、rem 有什么分别？](/px-em-rem)
2.  [fr 介绍：CSS 网格带来的新单位](/fr-css-grid)
3.  [CSS 网格(CSS Grid)完整教学](/css-grid-grid)
4.  [中文网页字体设定2018篇](chinese-font-family)
