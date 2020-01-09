# 阿里面试题

## 1.请列举7种以上常用的HTML标签，说明其语义

## 2.请说明下面各种情况的执行结果，并注明产生对应结果的理由

function doSomething() {
    alert(this);
}
① element.onclick = doSomething，点击element元素后。
② element.onclick = function() {doSomething()}， 点击element元素后。
③ 直接执行doSomething()。

1. element object 函数赋值方式导致this指向element
2. window object this是写在doSomething这个函数中，这种方式的事件绑定没有将element对象传递给this，在函数调用的模式下，this会绑定到全局对象(window)上
3. window object 该函数在window中被调用，this指向window

## 3. 请用JavaScript语言实现 sort 排序函数，要求：sort([5, 100, 6, 3, -12]) // 返回 [-12, 3, 5, 6, 100]。如果你有多种解法，请阐述各种解法的思路及优缺点。（仅需用代码实现一种解法，其它解法用文字阐述思路即可）

## 4. 请根据下面的HTML和CSS代码，画出布局示意图

<div id="page">
    <div class="main">
        <div class="sub"></div>
    </div>
    <div class="nav"></div>
</div>
<style type="text/css">

    #page { width: 520px; }
    .nav  { width: 200px; float: right; }
    .main { width: 200px; float: left; padding-left: 110px; }    
    .sub  { width: 100px; float: left; margin: 10px 0 10px -100px; }    
    .main { border: 1px solid ##000; }
    .nav, .sub { border: 1px dashed ##000; height: 300px; }    
    .sub { height: 280px; }
</style>

## 5. 阅读以下JavaScript代码

var addListener = function(el, type, listener, useCapture) {}
if (window.addEventListener) {
       var addListener = function(el, type, listener, useCapture) {
           el.addEventListener(type, listener, useCapture);
       };
   } else if (document.all) {
       addListener = function(el, type, listener) {
           el.attachEvent("on" + type, function() {
               listener.apply(el);
           });
       };
   }
请阐述 a) 代码的功能; b) 代码的优点和缺点; c) listener.apply(el) 在此处的作用; d) 如果有可改进之处，请给出改进后的代码，并说明理由。
a. IE低版本的浏览器事件注册兼容
b. 优：跨浏览器
   缺：每次注册事件都要进行判断
       addListener 成了全局变量，变量污染
d. 将函数this绑定到element上

## 6.请编写一个JavaScript 函数toRGB，它的作用是转换CSS中常用的颜色编码。 要求

alert(toRGB("##0000FF"));          // 输出 rgb(0, 0, 255)
alert(toRGB("invalid"));          // 输出 invalid
alert(toRGB("##G00"));              // 输出 ##G00

function toRGB(color) {
    var regex = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    match = color.match(regex)
    return match ? 'rgb('+parseInt(match[1], 16)+','+parseInt(match[2], 16)+','+parseInt(match[3], 16)+')' : color
}

## 7. 尝试实现注释部分的Javascript代码，可在其他任何地方添加更多代码（如不能实现，说明一下不能实现的原因）

var Obj = function(msg){
    this.msg = msg;
    this.shout = function(){
        alert(this.msg);
    }  
    this.waitAndShout = function(){
        //隔五秒钟后执行上面的shout方法
    }
}

var Obj = function(msg){
    this.msg = msg;
    this.shout = function(){
        alert(this.msg);
        // console.log(this.msg)
    }
    this.runShout = function(){
    this.shout()
    }
    this.waitAndShout = function(){
        //隔五秒钟后执行上面的shout方法
        setTimeout(()=>{this.shout()}, 5000)
    }

}
let obj = new Obj('tt')

## 8. 请编写一个JavaScript函数，它的作用是校验输入的字符串是否是一个有效的电子邮件地址。要求： a)   使用正则表达式。 b)   如果有效返回true ，反之为false

var checkEmail  = function(email){
var preg = "(^[a-zA-Z]|^[\\w-_\\.]*[a-zA-Z0-9])@(\\w+\\.)+\\w+$",
    pregObj  =new RegExp(preg);
    return pregObj.test(email);
}

## 9. 请分别列出HTML、JavaScript、CSS、Java、php、python的注释代码形式

html: <!-- -->
css: /* */
java: /* */、//、/** * **/
php: #、 /** **/
python: #、 ''' '''、 """ """"

## 10. 请用CSS定义p标签，要求实现以下效果: 字体颜色在IE6下为黑色(##000000)；IE7下为红色(##ff0000)；而其他浏览器下为绿色(##00ff00)

p{
    color:#0f0;
    _color:#000; // IE6
}
*+html p{    // IE7
    color: #ff0000
}

## 11. 请编写一个通用的事件注册函数（请看下面的代码）

function addEvent(element, type, handler)
{
    // 在此输入你的代码，实现预定功能
    if (element.addEventListener) {
        element.addEventListener(type, handler, false)
    } else if (element.attachEvent) {
        element.attachEvent('on' + type, handler)
    } else {
        element['on' + type] = handler
    }
}

## 17. 请编写一个JavaScript函数 parseQueryString，它的用途是把URL参数解析为一个对象，如

var url = <http://www.taobao.com/index.php?key0=0&key1=1&key2=2.....>
var obj = parseQueryString(url);
alert(obj.key0)  // 输出0

function parseQueryString(arg) {
    var str = arg.split('?')[1]
    var result = {}
    var temps = str.split('&')
    for (var i = 0; i < temps.length; i++) {
    var temp = temps[i].split('=')
    console.log(temp)
    result[temp[0]] = temp[1]
    }
    return result
}

## 18. 请把以下用于连接字符串的JavaScript代码修改为更有效率的方式

var htmlString = "<div class=”container”>" + "<ul id=”news-list”>";
for (var i = 0; i < NEWS.length; i++) {
    htmlString += "<li><a href=”" + NEWS[i].LINK + "”>"
        + NEWS[i].TITLE + "</a></li>";
}
htmlString += "</ul></div>";
答：
var htmlString  =  "<div class=”container”>"   +   "<ul id=”news-list”>";
for  (var i  =  0;  i  <  NEWS.length;  i++) 
{
    var newsItem = NEWS[i];
    htmlString  +=  "<li><a href=”"  + newsItem.LINK  + ">"  
        + newsItem.TITLE  + "</a></li>";
}
htmlString  +=  "</ul></div>";

## 19. 请根据下面的描述，用JSON语法编写一个对象: “小明今年22岁，来自杭州。兴趣是看电影和旅游。他有两个姐姐，一个叫小芬，今年25岁，职业是护士。还有一个叫小芳，今年23岁，是一名小学老师。”

var person = {
    "name": "小明",
    "age": "22",
    "address": "杭州",
    "hobbies": [
        "看电影",
        "旅游"
    ]
    "sister": [
        {
            "name": "小芬",
            "age": "25",
            "profession": "护士"
        }
    ]
}
