var pokemon = {
    version : 45,
    screens : {},
    locations : {},
    settings : {
        gameEditor : 1,
        tilsetSize : 40,
        windowWidth : 1440,
        windowHeight: 720,

        
        loadGame : true, // if false : generate random world
        
        //curentLocation : 'battle_00'
        curentLocation : '00_pallet_home_indoor'
    },
    images : {}
};
var ver = pokemon.version;

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


/* preloading stuffs */

    var numPreload = 0,
        numLoaded = 0;

    yepnope.addPrefix('loader', function(resource){
        // console log
        var isImage = /.+\.(jpg|png|gif)$/i.test(resource.url);
        resource.noexec = isImage;

        numPreload++;
        resource.autoCallback = function(e){
            numLoaded++;
            if(isImage){       
                var image = new Image();
                image.src = resource.url;
                pokemon.images[resource.url] = image;   
            }
        };

        return resource;    
    });

    function getLoadProgress(){
        if(numPreload > 0){
            return numLoaded / numPreload;
        }else{
            return 0;
        }
    }

/* main loader stuffs */

window.addEventListener("load", function() {
    
    // set screen size
    gameScreen = getScreenSizes();
    pokemon.settings.windowWidth = gameScreen[0];
    pokemon.settings.windowHeight = gameScreen[1];
    
    
   // start dynamic loading
   // loading stage 1
   Modernizr.load([{
       load: [
           // loader - need to be load before run | preload - loading take place in the background
           "loader!js/lib/sizzle.js",
           "loader!js/lib/dom.js",
           "loader!js/lib/taffy.js",
           
           // images animation temp


           
           // classes
           "loader!js/classes/playerchar.js?version="+ver,
           "loader!js/classes/tilsets.js?version="+ver,
           "loader!js/classes/world.js?version="+ver,
           
           // core
           "loader!js/core/sound.js?version="+ver,
           "loader!js/core/functions.js?version="+ver,
           "loader!js/core/database.js?version="+ver,
           "loader!js/core/game.js?version="+ver,
           "loader!js/core/engine.js?version="+ver,
           "loader!js/core/display.js?version="+ver,           
           "loader!js/core/inputs.js?version="+ver,
           "loader!js/core/animations.js?version="+ver,
           "loader!js/core/fight.js?version="+ver,
           

           
           // screens
           "loader!js/screens/screen.menustart.js?version="+ver,
           "loader!js/screens/screen.game.js?version="+ver,
           "loader!js/screens/screen.game.editor.js?version="+ver,
           "loader!js/screens/screen.game.fight.js?version="+ver,
           
           // sounds

           // images
           //"loader!img/textures/worldTextures.png",
       ],
       complete: function(){

           pokemon.game.showScreen('menu-start', getLoadProgress); 
           pokemon.world.run();
       }
    }
    ]);
    

    
    function getScreenSizes(){
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight|| e.clientHeight|| g.clientHeight;  
        var gameWidth = 640;
        var gameHeight = 480;
            if(x >= 1440){
                gameWidth = 1440;
            }else if(x >= 1280 ){
                gameWidth = 1280;
            }else if(x >= 1024 ){
                gameWidth = 960;
            }
            
            if(y >= 720){
                gameHeight = 720;
            }else if(x >= 680 ){
                gameHeight = 640;
            }
            
            return [gameWidth,gameHeight];
    }
    
}, false);




