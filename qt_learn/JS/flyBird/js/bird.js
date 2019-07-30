let bird = {
    flyTimer: null,  //小鸟飞行定时器
    wingTimer: null,  //小鸟翅膀扇动定时器

    div: document.createElement('div'), //装小鸟的盒子
    showBird: function(parentObj){

        // 小鸟盒子的样式
        this.div.style.width = '40px';
        this.div.style.height = '28px';
        this.div.style.backgroundImage = 'url(img/bird0.png)';
        this.div.style.backgroundRepeat = 'no-repeat';
        this.div.style.position = 'absolute';
        this.div.style.left = '50px';
        this.div.style.top = '200px';
        this.div.style.zIndex = 1;
        // 插入小鸟
        parentObj.appendChild(this.div);
    },
    fallSpeed: 0, //小鸟下落的速度
    flyBird: function(){  //控制小鸟下落(自由落体)
        this.flyTimer = setInterval(fly, 60);
        function fly(){
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ +'px';
            if(bird.div.offsetTop < 0){
                // 不让小鸟飞上天
                bird.fallSpeed = 10;
            }else if(bird.div.offsetTop >= 395){
                // 不让小鸟飞进土里
                bird.fallSpeed = 0;
                // 清除飞行定时器
                clearInterval(bird.flyTimer);
                // 清除翅膀扇动定时器
                clearInterval(bird.wingTimer);
            }

            if(bird.fallSpeed > 5){
                bird.fallSpeed = 5;
            }
        }
    },
    wingWave: function(){ // 控制小鸟扇动翅膀的函数
        let up = ['url(img/up_bird0.png)', 'url(img/up_bird1.png)'];
        let down = ['url(img/down_bird0.png)', 'url(img/down_bird1.png)'];
        let i = 0,
            j = 0;
        this.wingTimer = setInterval(wing, 120);
        function wing(){
            if(bird.fallSpeed > 0){  //小鸟下降的情况
                bird.div.style.backgroundImage = down[i++];
                i = i > 1 ? 0 : i;
            }
            if(bird.fallSpeed < 0){  //小鸟上升的情况
                bird.div.style.backgroundImage = up[j++];
                j = j > 1 ? 0 : j;
            }
            
        }
    }
}