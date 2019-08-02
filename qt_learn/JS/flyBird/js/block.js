function Block() {
    // 上管道容器
    this.upDivWrap = null;
    // 下管道容器
    this.downDivWrap = null;
    // 下管道可变部分的高度
    this.downHeight = baseObj.randomNum(0, 150);
    // 管道之间间隙的管道
    this.gapHeight = baseObj.randomNum(150,160);
    // 上管道可变部分的高度 总高度312(草地到顶部)、
    this.upHeight = 303 - this.downHeight - this.gapHeight;

    // 生成div
    this.createDiv = function(url, height, positionType, left, top){
        // 创建一个div
        var newDiv = document.createElement('div');
        // 添加相应的css样式
        newDiv.style.width = '62px';
        newDiv.style.height = height;
        newDiv.style.position = positionType;
        newDiv.style.left = left;
        newDiv.style.top = top;
        newDiv.style.backgroundImage = url;
        return newDiv;
    }
    // 生成管道
    this.createBlock = function() {
        // 一个管道有两个div组成(两张图片)
        var upDiv1 = this.createDiv('url(./img/up_mod.png)', this.upHeight + 'px');
        var upDiv2 = this.createDiv('url(./img/up_pipe.png)', '60px');
        // 装管道的容器
        this.upDivWrap = this.createDiv(null, null, 'absolute', '450px');
        this.upDivWrap.appendChild(upDiv1);
        this.upDivWrap.appendChild(upDiv2);//上管道完成

        
        var downDiv1 = this.createDiv("url(img/down_pipe.png)", "60px");
        var downDiv2 = this.createDiv("url(img/down_mod.png)", this.downHeight +"px");

        this.downDivWrap = this.createDiv(null, null, "absolute", "450px", 363 - this.downHeight + "px");
        this.downDivWrap.appendChild(downDiv1);
        this.downDivWrap.appendChild(downDiv2); //下管道完成

        jsWrapBg.appendChild(this.upDivWrap);
        jsWrapBg.appendChild(this.downDivWrap);

    }
    // 管道移动
    this.moveBlock = function(){
        this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 1 + 'px';
        this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 1 + 'px';
    }
}