# 多页应用打包

SPA单页应用打包后仅有一个index.html
MPA多页应用打包后有多个html文件；
好处：天然解耦
区别：SPA只有一个入口文件

1.webpack.prod.js配置多个入口，可打包出多个js文件，但仍只有一个index.html,该html引入多个js文件，产生冲突，后者会覆盖前者的html
2.new HtmlWebPackPlugin 对应html文件，new 多个HtmlWebPackPlugin，就会打包出多个html文件，注意可以加上文件名对html文件进行区分，否则仍为一个html文件;但每个html文件仍会引入多个js文件，后者仍会覆盖前者的html
3.在HtmlWebPackPlugin中配置chunks，配置相应的js文件
4.自动化上述流程, 创建setUpMpa函数，自动配置entry和HTMLWebPackPlugin

SPA：单页面，页面的意思就是打包完 单个 html
MPA：多页面，页面的意思就是打包完 多个 html，假设很多个业务独立的，但是偏要放在一个系统里面，MPA 天然解耦
业务独立：公共的模板html，不能够满足，每个业务要有区别度

## DllPlugin

对不会修改的npm包来进行预编译

## DllReferencePlugin

预编译的模块加载进来