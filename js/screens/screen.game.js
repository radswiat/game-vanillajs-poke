pokemon.screens['game-screen'] = (function(){
    var dom = pokemon.dom,
        $ = dom.$,
        playerchar = pokemon.playerchar,
        display = pokemon.display,
        functions = pokemon.functions,
        settings = pokemon.settings,
        sound = pokemon.sound,
        animations = pokemon.animations;
   
    function run(){
        display.createWorldCanvas('game-screen');
        display.createWorldBoard();
        pokemon.inputs.run();        
        sound.run();
        animations.run();
        
        // init editor
        GET = functions.getGET();
        if(GET.editor && settings.gameEditor == 1)
        pokemon.screens['game-editor'].startEditor();
        
        pokemon.engine.run();
           var w = myWidth = window.innerWidth;
           var h = myHeight = window.innerHeight;
           window.scrollTo(w/2,h/2);
    }
    

    
    return{
        run:run
    }
    
    
})();