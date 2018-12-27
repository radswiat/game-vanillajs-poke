pokemon.screens['game-editor'] = (function(){
    var dom = pokemon.dom,
        display = pokemon.display,
        tilsets = pokemon.tilsets,
        dol = dom.$,
        settings = pokemon.settings,
        worldBoxSize = settings.worldBoxSize,
        paintTilsets = 0,
        paintTilsetsSecond = 0,
        inputs = pokemon.inputs,
        tilsetLast = 0,
        tilsetLastSecond = 0,
        mouseClicked = false,
        mouseMoveType,
        world = pokemon.world;
        
    function run(){
        //inputs.setmouseSelectTilset(true);
        Modernizr.load([{
        load: [
            "http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js",
             "js/lib/scroller.js"
             
        ],
        complete: function(){

                scrollbar = $('#scrollbar1');
                scrollbar.tinyscrollbar(); 
               
        }
        }]);
    }
    
    function startEditor(){
        var game = dol('canvas')[0];
        editorShowTilsets(); // show all tilsets in editor menu
        game.addEventListener('mousedown', click, false);
        game.addEventListener('mouseup', unclick, false);
        game.addEventListener('mousemove', trackMouse, false);
        
        // bind controlls
        var controlls = dol('.editor.tilset');
        for(var a = 0; a < controlls.length; a++)
        controlls[a].addEventListener('mousedown', changePaintTilset, false);
    }

    function unclick(){
        setMouseClicked(false);
        mouseMoveType = '';
        document.body.style.cursor = 'default';
    }
    function click(event){
        setMouseClicked(true);
        replaceTilset(event);
        mouseMoveType = event.which;
        document.body.style.cursor = 'move';
        game.addEventListener('mousemove', replaceTilsetOnMove, false);
    }
    function setMouseClicked(a){
        mouseClicked = a;
    }
    
    function trackMouse(event){
        tilset = getClickedTilset(event);   
        x = tilset[0];
        y = tilset[1];
        display.setmouseSelectTilset(x, y);
        //display.drawTilset(x,y,0, 1);
    }
    

    
    function changePaintTilset(event){
        if(event.which  != 1 && event.which != 3) return;
        var target = event.target || event.srcElement;
        
        if(event.which  == 1){            
            target.classList.add("selected");
            paintTilsets = target.id;
            if(tilsetLast != 0){
                dol('#'+tilsetLast)[0].classList.remove("selected");
            }
            tilsetLast = target.id;  
        }else{
            target.classList.add("selectedSecond");
            paintTilsetsSecond = target.id;
            if(tilsetLast != 0){
                dol('#'+tilsetLastSecond)[0].classList.remove("selectedSecond");
            }
            tilsetLastSecond = target.id;       
        }

    }
    
    
    function replaceTilsetOnMove(event){
        if(!mouseClicked) return;
        var locationDB = pokemon.world.getLocation(),
            locationTilsets = locationDB[4];
        var tilsetsDB = locationTilsets;
        var lTilsetDB = display.getLocalTilsetsDB();
        
        
        
        tilset = getClickedTilset(event, 'click');   
        x = tilset[0];
        y = tilset[1];
        if(mouseMoveType == 1){
            mainTilsetDB = tilsetsDB[paintTilsets];
            lTilsetDB[x+':'+y] = {
                id : mainTilsetDB['id'],
                coords : [mainTilsetDB['coords'][0],mainTilsetDB['coords'][1]],
                walkin : mainTilsetDB['walkin'],
                overlayer : null
            }; 
        }else{
            mainTilsetDB = tilsetsDB[paintTilsetsSecond];
            lTilsetDB[x+':'+y]['overlayer'] = {
                id : mainTilsetDB['id'],
                coords : [mainTilsetDB['coords'][0],mainTilsetDB['coords'][1]],
                walkin : mainTilsetDB['walkin']
            };    
        }
        //console.log(x + ' , ' + y + ' , ' + mainTilsetDB['coords'][0] + ' , ' + mainTilsetDB['coords'][1]);
        display.drawTilset(x,y,mainTilsetDB['coords'][0],mainTilsetDB['coords'][1]);
    }
    function replaceTilset(event){

        if(event.which  != 1 && event.which != 3)return;
        if(!mouseClicked) return;
        var locationDB = pokemon.world.getLocation(),
            locationTilsets = locationDB[4];
        var tilsetsDB = locationTilsets;
        var lTilsetDB = display.getLocalTilsetsDB();
        

        tilset = getClickedTilset(event, 'click');   
        x = tilset[0];
        y = tilset[1];

        if(event.which  == 1){
            mainTilsetDB = tilsetsDB[paintTilsets];
            //alert(mainTilsetDB['id']);
            lTilsetDB[x+':'+y] = {
                id : mainTilsetDB['id'],
                coords : [mainTilsetDB['coords'][0],mainTilsetDB['coords'][1]],
                walkin : mainTilsetDB['walkin'],
                overlayer : null
            }; 
        }else{
            // if main tilsets exists            
            if(lTilsetDB[x+':'+y] == null) return;

            //alert(mainTilsetDB['id']);
            mainTilsetDB = tilsetsDB[paintTilsetsSecond];
            lTilsetDB[x+':'+y]['overlayer'] = {
                id : mainTilsetDB['id'],
                coords : [mainTilsetDB['coords'][0],mainTilsetDB['coords'][1]],
                walkin : mainTilsetDB['walkin']
            };    
        }


        //console.log(x + ' , ' + y + ' , ' + mainTilsetDB['coords'][0] + ' , ' + mainTilsetDB['coords'][1]);
        display.drawTilset(x,y,mainTilsetDB['coords'][0],mainTilsetDB['coords'][1]);
    }
    
    function getClickedTilset(event, action){
        var x = new Number();
        var y = new Number();
        var canvas = dol('canvas')[0];

        if (event.x != undefined && event.y != undefined)
        {
          x = event.x;
          y = event.y;
        }
        else // Firefox method to get the position
        {
          x = event.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
          y = event.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
        }

        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;
        
        // fix for view port
        viewportStart = display.getViewportStart();

        x = Math.floor(x/40);
        y = Math.floor(y/40);
        
        if(action == 'click'){
            xX = Math.round(viewportStart[0] + x);
            yY = Math.round(viewportStart[1] + y); 
        }else{
            xX = Math.round(x);
            yY = Math.round(y);  
        }

        
        return [xX,yY];
    }
    
    function editorShowTilsets(){
        var locationDB = pokemon.world.getLocation(),
            locationTilsets = locationDB[4];
        var tilsetsDB = locationTilsets;
        var tilsetsContainer = document.getElementById('tilsetsContainer');
        var editorTilsets;
        var editorObjects;

        for(x=0; x < tilsetsDB.length; x++){
            coords = tilsetsDB[x]['coords'];
      
                posX = coords[0] * 40;
                posY = coords[1] * 40;
                
                editorTilsets += '<div id="'+x+'" class="editor tilset" style="background-position: '+-posX+'px '+-posY+'px"></div>';
        }
        // laaame
        editorTilsets =editorTilsets.replace("undefined","");
        tilsetsContainer.innerHTML = editorTilsets;



    }
    
    function saveWorld(){
        var locationDB = pokemon.world.getLocation(),
            location = locationDB[1],
            locationSize = locationDB[0],
            locationPlayer = locationDB[2],
            locationTilsets = locationDB[4];
        var worldSize = [locationSize[0],locationSize[1]];
        var tilsetDB = display.getLocalTilsetsDB();
        var worldData;
        
        for (var x=0;x<worldSize[0];x++) {
            for (var y=0;y<worldSize[1];y++) {

                
                tilset = tilsetDB[x+':'+y];
                overlayer = null;
                if(tilset['overlayer'] != null){
                    
                    overTilset = tilset['overlayer'];
                    overlayer = '{';
                    overlayer += 'id : '+overTilset['id']+',';
                    overlayer += 'coords : ['+overTilset['coords'][0]+','+overTilset['coords'][1]+'],';
                    overlayer += 'walkin : '+overTilset['walkin']+'';
                    overlayer += '}';
                }
                    
                
                worldData += 'locationData["'+x+':'+y+'"] = {';
                worldData += 'id : '+tilset['id']+',';
                worldData += 'coords : ['+tilset['coords'][0]+','+tilset['coords'][1]+'],';
                worldData += 'walkin : '+tilset['walkin']+',';
                worldData += 'overlayer: '+overlayer+'';
                worldData += '};';

                }
            }
        


        window.open('data:text/txt;charset=utf-8,' + worldData);
  
    }
    
    return{
        run : run,
        startEditor : startEditor,
        getClickedTilset : getClickedTilset,
        saveWorld : saveWorld
    }
})();