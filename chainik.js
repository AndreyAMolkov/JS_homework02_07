function Machine (inputPower){
    console.log(arguments);
    this._power = inputPower * 0.9;
    this._enabled = false;

    this.enable = function(){
        this._enabled = (this._power>100) ? true : false;
        console.log('Output power is:', inputPower,'loss of energy ', inputPower- this._power)
    }

    this.disable = function(){
        this._enabled = false;
    }
    this.getPower=function(){
        return this._power;
    }
}

function CoffeeMachine(inputPower){
    Machine.apply(this, arguments);
this._power=this.getPower()*0.95;
    var parentEnable = this.enable;

    this.enable = function(){
        parentEnable.call(this)
        if (!parentEnable._enabled()) {
            throw Error ('Please enable me first')
        }
        this.run()
    }

    var waterAmount = 0;

    console.log('Кофеварка создана, мощность ' + inputPower, ' , суммарные потери мощности', inputPower- this._power );

    var that = this;


    this.waterAmount = function(w) {
        if (typeof w === 'undefined')
         return waterAmount;

        var water = Number(w)
        if (isNaN(water) || water <=0){
            throw new Error('no water!!!');
        }
        else
        waterAmount+=water;
    }

    var getBoilTime = function(){
        var time = waterAmount * 4200 * 80 / that._power;
        console.log(time);
        return time;
    };

    function ready(){
        console.log('Coffee is ready');
    }

    this.run = function(){
        // if (!_enabled()) {
        //     throw Error ('Please enable me first')
        // }
        setTimeout(ready, getBoilTime())
    }

}

var coffeeMachine = new CoffeeMachine(10000);

coffeeMachine.waterAmount(1000)
coffeeMachine.run();


