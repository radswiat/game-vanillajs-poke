pokemon.playerchar = (function(){
    
    var display = pokemon.display,
        tilsets = pokemon.tilsets,
    
        // moving variables
        playerDestination,      // we pc should go to
        playerPosition,         // where pc is now
        playerOrientation = 0,  // orientation - where pc is looking now
        isPlayerMoving = false,
        playerTriedToMove = [null, null],
        movesCount = 0,         // for counting animation
        playerMoveRequest = false;
        
    function setPlayerTriedToMove(a,b){
        playerTriedToMove = [a,b];
    }
    
    function getPlayerTriedToMove(a,b){
        return playerTriedToMove;
    }
        
    function getIsPlayerMoving(){
        return isPlayerMoving;
    }
    
    function setIsPlayerMoving(boo){
        isPlayerMoving = boo;
    }
    
    function setPlayerPosition(a,b){
        playerPosition = [a,b];
    }
    
    function getPlayerPosition(){
        return playerPosition;
    }
    
    function setMoveRequest(a,b){
        playerMoveRequest = [a,b];
    }
    
    function getMoveRequest(){
        return playerMoveRequest;
    }
    
    function setPlayerDestination(a,b){
        playerDestination = [a,b];
    }
    
    function getPlayerDestination(a,b){
        return playerDestination;
    }    
    
    function increaseMovesCount(){
        movesCount++;
    }
    
    function getMovesCount(){
        return movesCount;
    }
    

    


    return {

        setPlayerPosition : setPlayerPosition,
        getPlayerPosition : getPlayerPosition,
        setPlayerDestination : setPlayerDestination,
        getPlayerDestination : getPlayerDestination,
        getIsPlayerMoving : getIsPlayerMoving,
        setIsPlayerMoving : setIsPlayerMoving,
        getMovesCount : getMovesCount,
        setMoveRequest : setMoveRequest,
        getMoveRequest : getMoveRequest,
        increaseMovesCount : increaseMovesCount,
        getPlayerTriedToMove :getPlayerTriedToMove,
        setPlayerTriedToMove : setPlayerTriedToMove
    }
})();