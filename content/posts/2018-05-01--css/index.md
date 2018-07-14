---
title: 网页设计学徒05：用CSS美化网页【视频教学】
subTitle: CSS（层叠样式表）用于为网页添加样式（字体、间距和颜色等）
cover: css.jpg
category: "网页设计学徒"
---

![CSS层叠样式表](/css.jpg)

[上一课](/html-sementic)我们介绍了一个网页该有的基本结构，这也提醒了我们，HTML负责的是网页的结构，至于网页的样式，或者说美化工作则是由CSS专门负责。

**CSS**，全称Cascading Style Sheets，中文翻译**层叠样式表**。简单来讲，CSS是用来辅助HTML，使两者得到更好的**分工**：

* HTML：结构
* CSS： 设计

今天我们就要学习怎样用CSS使网页变得更美观。

**视频链接**：
[Bilibili](https://www.bilibili.com/video/av22893762/)
[YouTube](https://youtu.be/9ZCP7ibSVDw)

##如何将CSS加入HTML

为HTML加入CSS的方法有三种：

1. 内联样式（Inline CSS）：不建议使用
2. 内部样式表（Internal CSS）：尽量避免使用
3. 外部样式表（External CSS）：推荐

###内联样式

直接加到HTML标签中：

`<h1 style="color:red">正文标题</h1>`

style：表示接下来的内容是样式。
color：称为属性，即你要设定的内容，这里便是颜色。
red：值，即为上面属性（color）的值。这引号里面的意思便是：将颜色设为红色。

为什么不建议使用内联样式呢？因为CSS的其中一个重要任务便是帮HTML分工，也就是HTML只负责结构，CSS负责样式。但内联的方式便是在结构标签（如`<h1>`）中加入样式，这便违背了CSS的分工目的。也会因为HTML标签多了CSS样式，使得整个HTML文件更复杂更乱，我们也很难看清网页的结构。再者也无法统一管理，例如，我要设定所有段落（`<p>`）的文字颜色为蓝色，用内联的话，我就要找到所有的`<p>`标签，分别加入上例的样式。但若是采用内部或外部样式表则只要进行一次设定，便对所有的`<p>`有效。

请先移除`<h1>`里面的`style="color:red"`以便下例示范。

###内部样式表

在`<head>`当中使用`<style>`标签：

```
<head>
	<title>我是标题</title>

	<style type="text/css">
		h1 {
			color: red;
		}
	</style>

	<meta charset="utf-8">
</head>
```

`<style type="text/css">`：代表样式开始，其类型（type）为文字（text）中的CSS（CSS和HTML一样都是文字类型）。
`h1`：称为选择器，即我们要选哪个标签进行设定，这里选的是`<h1>`标签。后面大括号`{...}`所装的东西都是针对这个选择器的设定。
`color:red;`：这是color属性的设定，分号`;`为一个属性设定的结束。其中最后一个属性（即`}`前一个）可省略分号。

内部样式表将所有的CSS程式集中在一起，方便管理及修改，但它还是将CSS写在了HTML文件当中，分工不够充分，所以建议尽量少用。

请先移除`<style>`标签及里面的全部内容以便下例示范。

###外部样式表

顾名思义，外部样式表便是建立一个独立的CSS文件，将所有的样式放在里面，再告诉HTML去哪里找到这个文件。

我们来实际操作一下，在index.html同一个文件夹中新增一个文件，叫style.css。而在style.css里面就可以像在`<style>`标签当中一样进行设定。例如，我们在style.css当中输入：

```
h1 {
  color: red;
}
```

保存后，我们回到index.html。接著我们要告诉index.html去哪里找到这个CSS文件。这里我们可以透过`<link>`（连结）标签完成，和`<style>`一样的这个标签要放在`<head>`里面：

```
<link rel="stylesheet" type="text/css" href="style.css">
```

`rel="stylesheet"`：rel来自relationship（关系），代表要连结的文件与本文件的关系，"stylesheet"便是样式表，也就是说，要连结的文件（style.css）是本文件（index.html）的样式表。

`type="text/css"`：和前面的`<style>`标签中一样，连结文件的类型是文字当中的CSS。

`href="style.css"`：我们在`<a>`标签已经见过"href"，可以简单把它理解成地址，也就是连结文件的所在地，这里便是在同一个文件夹里找"style.css"这个文件。

以后你要设定样式，可以打开style.css直接修改，保存后，index.html会自动同步所有的样式。

这样，网页的结构全部放在HTML文件中，而CSS样式则全部放在CSS文件中，分工便非常清晰了。

三种方式使用CSS，效果是完全一样的，但你应该尽可能的使用外部样式表。

###CSS样式实例

要设定CSS，就是要问三个问题：

1. **要对什么进行设定？**如上例，要对`<h1>`标签进行设定，"h1"便是选择器。
2. **要设定什么？**如上例，要设定`<h1>`的颜色，"color"便是属性。
3. **要设为什么？**如上例，要将color设为红色，"red"便是"color"属性的值。

于是，我们便得到：

```
h1 {
  color: red;
}
```

假设，我们现在要将整个网页的背景色（background-color）设为灰色（gray）。网页内容是从`<body>`标签开始的，因此，选择器为"body"：

```
body {
  background-color: gray;
}
```

CSS最常用十六进制表示颜色，例如：

```
body {
  background-color: #333333;
  color: #ffffff;
}
```
十六进制有0到9（十个数字）再加上字母A到F（六个字母，大小写皆可），共十六个符号表示。如上例，`#ffffff`是十六进制的白色，你不需要深究十六进制，只要知道以`#`开头，就是用十六进制，基本上你只会在颜色看到，由数字0到9加上字母A到F组成，一个颜色包含六个数字或／与字母。

查询CSS可以设定哪些东西：[W3Schools](http://www.w3school.com.cn/css)

查询好看（现代）的配色建议：[Flat UI Colors](https://flatuicolors.com/)

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