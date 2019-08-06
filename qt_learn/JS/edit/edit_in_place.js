/**
 * @function 就地编辑
 * @author o(*￣︶￣*)o
 * 网站基础类
 * @param {*} id 
 * @param {*} parent 
 * @param {*} initValue 
 */
function EditInPlace(id, parent, initValue){
    //constructor
    this.id = id;
    this.parentElement = parent;
    this.value = initValue || 'default value';
    this.createElement(); //动态DOM
}

EditInPlace.prototype.createElement = function(){
    this.containerElement = document.createElement('div');
    // Edit
    this.containerElement.id = this.id;
    // this.containerElement.setAttribute('id', this.id);
    this.fieldElement = document.createElement('input');
    this.fieldElement.type = 'text';
    this.fieldElement.value = this.value;
    this.containerElement.appendChild(this.fieldElement); 
    //text
    this.staticElement = document.createElement('span');
    this.staticElement.innerText = this.value;
    this.containerElement.appendChild(this.staticElement);
    this.parentElement.appendChild(this.containerElement);
    console.log('EditInPlace', this);

    // 两个状态 edit text
    this.convertToText();
    // 状态切换
    this.attachEvent();
}
// to text
EditInPlace.prototype.convertToText = function(){
    console.log('text',this);
    this.fieldElement.style.display = 'none';
    this.staticElement.style.display = 'inline';
}
// to edit
EditInPlace.prototype.convertToEdit = function(){
    console.log('edit', this);
    this.fieldElement.style.display = 'inline';
    this.staticElement.style.display = 'none';
}
// 切换
EditInPlace.prototype.attachEvent = function(){
    let self = this;
    console.log('self', this);
    // this.staticElement.addEventListener('dblclick', function(){
    //     console.log('static', this);
    //     editor.convertToEdit(); // yes
    //     // self.convertToEdit(); yes
    //     // EditInPlace.prototype.convertToEdit(); no
    //     // EditInPlace.convertToEdit(); no
    // }, false)

    // 箭头函数this指向上一级
    this.staticElement.addEventListener('dblclick', () => {
        console.log('箭头', this);
        this.convertToEdit();
    });
    this.fieldElement.addEventListener('keydown', (event) => {
        if(event.keyCode == 13){
            this.staticElement.innerHTML = this.fieldElement.value;
            this.convertToText();
        }
    })
}