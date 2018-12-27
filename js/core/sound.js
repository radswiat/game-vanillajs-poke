pokemon.sound = (function(){
    var sounds = [],
        background,
        volumeBackgound = 20;
    function run(){
        window.addEventListener('keydown', volumeBackground, false);
    }
    
    function volumeBackground(e){
        sndSteps = 2;
        volumeDiv = document.getElementById('volume');
        if(e.keyCode == 219 || e.keyCode == 221){
            if(e.keyCode == 219){
                if(volumeBackgound - sndSteps >= 0)
                volumeBackgound = volumeBackgound - sndSteps;
            }
            else if(e.keyCode = 221){
                if(volumeBackgound + sndSteps <= 100)
                volumeBackgound = volumeBackgound + sndSteps;
            }

            volumeDiv.style.width = volumeBackgound+'%';
            background.volume = volumeBackgound/100;
        }
    }
    
    function playBackground(url){
        if(background != null) background.pause();
        background = new Audio(url);
        background.load();
        background.play();
        volumeDiv = document.getElementById('volume');
        volumeDiv.style.width = (volumeBackgound+2)+'%';
        background.volume = volumeBackgound/100;
    }
    
    function play(url){
        var snd = new Audio(url);
        snd.load();
        snd.play();
        snd.volume = 0.02;
        snd.loop = true;
        sounds.push(snd);
    }
    
    return{
        run : run,
        play : play,
        playBackground : playBackground
    }
    
})();