pokemon.fight = (function(){
    var dom             = pokemon.dom,
        $               = dom.$,
        sound           = pokemon.sound,
        anim            = pokemon.fightAnimations,
        fightInitiation = false,
        screens         = pokemon.screens,
        fightStage      = null,
        attacks         = pokemon.attacks;
    
    function setFightStage(a){
        fightStage = a;
    }

    function getFightStage(){
        return fightStage;
    }
    
    
    // first event, after walks in tilset
    function fightEvent(chance){
        var rand=Math.floor(Math.random()*100)
        if(rand < chance) return;
        
        setFightStage('fightBeforeInit');    
        run();
        sound.playBackground('sounds/musicFX/battleWild.mp3');
    }
    
    // after animation completed ( fightEvent ) 
    function fightScreen(){
        if(getFightStage() == 'fightInit')
            
       Modernizr.load([{
        load: [
             "js/classes/fightAnimations.js",
             "js/classes/attacks.js",
             "loader!img/animations/charmander.png",
             "loader!img/animations/fireAnimations.png",
        ],
       complete: function(){
            pokemon.world.changeLocation('battle_00');
            pokemon.world.setTrainsistionsCoords(13,10);
            pokemon.game.showScreen('game-fight');
            
            pokemon.settings.textures_tilsets = 'img/animations/charmander.png';
            var image = new Image();
            image.src = pokemon.settings.textures_tilsets;
            pokemon.images[pokemon.settings.textures_tilsets] = image; 
            
            pokemon.settings.textures_tilsets = 'img/animations/fireAnimations.png';
            var image = new Image();
            image.src = pokemon.settings.textures_tilsets;
            pokemon.images[pokemon.settings.textures_tilsets] = image; 
            
            anim = pokemon.fightAnimations;
            sound.playBackground('sounds/battle.mp3');
            pokemon.attacks.run();
       }}]);

    }
    
    
    function fightEngine(){
        var attacksDB = pokemon.attacks.getAttacks();

        anim.animationLinear(attacksDB['hydropump'], 1);
        
        anim.attackAnimationFromToLine();
        //anim.fireBall();
       //anim.hydropump();
       // anim.watergun();

    }
    
    /* fight interface */

    function fightInterface(){
        var butFight = $('#fight')[0];
        butFight.onclick = (function(){
            $('#menu-text')[0].style.display = 'none';
            $('#menu-moves')[0].style.display = 'block';
        })
    }



    
    function run(){
        sound = pokemon.sound;     
        
        fightInterface();
    }
    
    return{
        setFightStage : setFightStage,
        getFightStage : getFightStage,
        fightEvent : fightEvent,
        fightScreen : fightScreen,

        fightEngine : fightEngine
    }
    
})();