class HashRouter {
    constructor () {
        // window.addEventListener('hashchange', (event) => {
        //     console.log('点击锚链接---',event.newURL+'---'+'---'+location.hash);  
        // })
        // 路由
        this.routers = {}
        window.addEventListener('hashchange', this.load.bind(this))
    }

    register (hash, callback = function () {}) {
        this.routers[hash] = callback;
    }

    registerNotFound (callback = function () {}) {
        this.routers['404'] = callback;
    }

    registerError (callback = function () {}) {
        this.routers['error'] = callback;
    }

    load () {
        console.log(this, location.hash);
        let hash = location.hash.slice(1),
            handler; //处理函数
        // 仅限于对象自身的属性，不去查找原型链上的属性
        if(!this.routers.hasOwnProperty(hash)){
            hash = '404';
        }
        // container 显示相应的内容
        handler = this.routers[hash];
        try{
            handler.apply(this);
        }catch(e){
            // console.error('异常:',e);
            (this.routers['error'] || function () {}).call(this, e);
        }
    }
}