pokemon.functions = (function(){
    function run(){
        
    }
    
    function getGET()
    {
        var prmstr = window.location.search.substr(1);
        var prmarr = prmstr.split ("&");
        var params = {};

        for ( var i = 0; i < prmarr.length; i++) {
            var tmparr = prmarr[i].split("=");
            params[tmparr[0]] = tmparr[1];
        }
        return params;
    }
    
    function shuffle(array) {
      var tmp, current, top = array.length;
      if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
      return array;
    }
    
    return {
        run:run,
        getGET : getGET,
        shuffle : shuffle
    }
})();