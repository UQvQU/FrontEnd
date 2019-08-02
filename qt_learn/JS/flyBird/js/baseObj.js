let baseObj = {
    // 随机数
    randomNum: function(min, max){
        // 生成 min <--> max 之间的随机数
        return parseInt(Math.random() * (max - min + 1) + min);
    },
    // 两个元素的碰撞检测
    rectangleCrashExamine: function(obj1, obj2){
        let obj1Left = obj1.offsetLeft;
        let obj1Width = obj1.offsetLeft + obj1.offsetWidth;
        let obj1Top = obj1.offsetTop;
        let obj1Height = obj1.offsetTop + obj1.offsetHeight;

        let obj2Left = obj2.offsetLeft;
        let obj2Width = obj2.offsetLeft + obj2.offsetWidth;
        let obj2Top = obj2.offsetTop;
        let obj2Height = obj2.offsetTop + obj2.offsetHeight;

        if(!(obj1Left > obj2Width || obj1Width < obj2Left || obj1Top > obj2Height || obj1Height < obj2Top)){
            // 以碰撞
            console.log('碰碰');
            return true;
        }
        return false;
    }
}