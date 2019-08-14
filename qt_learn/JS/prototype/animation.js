function Animal(planet){
    this.planet = planet;
}
// 原型对象
Animal.prototype.getPlanet = function(){
    return this.planet;
}

function Person(name){
    this.name = name;
}

Person.prototype = new Animal('earth');

Person.prototype.getName = function(){
    return this.name;
}