# 考试问卷

> 这是针对个人能力测试的基本测试题，此次测试围绕基本的 HTML，CSS 和 Javascript 知识。
> ！！！考试问卷分两个部分：必答题和可选题。
> [必答题]请根据自己的真实情况，闭卷完成。
> [可选题]既可闭卷完成，也可开卷完成。
> 选择题都是单选，选择的某个选项的方式是输入小写 x 到对应中括号里，像这样[x]

## 第零章 网络篇

1. 什么是互联网？
   [ ] a. Google/Baidu
   [ ] b. 万维网 World Wide Web
   [ ] c. 通过网络连接在一起的所有电脑
   [x] d. 以上全部

2. 什么是浏览器？
   [ ] a. 一个 HTML 系统
   [ ] b. 一个服务器
   [x] c. 一个可以用于访问 www 文档的软件
   [ ] d. 搜索软件

3. URL 是什么？
   [x] a. 通用资源定位器，也称为地址
   [ ] b. 一个 Http
   [ ] c. 万维网 WWW
   [ ] d. 都不是

4. (可选）ISP 是什么？
   [ ] a. 一块用于连接其他电脑的电脑设备
   [ ] b. 网络服务提供商 Internet Service Provider
   [x] c. 一份明确定义电脑之间如何连接的协议
   [ ] d. 都不是

5. (可选) 域名后缀(.org, .com, .cn 等)是什么？
   [ ] a. 用户网络或地址的名称
   [ ] b. 邮箱地址
   [x] c. 通用资源定位器 URI(Uniform Resource Locators)
   [ ] d. 都不是

## 第一章 HTML 篇

1. 列出主要的 html 标签。

```html
<!DOCTYPE>
<HTML lang="en">
  <head>
    <title></title>
    <meta charset="utf-8">
    <link>
    <style>
      </style>
  </head>
  <body>
    <header></header>
    <main>
      <h1> <!-- 1-6 -->
      <p></p>
      <img/>
      <span></span>
      <strong></strong>
      <em></em>
      <i></i>
      <b></b>


      <ul>
        <li></li>
        </ul>
      <ol>
          <li></li>
      </ol>
      <a href="">
      <div></div>


      <form id="form" class="form" action="" method="">
        <fieldset>
          <legend>名字</legend>
        <label><input type="text" ></label>
        <label><input type="number" ></label>
        <label><input type="email" ></label>
        <label><input type="password" ></label>
        <label><input type="submit" ></label>
        <label><input type="radio" ></label>
        <label><input type="checkbox" ></label>
        <textarea></textarea>

        </fieldset>
      </form>
<table border="1">
  <caption></caption>
  <tr>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>


      </main>
    <footer></footer>

    </body>
  </html>
```

2. 列出主要的 html 标签特性(Attributes 比如 class 等)。
```html
<p style="color:red size=10px" id="p" class="p"></p>
<img src="" alt="" target="_blank">
<input type="text" value="text" min="10" max="20" name="" required>
<form id="form" class="form" action="" method=""></form>
<textarea placeholder="hahaahaha" rows="" cols=""></textaren>
```

3. 结束标签可选的有哪些？是什么意思？
  有闭合标签，和自闭标签。

4. id 和 class 的区别？（按几点列出）。
id是唯一的，class可以多个标签共用一个名字，从而设置样式的时候会简便些

5. 块级元素和内联元素分别有哪些？有什么区别？
块级标签：p div 
内联标签：a img em span strong i b

区别：块级独占一行，内联和其他元素显示在同一行

## 第二章 CSS 篇

1. 这些选择器中哪一个具有最高的特异性。 段落将应用什么颜色？
```css
#container-1 #section-1 .paragraph:hover {
  /* background: green; */
}
/*具有最高特异性，颜色为绿色  */
```

> 参考 CSS 优先级相关知识。

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

2. 列出你知道的 CSS 伪类。简单描述下各自的作用。
```css
p[last-of-type]{

}

作用就是设置最后一个标签p的样式，和上面设置的p样式分开
```

3. div 和 span 的差别？
  >div是一个块级标签，而span是内联标签。div独占一行，span会和其他标签显示在同一行。
  >div可以设置宽高，span设置不了。

4. 如何让块级元素居中？如何让内联元素居中？
```css
div{
  margin:auto;
}
img{
  text-align:center;
}
```
5. 如何实现垂直居中？
```css
div{
  margin:auto 10px;
}
```

## Javascript

1. 你看过哪些关于 Javascript 的书？

   > https://github.com/wwwebman/js-books-backpack

2. (可选）什么是数据类型？
>大概就是字段的属性吧。有int  string int[]  布尔类型
>类别，有动物，人类，人类还分小孩，男人，女人

3. Javascript 有哪些数据类型？
 > 不清楚

4. 什么事函数？如何调用函数？
>函数就是一个方法，一个流程，为了实现某个功能些的一段代码，
>调用函数 函数名();

5. (可选）NaN 是什么？属于上面哪种数据类型？如何检查某个变量是否是 NaN？

6. (可选) 什么是变量提升？

7. (可选）事件冒泡和捕获有什么区别？

## 综合练习

写一个函数：

- 接受两个参数
- 返回两个参数的比值，并且保留一位小数点。
- 注意除数不能为 0

> 代码直接贴在下面就行。
```js
function a(x,y){
   const c = x/y
   return c;
   //不知道哪个函数可以保留一位小数

}
```