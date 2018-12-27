pokemon.attacks = (function(){
    var attacks = [];
    var animation = [];
    var animationStart = [];
        
    function run(){
        defineAttacks();
    }
    
    function getAttacks(){
        return attacks;
    }
    
    function defineAttacks(){

        /* hydropump */
        animation['info'] = {
            width : 310,
            height: 124,
            repeats: 4 
        }        
        animation.push({
                x : 149,y : 40
            },{
                x : 615,y : 40
        });
        animationStart['info'] = {
            width : 149,
            height : 124,
            repeats: 4 
        }        
        animationStart.push({
                x : 0,y : 40
            },{
                x : 466,y : 40
        });   
        attacks['hydropump'] = {            
            power : 50,
            powerType : 'fire',
            animType : 'lineral',
            url : 'img/animations/fireAnimations.png',
            animation : animation,
            animationStart : animationStart
        }

        
    }
    
    return {
        run : run,
        getAttacks : getAttacks
    }
})();