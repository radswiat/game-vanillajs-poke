pokemon.engine = (function(){
    var loops = 0, skipTicks = 5000,
        display = pokemon.display,
        callbacks = [],
        fps = '',
        lastCalledTime = '',
        dom = pokemon.dom,
        $ = dom.$,
        engine = true;
    
    function setEngine(a){
        engine = a;
    }
    
    function calcFPS(){
        if(!lastCalledTime) {
           lastCalledTime = new Date().getTime();
           fps = 0;
        }else{
        delta = (new Date().getTime() - lastCalledTime)/1000;
        lastCalledTime = new Date().getTime();
        fps = Math.floor(1/delta);
        }

        document.getElementById("fps").innerHTML=fps+' fps'; 
    }
    

    function run(){
        var animFrame = window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                window.oRequestAnimationFrame      ||
                window.msRequestAnimationFrame     ||
                null ;
            
        var recursiveAnim = function() {
            if(engine)
            pokemon.display.refreshWorldBoard();
            calcFPS();
            

            animFrame( recursiveAnim );
        };

        // start the mainloop
        animFrame( recursiveAnim );
    }
    
    function bind(scope, fn, arg){
        return function () {
            fn.apply(scope, arg);
        };
    }
    
    function callback(){
        lng = callbacks.length;
            while(lng){

                callbacks[0]();
                lng--;
            }
            
            callbacks = [];


    }
    
    return {
        run : run,
        bind : bind,
        callback : callback,
        setEngine : setEngine
    }

})();
