function Animal(name){
    this._name=name;
    this._size=0;
 
}
  Animal.prototype.setSize=function(size){
      this._size+=size;
  }
  Animal.prototype.getSize=function(){
    return this._size;
}
function Machine (power){
   // console.log(arguments);
    this._power = power*0.9;
    this._enabled = false;
    

    this.enable = function(){
        this._enabled = (this._power>100) ? true : false;
        console.log('Output power is:', this._power)
    }

    this.disable = function(){
        this._enabled = false;
    }


}
function Rabbit(name) {
    Animal.apply(this,arguments)
   //  this.name = name;
    this.speed = 0;
  }

  Rabbit.prototype = Object.create(Animal.prototype);
  Rabbit.prototype.constructor = Rabbit;
  var rabbit=new Rabbit('rabbit')
rabbit.setSize(5);

function Penguin(name) {
    Animal.apply(this,arguments)
    this.fly = 0;
}
Penguin.prototype = Object.create(Animal.prototype);
Penguin.prototype.constructor = Penguin;
var penguin=new Penguin('penguin')
penguin.setSize(45);

function Giraffe(name) {
    Animal.apply(this,arguments)
    this.length = 0;
}
Giraffe.prototype = Object.create(Animal.prototype);
Giraffe.prototype.constructor = Giraffe;
var giraffe=new Giraffe('giraffe')
giraffe.setSize(500);

function Gorilla(name) {
    Animal.apply(this,arguments)
    this.family = 0;
}
Gorilla.prototype = Object.create(Animal.prototype);
Gorilla.prototype.constructor = Gorilla;
var gorilla=new Gorilla('gorilla')
gorilla.setSize(300);


function Frige(power){
    Machine.apply(this.arguments)
    var _storage=[];
    var _size=0;

    this.setSize= function(value){
        _size+= value;
        console.log('size of frige=',_size)
    }
    this.getSize = function(){
        return _size;
    }
this.remaindSize=function(){
    var valueSizeOfAnimals=0;
    _storage.forEach(element => {
        valueSizeOfAnimals+=element.getSize();
    });
    
    return (this.getSize()- valueSizeOfAnimals);
}


    this.putAnimals= function(animal){
  
       if(this.remaindSize() >=animal.getSize()){
        _storage.push(animal);
       // console.log(this._storage)
       return animal;
        }
        console.log('overload', animal)
        return null;
    }
    this.checkAnimals = function(animal){

            return _storage.includes(animal);
            
     }
    this.getAnimals = function(animal){
       
        
        if (this.checkAnimals(animal)){
           return _storage.splice(_storage.indexOf(animal),1)
        }

       
        return null;
    }
    this.printAnimals=function(){
        console.log('frige have: ')
       _storage.forEach(element => {
           console.log(element)
       });
    }
    
};
Frige.prototype = Object.create(Machine.prototype);
Frige.prototype.constructor =Frige;
var frige = new Frige(1000)
frige.setSize(501);
frige.putAnimals(penguin);
frige.putAnimals(gorilla);
frige.putAnimals(giraffe);
frige.printAnimals();
console.log('remove penguin ')
frige.getAnimals(penguin);
frige.printAnimals();
console.log('check penguin')
console.log(frige.checkAnimals(penguin));
console.log('remove gorilla and add giraffe')
frige.getAnimals(gorilla);
frige.putAnimals(giraffe)
console.log('check giraffe')
console.log(frige.checkAnimals(giraffe));
frige.printAnimals();
console.log('remaind size of frige =',frige.remaindSize());
// var rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal;

// for (v in rabbit){
//     console.log(v)
// }

// console.log(rabbit)
// console.log(rabbit.eats)