pokemon.fightAnimations = (function(){
    var animationPosition = [];
    var rotation = 0;
    
    function fireBall(){
        var animation = [];
        animation.push({
            id : 1,
            startX : 0,
            startY : 0,
            width : 33,
            height : 40
        });
        animation.push({
            id : 2,
            startX : 33,
            startY : 0,
            width : 55,
            height : 40
        });
        animation.push({
            id : 3,
            startX : 88,
            startY : 0,
            width : 89,
            height : 40
        });
        animation.push({
            id : 4,
            startX : 177,
            startY : 0,
            width : 87,
            height : 40
        });
        animation.push({
            id : 5,
            startX : 264,
            startY : 0,
            width : 89,
            height : 40
        });
        animation.push({
            id : 5,
            startX : 353,
            startY : 0,
            width : 89,
            height : 40
        });
        animation.push({
            id : 5,
            startX : 442,
            startY : 0,
            width : 70,
            height : 40
        });
        drawAnim('name', animation,2000, 'img/animations/fireAnimations.png', [15,5], [10,5], 0.08);
    }
    
    
    
    function calcAnimationMove(name, startPos, destPos, moveSpeed){
        if(animationPosition[name] == null){ animationPosition[name] = startPos;}else{
            animationPosition[name][0] = animationPosition[name][0]+moveSpeed;
        }
        
        if(animationPosition[name][0] > 50)
            animationPosition[name][0] = startPos[0];
    }
    
    function drawAnim(name, animation, animSpeed, animType, startPos, destPos, moveSpeed){
        var tilsetSize = 40;
        var image = pokemon.images[animType];
        var index = progress(animation,2000);
        
        calcAnimationMove(name, startPos, destPos, moveSpeed);
        

        // anim data
        animData = animation[index];  

        bgctx.drawImage(
                image, 
                animData['startX'],  // start x
                animData['startY'], // start y
                animData['width'], // start width x
                animData['height'], // start height y
                animationPosition[name][0] * tilsetSize,
                animationPosition[name][1] * tilsetSize,
                animData['width'], //180
                animData['height']
                ); 
    }
    
    
    
    
    
    
    
    
    
    
     function watergun(){
        var animation = [];
        var animationStart = [];
        var animationEnd = [];

        animation.push({
            id : 1,
            startX : 149,
            startY : 174,
            width : 310,
            height : 124
        });
        animation.push({
            id : 2,
            startX : 615,
            startY : 174,
            width : 310,
            height : 124
        });
        animation.push({
            id : 3,
            startX : 149,
            startY : 174,
            width : 310,
            height : 124
        });
        animation.push({
            id : 4,
            startX : 615,
            startY : 174,
            width : 310,
            height : 124
        });
         animation.push({
            id : 1,
            startX : 149,
            startY : 174,
            width : 310,
            height : 124
        });
        animation.push({
            id : 2,
            startX : 615,
            startY : 174,
            width : 310,
            height : 124
        });
        animation.push({
            id : 3,
            startX : 149,
            startY : 174,
            width : 310,
            height : 124
        });
        animation.push({
            id : 4,
            startX : 615,
            startY : 174,
            width : 310,
            height : 124
        });

        
        animationStart.push({
            type : 'start',
            startX : 0,
            startY : 174,
            width : 149,
            height : 124,
            posX : 100,
            posY : 100
        }); 
        animationStart.push({
            type : 'start',
            startX : 466,
            startY : 174,
            width : 149,
            height : 124,
            posX : 100,
            posY : 100
        }); 
        
        animationStart.push({
            type : 'start',
            startX : 0,
            startY : 174,
            width : 149,
            height : 124,
            posX : 100,
            posY : 100
        }); 
        animationStart.push({
            type : 'start',
            startX : 466,
            startY : 174,
            width : 149,
            height : 124,
            posX : 100,
            posY : 100
        }); 
        
        animationStart.push({
            type : 'start',
            startX : 0,
            startY : 174,
            width : 149,
            height : 124,
            posX : 100,
            posY : 100
        }); 
        animationStart.push({
            type : 'start',
            startX : 466,
            startY : 174,
            width : 149,
            height : 124,
            posX : 100,
            posY : 100
        }); 
        
        animationStart.push({
            type : 'start',
            startX : 0,
            startY : 174,
            width : 149,
            height : 124,
            posX : 100,
            posY : 100
        }); 
        animationStart.push({
            type : 'start',
            startX : 466,
            startY : 174,
            width : 149,
            height : 124,
            posX : 100,
            posY : 100
        }); 

       // animationLinear('hrydropump', animation, animationStart, 'img/animations/fireAnimations.png');
    }  

    

    function getFrameIndex(elements, repeats, duration){
        var d = new Date(), 
            time = d.getTime(),
            progress, index;
            
            if(repeats != null){
                progress = (time % duration) / duration;
                index = Math.floor(progress * repeats);            
                return (index % elements); 
            }else{
                progress = (time % duration) / duration;
                return Math.floor(progress * elements);            
            }

    }
    
    function animationLinear(animationData,r){
    //function animationLinear(animation, animationStart, startPoint, img,  rotation){

        var animationStart = animationData['animationStart'],
            animation = animationData['animation'];
            
        var tilsetSize = 40,
            image = pokemon.images[animationData['url']],
            index = getFrameIndex((animation.length), animation['info']['repeats'],2000);
        
        
        rotation = rotation + 0.1;
        if(rotation > 1) rotation = 0;
        // temporary, until we can get pokemon position
        // temporary, until we can get pokemon position
        var startPoint = [-75,-62];
        
        bgctxAnim.save();
        bgctxAnim.translate(370,330);
        bgctxAnim.rotate(rotation);
        
        if(animationStart != null){
            animStartData = animationStart[index]; 
            animStartInfo = animationStart['info'];
            bgctxAnim.drawImage(
                    image, 
                    animStartData['x'], animStartData['y'],
                    animStartInfo['width'], animStartInfo['height'], 
                    startPoint[0],startPoint[1],
                    animStartInfo['width'],animStartInfo['height']
                    );      
        }


        // anim data
        animData = animation[index]; 
        animInfo = animation['info'];
        
        for(var a = 0; a < 5; a++){
            bgctxAnim.drawImage(
                    image, 
                    animData['x'],  // start x
                    animData['y'], // start y
                    animInfo['width'], // start width x
                    animInfo['height'], // start height y
                    startPoint[0] + animStartInfo['width'] + ( animInfo['width'] * a -  (1 * a)),
                    startPoint[1],
                    animInfo['width'], //180
                    animInfo['height']
                    );     
        }               
        
        bgctxAnim.restore();
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    function progress(animation, duration){
        var d = new Date(), 
            time = d.getTime(), // 60
            count = animation.length; // 10
            
            var progress = (time % duration) / duration;
            return Math.floor(progress * count);
    }
    
    function attackAnimationFromToLine(){

        var image = pokemon.images['img/animations/charmander.png'];
        

        x = 0;
        y = 0;

   
        var tilsetSize = 40;
        
        var d = new Date(), 
            coords = [],
            duration = 400,
            time = d.getTime(), // 60
            count = 2; // 10
            
            var progress = (time % duration) / duration;
            var frameIndex = Math.floor(progress * count);
            
        if(frameIndex == 0)
        bgctx.drawImage(
                image, 
                0,  // start x
                0, // start y
                180, // start width x
                140, // start height y
                tilsetSize *6,
                tilsetSize *5,
                180, //180
                140
                );
                    
        else
        bgctx.drawImage(
                image, 
                200,  // start x
                0, // start y
                180, // start width x
                140, // start height y
                tilsetSize *6,
                tilsetSize *5,
                180,
                140
                );
    }
 
    return {
        attackAnimationFromToLine : attackAnimationFromToLine,
        fireBall : fireBall,
        watergun : watergun,
        animationLinear : animationLinear
    }
    
    /*

        animation.push({
            id : 1,
            startX : 149,
            startY : 40,
            width : 310,
            height : 124
        });
        animation.push({
            id : 2,
            startX : 615,
            startY : 40,
            width : 310,
            height : 124
        });
        animation.push({
            id : 3,
            startX : 149,
            startY : 40,
            width : 310,
            height : 124
        });
        animation.push({
            id : 4,
            startX : 615,
            startY : 40,
            width : 310,
            height : 124
        });
         animation.push({
            id : 1,
            startX : 149,
            startY : 40,
            width : 310,
            height : 124
        });
        animation.push({
            id : 2,
            startX : 615,
            startY : 40,
            width : 310,
            height : 124
        });
        animation.push({
            id : 3,
            startX : 149,
            startY : 40,
            width : 310,
            height : 124
        });
        animation.push({
            id : 4,
            startX : 615,
            startY : 40,
            width : 310,
            height : 124
        });

     */
    
})();