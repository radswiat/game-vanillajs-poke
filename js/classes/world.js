pokemon.world = (function(){
   var settings = pokemon.settings,
       engine = pokemon.engine,
       locationData = {},
       transistionCoords = [4,3]; // starting position
   
   function setTrainsistionsCoords(a,b){
       transistionCoords = [a,b];
   }
   
   function getTransistionCoords(){
       return transistionCoords;
   }
   
   // its loading specific location only when it's needed
   function run(){
       worldLocationFile = settings.curentLocation;

       Modernizr.load([{
        load: [
             "data/locations/"+worldLocationFile+"/"+worldLocationFile+".js",
             "data/locations/"+worldLocationFile+"/"+worldLocationFile+".css"
        ],
       complete: function(){
           //alert('done');
           locationData = pokemon.locations[worldLocationFile].run();
           locationData = pokemon.locations[worldLocationFile].getLocation();
           settings.textures_tilsets = 'img/textures/'+locationData[3]+'.png';           
           loadTextures();
       }
    }
    ]);
    
    function loadTextures(){
            Modernizr.load([{
             load: [
                  'loader!'+settings.textures_tilsets
             ],
            complete: function(){

            }
         }]);
    }
}
   
   function getLocation(){
       return locationData;
   }
   
   function changeLocation(setLocation){
       worldLocationFile = setLocation;
       if(pokemon.locations[worldLocationFile] === undefined){
       
            //pokemon.engine.setEngine(false); // turn of game engine temporary
            Modernizr.load([{
             load: [
                  "data/locations/"+worldLocationFile+"/"+worldLocationFile+".js",
                  "data/locations/"+worldLocationFile+"/"+worldLocationFile+".css"
             ],
            complete: function(){
                pokemon.locations[worldLocationFile].run();        
                locationData = pokemon.locations[worldLocationFile].getLocation();                
                loadTextures();

                pokemon.settings.textures_tilsets = 'img/textures/'+locationData[3]+'.png';
                var image = new Image();
                image.src = pokemon.settings.textures_tilsets;
                pokemon.images[pokemon.settings.textures_tilsets] = image; 


                locationData[2] = transistionCoords; // get point where to jump
                pokemon.display.createWorldBoard();
                pokemon.screens['game-editor'].run();
                pokemon.screens['game-editor'].startEditor();

            }
         }
         ]);
    
       }else{
                //pokemon.engine.setEngine(false);
                locationData = {};
                locationData = pokemon.locations[worldLocationFile].getLocation();
                pokemon.settings.textures_tilsets = 'img/textures/'+locationData[3]+'.png';
                
     

                locationData[2] = transistionCoords; // get point where to jump
                pokemon.display.createWorldBoard();
                pokemon.screens['game-editor'].run();
                pokemon.screens['game-editor'].startEditor();
       }

   }
   
    function loadTextures(){
            Modernizr.load([{
             load: [
                  'loader!'+settings.textures_tilsets
             ],
            complete: function(){

            }
         }]);
    }
   
   return {
       run : run,
       getLocation : getLocation,
       changeLocation : changeLocation,
       setTrainsistionsCoords : setTrainsistionsCoords
   }
   
})();