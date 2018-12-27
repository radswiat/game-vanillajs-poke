pokemon.game = (function(){
   var dom = pokemon.dom,
   $ = dom.$;
   

    function showPopup(screenId){
       var activeScreen = $('#game .screen-popup.active')[0],
       screen = $('#' + screenId)[0];
       
       if(activeScreen){           
           dom.removeClass(activeScreen, 'active');
       }
       
        // extract screen parameters from arguments
        var args = Array.prototype.slice.call(arguments, 1);
            // run the screen module
            console.log(args);
            pokemon.screens[screenId].run.apply(
                pokemon.screens[screenId], args
            );
       
       // display screen html       
       dom.addClass(screen, 'active');   
    }

   // hide active screen ( if any ) and show the screen 
   // with the specific id
   function showScreen(screenId, justShow){
       var activeScreen = $('#game .screen.active')[0],
       screen = $('#' + screenId)[0];
       
       if(activeScreen){           
           dom.removeClass(activeScreen, 'active');
       }
       
        // extract screen parameters from arguments
        var args = Array.prototype.slice.call(arguments, 1);
            // run the screen module
            console.log(args);
            pokemon.screens[screenId].run.apply(
                pokemon.screens[screenId], args
            );
       
       // display screen html       
       dom.addClass(screen, 'active');
   }
   
       // expose public method
       return {           
           showScreen : showScreen,
           showPopup : showPopup
       }
   
})();

