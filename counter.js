var counter=(function(){
    var _number=0;
    
    var _checkInteger=function(x) {
        if (parseInt(x)==x){
            return true;
        } else {
            return false;
        }
    }
    
    var setValue=function(x){
        if (_checkInteger(x)){
            _number=x;
        } else {
            console.log('Неверное значение.')
        }
    }
    
    var increaseCounter=function(){
        _number++;
    }
    
    var decreaseCounter=function(){
        _number--;
    }
    
    var printCounter=function(){
        console.log(_number);
    }
    
    return {
        setValue,
        increaseCounter,
        decreaseCounter,
        printCounter
    }
    
}())

counter.setValue(25);
counter.printCounter();
counter.increaseCounter();
counter.increaseCounter();
counter.increaseCounter();
counter.printCounter();

counter.decreaseCounter();
counter.decreaseCounter();
counter.printCounter();
