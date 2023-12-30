# 考试问卷

> 这是针对个人能力测试的基本测试题，此次测试围绕基本的HTML，CSS和Javascript知识。
> ！！！考试问卷分两个部分：必答题和可选题。
> [必答题]请根据自己的真实情况，闭卷完成。
> [可选题]既可闭卷完成，也可开卷完成。
> 选择题都是单选，选择的某个选项的方式是输入小写x到对应中括号里，像这样[x]


## 第零章 网络篇

1. 什么是互联网？
[ ] a. Google/Baidu
[x] b. 万维网 World Wide Web
[ ] c. 通过网络连接在一起的所有电脑
[ ] d. 以上全部

2. 什么是浏览器？
[ ] a. 一个HTML系统
[ ] b. 一个服务器
[x] c. 一个可以用于访问www文档的软件
[ ] d. 搜索软件

3. URL是什么？
[x] a. 通用资源定位器，也称为地址
[ ] b. 一个Http
[ ] c. 万维网WWW
[ ] d. 都不是

4. (可选）ISP是什么？
[ ] a. 一块用于连接其他电脑的电脑设备
[ ] b. 网络服务提供商Internet Service Provider
[x] c. 一份明确定义电脑之间如何连接的协议
[ ] d. 都不是

5. (可选) 域名后缀(.org, .com, .cn等)是什么？
[ ] a. 用户网络或地址的名称
[ ] b. 邮箱地址
[x] c. 通用资源定位器URI(Uniform Resource Locators)
[ ] d. 都不是

## 第一章 HTML篇

1. 列出主要的html标签。
<!DOCTYPE>
<html>
<head></head>
<body>
<header></header>
<main>
<div></div>
<span></span>
<a>
<p><i></i><b></b></p>
<tb>
<h1><h2><h3><h4><h5><h6>
<ul><li></li></ul>
<ol><li></li></ol>
<button>
<img>
</main>
</body>
</html>
2. 列出主要的html标签特性(Attributes比如class等)。
href, src, input, title, alt, i(斜体)，b(粗体), class, id
3. 结束标签可选的有哪些？是什么意思？

4. id和class的区别？（按几点列出）。

5. 块级元素和内联元素分别有哪些？有什么区别？



## 第二章 CSS篇

1. 这些选择器中哪一个具有最高的特异性。 段落将应用什么颜色？

> 参考CSS优先级相关知识。

```
body,
p {
  padding: 1em;
}

/* Uncomment the properties to check yourself */
#container-1 #section-1 #paragraph-1 {
  /* background: yellow; */
}

body #container-1 .section #paragraph-1.paragraph {
  /* background: blue; */
}

#container-1 #section-1 .paragraph:hover {
  /* background: green; */
}

```

2. 列出你知道的CSS伪类。简单描述下各自的作用。

3. div和span的差别？

4. 如何让块级元素居中？如何让内联元素居中？

5. 如何实现垂直居中？

## Javascript

1. 你看过哪些关于Javascript的书？
> https://github.com/wwwebman/js-books-backpack

2. (可选）什么是数据类型？

3. Javascript有哪些数据类型？

4. 什么事函数？如何调用函数？

5. (可选）NaN是什么？属于上面哪种数据类型？如何检查某个变量是否是NaN？

6. (可选) 什么是变量提升？

7. (可选）事件冒泡和捕获有什么区别？


## 综合练习

写一个函数：
- 接受两个参数
- 返回两个参数的比值，并且保留一位小数点。
- 注意除数不能为0

> 代码直接贴在下面就行。