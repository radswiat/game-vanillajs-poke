pokemon.screens['game-fight'] = (function(){
    var dom = pokemon.dom,
        $ = dom.$,
        playerchar = pokemon.playerchar,
        display = pokemon.display,
        functions = pokemon.functions,
        settings = pokemon.settings,
        sound = pokemon.sound,
        animations = pokemon.animations;
        
        
    function run(){
        display.createWorldCanvas('game-fight');
        //display.createWorldBoard();
        pokemon.inputs.run();        
        sound.run();
        animations.run();
        
        // init editor
        GET = functions.getGET();
        //if(GET.editor && settings.gameEditor == 1)
        //pokemon.screens['game-editor'].startEditor();
        
        pokemon.fight.setFightStage('fight');
        pokemon.engine.run();
    }
    
    return {
        run :run
    }
    
})();