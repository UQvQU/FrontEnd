# webpack优化

## happyPack

## 分离基础库

webpack打包默认将入口文件index中的引入文件打包在同一个（main.js）js文件内
加快打包速度

### externals

externals: {
  // 排除不常更新的基础库，main.js中没有react，react-dom
  // 在 /public/index.html中添加react\reactDom的cdn地址，程序自行去window中查找react，reactDom
  'react': 'React',
  'react-dom': 'ReactDOM'
},

### SplitChunksPlugin

抽离第三方库chunks (react reactDom) 到name（vendors）.js

optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendors',
          test: /(react|react-dom)/,   // 需要分离的包
          chunks: 'all'
        }
      }
    }
  },

### DLL动态链接库

长时间不需要变更的链接库（react/reactDom） 当做动态链接库
首先要生成动态链接文件及其描述文件(配置/config/webpack.dll.js),然后在weboack.prod.js中引入描述文件(/dist/dll/vendor-manifest.json),并且在pack.json中添加dll命令，最后在/public/index.html中引入打包后window下的/dll/vendor.dll.js

1. npm run dll 编译一次
2. npm run build

## DllPlugin

对不会修改的npm包来进行预编译

## DllReferencePlugin

预编译的模块加载进来
