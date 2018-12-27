pokemon.screens['menu-start'] = (function(){

    var game = pokemon.game,
        dom = pokemon.dom,
        $ = dom.$,
        firstRun = true,
        functions = pokemon.functions,
        settings = pokemon.settings;

      

      
    // preloader thing
    function setup(getLoadProgress) {        
        var scr = $('#menu-start')[0];
        function checkProgress(){
            var p = getLoadProgress() * 100;
            console.log(p);
            $('.loader',scr)[0].value = p;
            if (p == 100) {
                dom.bind(scr, 'click', function() {
                    console.log('test');
                    GET = functions.getGET();
                    // run game editor
                    if(GET.editor && settings.gameEditor == 1){
                        pokemon.game.showPopup('game-editor');
                        pokemon.game.showScreen('game-screen');
                    }else{
                        pokemon.game.showScreen('game-screen');
                    }
                });
            } else {
                setTimeout(checkProgress, 30);
            }
        }
        checkProgress();
    }

    
    function run(getLoadProgress){
        if(firstRun){
            setup(getLoadProgress);
            firstRun = false;
        }
    }
    
    return {
        run: run
    };
})();