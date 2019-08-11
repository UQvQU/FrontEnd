function Light(){
    this.status = 'off';
    this.button = null;
    this.init();
}
Light.prototype.init = function(){
    var button = document.createElement('button');
    // button.innerHTML = '开关';
    button.innerHTML = this.status;
    this.button = document.body.appendChild(button);
    this.button.onclick = () => {
        this.buttonPressed();
    }
}
Light.prototype.buttonPressed = function(){
    if(this.status == 'off'){
        console.log('开灯');
        this.status = 'on';
        this.button.innerText = 'on';
    }else{
        this.status = 'off';
        console.log('关灯');
        this.button.innerText = 'off';

    }
}
