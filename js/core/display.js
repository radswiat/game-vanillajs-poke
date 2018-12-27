pokemon.display = (function(){
    var dom             = pokemon.dom,
        $               = dom.$,
        playerchar      = pokemon.playerchar,
        settings        = pokemon.settings,    
        world           = pokemon.world,
        sound           = pokemon.sound,
        fight           = pokemon.fight,
        functions       = pokemon.functions,
        animations      = pokemon.animations,
        windowWidth     = settings.windowWidth, // set webbrowser width
        windowHeight    = settings.windowHeight, // set webbrowser height

        // for world generator
        lTilsetDB  = {},  // get generated tilset data 
        tilsetSize      = settings.tilsetSize, // size of single tilset
        locationDB,
            location,
            locationSize,
            locationPlayer,
            locationTilsets,
        worldSize,
        globalTilsetsDB,
        viewport = [Math.ceil(windowWidth / tilsetSize), Math.ceil(windowHeight / tilsetSize)];
        

        // for player moving
        animationTypes = [],    // types of animation ( 3 for now, stand, move, move )
        animationSetType = 0,   // current animation type
        movesAnimCount = 0,     // for counting in one move  animation
        viewportStart = [0,0],  // where should i start drawing - left top corner coords
        animationTilsetTicks = 0,
        moveToTriedAnimationCount = 0;
        
       // others
       mouseSelectTilset = null;
        


    

    


 
    
    
    
    
    
    function setViewportStart(a,b){
        viewportStart = [a,b];
    }
    
    function getViewportStart(){
        return viewportStart;
    }
    
    
    function updateViewport(){
        var playerPos = playerchar.getPlayerPosition(),
            newViewport = [];        
        
        xPC = playerPos[0];xView = viewport[0]/2;
        yPC = playerPos[1];yView = viewport[1]/2;
        
        newViewport[0] = xPC - xView;newViewport[1] = yPC - yView;
        setViewportStart(newViewport[0],newViewport[1]);    
    }


    
    
    
    
    
    
    
    
    
    function triggerMove(x,y){
        if(playerchar.getIsPlayerMoving()) return; // disable overlaping
        var canMove = true;
        
        speed = 1; x = x/speed; y = y/speed;x = Math.round(x); y = Math.round(y);
        dest = playerchar.getPlayerDestination();pos = playerchar.getPlayerPosition();

       if(  dest[0]+x >= locationSize[0] ||
            dest[0]+x <= 0 ||
            dest[1]+y >= locationSize[1] ||
            dest[1]+y <= 0){
            playerchar.setPlayerTriedToMove(x,y); moveToTriedAnimationCount = 0;return; }
        
        if(!canMoveEvent(dest[0]+x, dest[1]+y))
            {playerchar.setPlayerTriedToMove(x,y); moveToTriedAnimationCount = 0; return; }
         
        if(canMove){
            playerchar.setIsPlayerMoving(true);
            playerchar.increaseMovesCount();           
            playerchar.setPlayerDestination(dest[0]+x, dest[1]+y);      
        }
    }
    
    function canMoveEvent(x,y){
        var localTilsetDB = getLocalTilsetsDB();

        // trigger actions
            if(localTilsetDB[x+':'+y]['transitionWorld'] != null){
                world.setTrainsistionsCoords(
                    localTilsetDB[x+':'+y]['transitionCoords'][0],
                    localTilsetDB[x+':'+y]['transitionCoords'][1]                    
                );
                world.changeLocation(localTilsetDB[x+':'+y]['transitionWorld']);
            }
            
            // fight event
            if(localTilsetDB[x+':'+y]['fight'])
                fight.fightEvent(localTilsetDB[x+':'+y]['fight']); 
            
            // can move ?
            if(!localTilsetDB[x+':'+y]['walkin']){ return false; }                
            else{
                if(localTilsetDB[x+':'+y]['overlayer'] != null){
                    if(!localTilsetDB[x+':'+y]['overlayer']['walkin']){
                        return false;}else{return true;}
                }else{return true;}
            }
    }

    function moveToTried(){
        var tried = playerchar.getPlayerTriedToMove(),
            viewport = [Math.ceil(windowWidth / tilsetSize), Math.ceil(windowHeight / tilsetSize)];
            
        if(tried[0] == null && tried[1] == null) return;
            
        if(moveToTriedAnimationCount > 5){ 
            moveToTriedAnimationCount = 0; 
            playerchar.setPlayerTriedToMove(null,null); movesAnimCount = 0; return;}
        
        moveToTriedAnimationCount++;        
        animations.animatePlayerTryToMove(tried);
        drawTilset((viewport[0]/2) * tilsetSize, (viewport[1]/2) * tilsetSize, animationSetType, 0, true);            
        movesAnimCount++;
    }
    
    function moveToPosition(){
  
        var speed = 50,
            playerPos = playerchar.getPlayerPosition(),
            playerDest = playerchar.getPlayerDestination(),      
            x,y;
        
        /* translate player pos & player dest */
        var trans = 1000,
            posTrans = [],
            desTrans = [];
            
        posTrans[0] = Math.round(playerPos[0] * trans);posTrans[1] = Math.round(playerPos[1] * trans);
        desTrans[0] = Math.round(playerDest[0] * trans);desTrans[1] = Math.round(playerDest[1] * trans);

        if(posTrans[0] != desTrans[0] || 
           posTrans[1] != desTrans[1]){

           animatePlayer = animations.animatePlayer(posTrans, desTrans, speed);
            x = (animatePlayer[0] / trans); y = (animatePlayer[1] / trans);
            playerchar.setPlayerPosition(x,y); 
            
            // draw moving PC
            // we dont wanto move PC,we only moving background ! :)
            drawTilset((viewport[0]/2) * tilsetSize, (viewport[1]/2) * tilsetSize, animationSetType, 0, true);            
            movesAnimCount++;
        }else{    
            tried = playerchar.getPlayerTriedToMove();
            if(tried[0] != null && tried[1] != null) return;
            playerchar.setIsPlayerMoving(false);
            // we dont wanto move PC,we only moving background ! :)
            drawTilset((viewport[0]/2), (viewport[1]/2), animationTypes[0], 0, false);
        }
    }












    function refreshWorldBoard(){

        // viewportStart ( camera draw start )        
        viewportStart = getViewportStart();
        restofX = Math.round(viewportStart[0]) - viewportStart[0]; // smooth scrolling
        restofY = Math.round(viewportStart[1]) - viewportStart[1]; 

        // generate tillset
        for (var x=restofX-1;x<viewport[0];x++) {
            for (var y=restofY-1;y<viewport[1];y++) {    
                
                // its round for get DB
                xX = Math.round(viewportStart[0] + x);
                yY = Math.round(viewportStart[1] + y);
                
                if(xX < worldSize[0] && yY < worldSize[1] && xX > 0 && yY > 0){
                    var id = lTilsetDB[xX+':'+yY]['id'],
                        tilsetID = lTilsetDB[xX+':'+yY]['coords'][0],
                        tilsetType = lTilsetDB[xX+':'+yY]['coords'][1];
                   
                    // if tilset is animated                    
                    animation = globalTilsetsDB[id]['animation'];                          
                    if(animation != null){     
                        if(globalTilsetsDB[id]['animationSpeed'] != null) animationSpeed = globalTilsetsDB[id]['animationSpeed']; else animationSpeed = 4000;
                        animFrames = animations.animateTilset(animation,animationSpeed);
                        tilsetID = animFrames[0];
                        tilsetType = animFrames[1];
                    }
                        
                    // overlayer - second layer drawing
                    var overlayer = null;
                    if(lTilsetDB[xX+':'+yY]['overlayer'] != null){
                        overlayer = lTilsetDB[xX+':'+yY]['overlayer'];
                        var overlayer_id = overlayer['id'],
                            overlayer_tilsetID = overlayer['coords'][0],
                            overlayer_tilsetType = overlayer['coords'][1];

                        // if tilset is animated         
                             animation =null;
                            if(globalTilsetsDB[overlayer_id] != null){
                                animation = globalTilsetsDB[overlayer_id]['animation'];  
                                if(animation != null){        
                                    if(globalTilsetsDB[id]['animationSpeed'] != null) animationSpeed = globalTilsetsDB[id]['animationSpeed']; else animationSpeed = 4000;
                                    animFrames = animations.animateTilset(animation,animationSpeed);
                                    overlayer_tilsetID = animFrames[0];
                                    overlayer_tilsetType = animFrames[1];
                                }
                            }
                    }         
                    animations.worldOverideAnimations(xX,yY);
                }else{tilsetID = 0; tilsetType = 1; } // if out of viewport
                
                // draw return of loop
                drawTilset(x,y,tilsetID, tilsetType);
                
                // draw return of loop for overlayer
                if(overlayer != null){
                    drawTilset(x,y,overlayer_tilsetID, overlayer_tilsetType); overlayer = null; 
                }
                
                // draw mouse position
                if(mouseSelectTilset != null)
                    if(mouseSelectTilset[0] == x && mouseSelectTilset[1] == y)
                    drawTilset(x,y,0, 2, null);
                
            } // y loop
        } // x loop

        if(pokemon.fight.getFightStage() == 'fight')
        {
            //pokemon.fight.tempCharmander();
            pokemon.fight.fightEngine();
        }
     
        moveToPosition();
        moveToTried();
        updateViewport();
        animationTilsetTicks++;
        if(animationTilsetTicks >= 80) animationTilsetTicks = 0;
    }
    
    /* create world and init main variables like locationDB, worldsize, tilsetDB for global use,
     * happens every location change ! */
    function createWorldBoard(){
        var loadGame = settings.loadGame;
        locationDB = pokemon.world.getLocation();
            location = locationDB[1];
            locationSize = locationDB[0];
            locationPlayer = locationDB[2];
            locationTilsets = locationDB[4];
        worldSize = [locationSize[0],locationSize[1]];
        globalTilsetsDB = locationTilsets;
        
        // loop for all tilsets
        for (var x=0;x<worldSize[0];x++) {
            for (var y=0;y<worldSize[1];y++) {                
                if(!loadGame){ // generate random world
                        tilsetID =15; tilset = globalTilsetsDB[tilsetID];               
                        // save tilset type to database
                        lTilsetDB[x+':'+y] = {
                            id : tilset['id'],
                            coords : [tilset['coords'][0], tilset['coords'][1]],
                            walkin : tilset['walkin'],
                            overlayer : null
                        };
                        drawTilset(x,y,tilset['coords'][0], tilset['coords'][1], null);
                
                }else{ // or load the world

                        loadWorld = location[x+':'+y];
                        if(loadWorld['transitionCoords'] != null)
                            transCoords = [loadWorld['transitionCoords'][0],loadWorld['transitionCoords'][1]];
                        else transCoords = '';
                        
                        // overlayer
                        overlayer = null;
                        if(loadWorld['overlayer'] != null){
                            overlayer = loadWorld['overlayer'];
                            overlayer = {
                                id : overlayer['id'],
                                coords: [overlayer['coords'][0], overlayer['coords'][1]],
                                walkin: overlayer['walkin']
                            }
                        }
                        
                        var fight = null;
                        if(loadWorld['fight'] != null) fight = loadWorld['fight']; 

                        // save tilset type to database
                        lTilsetDB[x+':'+y] = {
                            id : loadWorld['id'],
                            coords : [loadWorld['coords'][0], loadWorld['coords'][1]],
                            walkin : loadWorld['walkin'],
                            transitionWorld : loadWorld['transitionWorld'],
                            transitionCoords : transCoords,
                            overlayer : overlayer,
                            fight: fight
                        };     

                        drawTilset(x,y,loadWorld['coords'][0], loadWorld['coords'][1], null);
                        
                        // draw overlayer
                        if(loadWorld['overlayer'] != null){
                            drawTilset(x,y,overlayer['coords'][0], overlayer['coords'][1], null);
                        }
                }       
            }
        }    
        
        // draw PC position tilset ( png, transparency )
        animationTypes[0] = 0;        
        playerchar.setPlayerPosition(locationPlayer[0],locationPlayer[1]);
        playerchar.setPlayerDestination(locationPlayer[0],locationPlayer[1]);
        updateViewport();
    }
    
    /* create cavnas for world & init classes for global use */
    function createWorldCanvas(toScreen){

        var cols = Math.ceil(windowWidth / tilsetSize), rows = Math.ceil(windowHeight / tilsetSize);

        var background = document.createElement('canvas');
        background.setAttribute("id", "gamecanvas");
        background.style.width = settings.windowWidth; background.style.height = settings.windowHeight;
        background.width = cols * tilsetSize; background.height = rows * tilsetSize;
        bgctx = background.getContext('2d');
        
        // create another canvas for animation
        var bgAnimations = document.createElement('canvas');
        bgAnimations.setAttribute("id", "animationcanvas");
        bgAnimations.style.width = settings.windowWidth; bgAnimations.style.height = settings.windowHeight;
        bgAnimations.width = cols * tilsetSize; bgAnimations.height = rows * tilsetSize;
        bgctxAnim = bgAnimations.getContext('2d');
        
        var boardElement = $('#'+toScreen)[0]; boardElement.appendChild(background); boardElement.appendChild(bgAnimations); // append canvas to the game screen
        sound.playBackground('sounds/102.mp3');
        
        // re init core classes
        fight = pokemon.fight;
        animations = pokemon.animations;
    }
    
    // draw single tilset
    function drawTilset(x,y,tilsetID, tilsetType, halfMove){
        var image = pokemon.images[settings.textures_tilsets];
        destx = x * tilsetSize;
        desty = y * tilsetSize;
        if(halfMove){destx = x; desty = y; }
        bgctx.drawImage(
                image, tilsetID * tilsetSize, tilsetType * tilsetSize, // The y coordinate where to start clipping
                tilsetSize, tilsetSize, destx, desty, tilsetSize, tilsetSize 
        ); 
    }
    
    function setmouseSelectTilset(a,b){
        mouseSelectTilset = [a,b];
    }
    
    function getLocalTilsetsDB(){
        return lTilsetDB;
    }    
    
    function setLocalTilsetsDB(db){
        lTilsetDB = db;
    }

    return{
        createWorldCanvas : createWorldCanvas,
        createWorldBoard : createWorldBoard,
        drawTilset : drawTilset,
        refreshWorldBoard : refreshWorldBoard,
        getViewportStart : getViewportStart,
        triggerMove : triggerMove,
        getLocalTilsetsDB : getLocalTilsetsDB,
        setLocalTilsetsDB : setLocalTilsetsDB,
        setmouseSelectTilset : setmouseSelectTilset
        
    }
    
    
})();

/*
var display = pokemon.display;
var tilset = display.getTilset(0,0);
console.log(tilset[0,5]['floorType']);
 */