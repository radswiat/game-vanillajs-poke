pokemon.inputs = (function(){
    var dom = pokemon.dom,
        $ = dom.$,
        playerchar = pokemon.playerchar,
        display = pokemon.display;
    
    function run(){
        window.addEventListener('keydown', move, false);

    }  
    
    function move(e){           
        if(e.keyCode == 37){ // left
            display.triggerMove(-1,0);
        }else if (e.keyCode == 38){ // top
            display.triggerMove(0,-1); 
        }else if (e.keyCode == 39){ // right
            display.triggerMove(1,0);
        }else if (e.keyCode == 40){ // down
            display.triggerMove(0,1);            
        }
    }    
    
    return {
        run : run
    }
})();


/*
                if(movesAnimCount < 8){ 
                    animationSetType = animationTypes[1];  
                }
                if(movesAnimCount >= 8){ 
                    animationSetType = animationTypes[0];  
                }
                if(movesAnimCount > 12){ 
                    animationSetType = animationTypes[2];  
                }
                if(movesAnimCount >= 20){ movesAnimCount = 0; }
 */