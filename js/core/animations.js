pokemon.animations = (function(){
    var playerchar = pokemon.playerchar,
        display    = pokemon.display,
        fight      = pokemon.fight,
        functions  = pokemon.functions;

    
    var animArr;
    var lastIndex;
    function animationBattleStart(x,y){
        var lTilsetDB = display.getLocalTilsetsDB(),
            locationDB = pokemon.world.getLocation(),
            locationSize = locationDB[0],
            lSize = [];
            
            lSize[0] = locationSize[0]-1;
            lSize[1] = locationSize[1]-1;
            
        range = (lSize[0])*(lSize[1]);

        if(animArr == null){
            for (animArr=[],i=0;i<=range;++i) animArr[i]=i;
            animArr.shift();
            animArr = functions.shuffle(animArr);
        }

        // if all has ended
        if(!animArr.length){
            fight.setFightStage('fightInit');
            fight.fightScreen();
            return;
        }


        var d = new Date(), 
            duration = 1000,
            time = d.getTime();
            
            var progress = (time % duration) / duration;
            var frameIndex = Math.floor(progress * range*3);
   
            
            if(frameIndex < 1){ lastIndex = frameIndex; return; }
            if(lastIndex == frameIndex){ lastIndex = frameIndex; return;  }
            lastIndex = frameIndex;
   
            
        id = animArr.shift();

        x = id % lSize[0];
        if(x == 0) x = lSize[0]
        y = Math.ceil(id / lSize[0]);

        tilsetCoords = [x, y];
        lTilsetDB[tilsetCoords[0]+':'+tilsetCoords[1]] = {
            id : 15,
            coords : [1, 2],
            walkin : true,
            transitionWorld : null,
            transitionCoords : null,
            overlayer : null
        }; display.setLocalTilsetsDB(lTilsetDB);

        
    }
    
    function worldOverideAnimations(x,y){
        if(fight.getFightStage() == 'fightBeforeInit')
            animationBattleStart(x,y);
    }
    
    function worldBeforeAnimations(){
        
    }
    
    function worldAfterAnimations(){
        
    }
    
    
    
    
    
    /* PLAYER & TILSETS default animations */
    
    function animateTilset(animation, speed){        
        var d = new Date(), 
            coords = [],
            duration = speed,
            time = d.getTime(), // 60
            count = animation.length; // 10
            
            var progress = (time % duration) / duration;
            var frameIndex = Math.floor(progress * count);
            
            coords[0] = animation[frameIndex][0];
            coords[1] = animation[frameIndex][1];
            return coords;   
    }
    
    function animatePlayer(posTrans, desTrans, speed){

            if(posTrans[0] != desTrans[0]){                
                if(posTrans[0] > desTrans[0]){
                    x = (posTrans[0] - speed) ; 
                    animationTypes[0] = 9;
                    animationTypes[1] = 10;
                    animationTypes[2] = 11;
                }else{
                    x = (posTrans[0] + speed) ; 
                    animationTypes[0] = 6;
                    animationTypes[1] = 7;
                    animationTypes[2] = 8;
                }
                animationSetType = animationTypes[0];
                animatePlayerMove();
            }else{x = posTrans[0]; }
            
            if(posTrans[1] != desTrans[1]){     
               if(posTrans[1] > desTrans[1]){
                    y = (posTrans[1] - speed); 
                    animationTypes[0] = 3;
                    animationTypes[1] = 4;
                    animationTypes[2] = 5;
                }else{
                    y = (posTrans[1] + speed); 
                    animationTypes[0] = 0;
                    animationTypes[1] = 1;
                    animationTypes[2] = 2;
                }
                animatePlayerMove();
            }else{y = posTrans[1];}

        
        return [x,y];
    }

    function animatePlayerMove(){
        movesCount = playerchar.getMovesCount();
        if(movesAnimCount < 12){ 
            if(movesCount % 2) animationSetType = animationTypes[1]; 
            else animationSetType = animationTypes[2];  
        }
        if(movesAnimCount >= 12)
            animationSetType = animationTypes[0];  

        if(movesAnimCount >= 20) 
            movesAnimCount = 0;
    }
    function animatePlayerTryToMove(tried){
        if(Math.abs(tried[0]) > 0){                            
            if(tried[0] < 0){
                animationTypes[0] = 9;
                animationTypes[1] = 10;
                animationTypes[2] = 11;
            }else{
                animationTypes[0] = 6;
                animationTypes[1] = 7;
                animationTypes[2] = 8;
            }
            animationSetType = animationTypes[0];
            animatePlayerMove();
         }
         
        if(Math.abs(tried[1]) > 0){                            
            if(tried[1] < 0){
                animationTypes[0] = 3;
                animationTypes[1] = 4;
                animationTypes[2] = 5;
            }else{
                animationTypes[0] = 0;
                animationTypes[1] = 1;
                animationTypes[2] = 2;
            }
            animationSetType = animationTypes[0];
            animatePlayerMove();
         } 
    }  
    
    
    function run(){
        playerchar = pokemon.playerchar;
        display    = pokemon.display;
        fight      = pokemon.fight;  
    }
    
    return {
        run : run,
        animateTilset : animateTilset,
        animatePlayer : animatePlayer,
        animatePlayerMove : animatePlayerMove,
        animatePlayerTryToMove : animatePlayerTryToMove,
        worldOverideAnimations : worldOverideAnimations
    }
    
    

})();