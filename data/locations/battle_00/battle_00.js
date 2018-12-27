pokemon.locations['battle_00'] = (function(){
    
    var locationData = {};
    var locationSize = [25,15]; // x y
    var locatonPlayer = [13,9]; // player starting location
    var locationTilsetUrl = 'battle';
    var locationTilsetData = {};
    
    function run(){
        locationSize = [(locationSize[0]+1), (locationSize[1]+1)];
    }
    
    function getLocation(){
        locationData["0:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["1:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["1:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["1:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["1:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["1:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["1:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["1:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["1:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["1:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["1:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["1:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["1:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["1:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["2:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["2:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["3:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["3:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["4:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["4:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["5:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["5:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["6:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["6:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["6:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["6:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["7:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["7:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["8:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["8:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["9:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["9:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["9:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["10:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["10:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["11:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["11:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["11:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["11:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["11:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["11:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["11:6"] = {id : 16,coords : [0,4],walkin : true,overlayer: null};locationData["11:7"] = {id : 21,coords : [0,5],walkin : true,overlayer: null};locationData["11:8"] = {id : 26,coords : [0,6],walkin : true,overlayer: null};locationData["11:9"] = {id : 31,coords : [0,7],walkin : true,overlayer: null};locationData["11:10"] = {id : 36,coords : [0,8],walkin : true,overlayer: null};locationData["11:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["11:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["11:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["11:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["11:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["12:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["12:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:6"] = {id : 17,coords : [1,4],walkin : true,overlayer: null};locationData["12:7"] = {id : 22,coords : [1,5],walkin : true,overlayer: null};locationData["12:8"] = {id : 27,coords : [1,6],walkin : true,overlayer: null};locationData["12:9"] = {id : 32,coords : [1,7],walkin : true,overlayer: null};locationData["12:10"] = {id : 37,coords : [1,8],walkin : true,overlayer: null};locationData["12:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["13:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["13:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["13:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["13:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["13:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["13:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["13:6"] = {id : 18,coords : [2,4],walkin : true,overlayer: null};locationData["13:7"] = {id : 23,coords : [2,5],walkin : true,overlayer: null};locationData["13:8"] = {id : 28,coords : [2,6],walkin : true,overlayer: null};locationData["13:9"] = {id : 33,coords : [2,7],walkin : true,overlayer: null};locationData["13:10"] = {id : 38,coords : [2,8],walkin : true,overlayer: null};locationData["13:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["13:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["13:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["13:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["13:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["14:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["14:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:6"] = {id : 19,coords : [3,4],walkin : true,overlayer: null};locationData["14:7"] = {id : 24,coords : [3,5],walkin : true,overlayer: null};locationData["14:8"] = {id : 29,coords : [3,6],walkin : true,overlayer: null};locationData["14:9"] = {id : 34,coords : [3,7],walkin : true,overlayer: null};locationData["14:10"] = {id : 39,coords : [3,8],walkin : true,overlayer: null};locationData["14:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["15:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["15:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["15:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["15:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["15:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["15:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["15:6"] = {id : 20,coords : [4,4],walkin : true,overlayer: null};locationData["15:7"] = {id : 25,coords : [4,5],walkin : true,overlayer: null};locationData["15:8"] = {id : 30,coords : [4,6],walkin : true,overlayer: null};locationData["15:9"] = {id : 35,coords : [4,7],walkin : true,overlayer: null};locationData["15:10"] = {id : 40,coords : [4,8],walkin : true,overlayer: null};locationData["15:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["15:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["15:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["15:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["15:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["16:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["16:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["16:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["16:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["16:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["16:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["16:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["16:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["16:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["16:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["16:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["16:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["16:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["16:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["16:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["16:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["17:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["17:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["17:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["17:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["17:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["17:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["17:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["17:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["17:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["17:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["17:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["17:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["17:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["17:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["17:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["17:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["18:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["18:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["18:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["18:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["18:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["18:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["18:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["18:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["18:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["18:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["18:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["18:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["18:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["18:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["18:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["18:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["19:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["19:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["19:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["19:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["19:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["19:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["19:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["19:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["19:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["19:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["19:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["19:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["19:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["19:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["19:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["19:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["20:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["20:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["20:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["20:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["20:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["20:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["20:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["20:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["20:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["20:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["20:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["20:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["20:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["20:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["20:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["20:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["21:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["21:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["21:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["21:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["21:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["21:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["21:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["21:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["21:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["21:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["21:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["21:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["21:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["21:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["21:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["21:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["22:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["22:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["22:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["22:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["22:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["22:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["22:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["22:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["22:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["22:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["22:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["22:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["22:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["22:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["22:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["22:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["23:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["23:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["23:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["23:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["23:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["23:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["23:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["23:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["23:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["23:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["23:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["23:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["23:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["23:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["23:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["23:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["24:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["24:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["24:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["24:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["24:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["24:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["24:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["24:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["24:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["24:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["24:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["24:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["24:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["24:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["24:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["24:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["25:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["25:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["25:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["25:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["25:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["25:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["25:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["25:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["25:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["25:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["25:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["25:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["25:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["25:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["25:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};locationData["25:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,3],walkin : false}};
        loadTilsets();
        return [locationSize,locationData,locatonPlayer, locationTilsetUrl, locationTilsetData];
    }
    
    function loadTilsets(){
         
            locationTilsetData = [
            {
                id : 0,
                tag : 'blank',
                coords : [0,1],
                walkin : false,
                events : null, animation : null
            },

            {
                id : 1,
                tag : 'empty_water_tilset',
                coords : [1,1],
                walkin : false,
                events : null,
                animation : null
            },

            {
                id : 2,
                tag : 'water',
                coords : [2,1],
                walkin : false,
                events : null,
                animation : [
                    [2,1],[3,1], [4,1], [5,1]
                ],
                animationSpeed : 2000
            },
       
        
        
// water ground tilsets


            
            {
                id : 3,
                tag : 'water_ground_tilset',
                coords : [6,1],
                walkin : false,
                events : null,
                animation : null
            },
        
            
            {
                id : 4,
                tag : 'water_ground_tilset',
                coords : [7,1],
                walkin : false,
                events : null,
                animation : null
            },

            
            {
                id : 5,
                tag : 'water_ground_tilset',
                coords : [8,1],
                walkin : false,
                events : null,
                animation : null
            },

            
            {
                id : 6,
                tag : 'water_ground_tilset',
                coords : [9,1],
                walkin : false,
                events : null,
                animation : null
            },

            
            {
                id : 7,
                tag : 'water_ground_tilset',
                coords : [10,1],
                walkin : false,
                events : null,
                animation : null
            },

            
            {
                id : 8,
                tag : 'water_ground_tilset',
                coords : [11,1],
                walkin : false,
                events : null,
                animation : null
            },

            
            {
                id : 9,
                tag : 'water_ground_tilset',
                coords : [12,1],
                walkin : false,
                events : null,
                animation : null
            },

            
            {
                id : 10,
                tag : 'water_ground_tilset',
                coords : [13,1],
                walkin : false,
                events : null,
                animation : null
            },

            
            {
                id : 11,
                tag : 'water_ground_tilset',
                coords : [14,1],
                walkin : true,
                events : null,
                animation : null
            },
        
            
            {
                id : 12,
                tag : 'water_ground_tilset',
                coords : [15,1],
                walkin : true,
                events : null,
                animation : null
            },
        
            {
                id : 13,
                tag : 'water_ground_tilset',
                coords : [15,2],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 14,
                tag : 'water_ground_tilset',
                coords : [14,2],
                walkin : true,
                events : null,
                animation : null
            },
        

/* swamp tilsets */

            {
                id : 15,
                tag : 'water_ground_tilset',
                coords : [0,3],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 16,
                tag : 'water_ground_tilset',
                coords : [0,4],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 17,
                tag : 'fance',
                coords : [1,4],
                walkin : true,
                events : null,
                animation : null
            },
             {
                id : 18,
                tag : 'fance',
                coords : [2,4],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 19,
                tag : 'fance',
                coords : [3,4],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 20,
                tag : 'fance',
                coords : [4,4],
                walkin : true,
                events : null,
                animation : null
            },





            {
                id : 21,
                tag : 'water_ground_tilset',
                coords : [0,5],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 22,
                tag : 'fance',
                coords : [1,5],
                walkin : true,
                events : null,
                animation : null
            },
             {
                id : 23,
                tag : 'fance',
                coords : [2,5],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 24,
                tag : 'fance',
                coords : [3,5],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 25,
                tag : 'fance',
                coords : [4,5],
                walkin : true,
                events : null,
                animation : null
            },
            
            
            

            {
                id : 26,
                tag : 'water_ground_tilset',
                coords : [0,6],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 27,
                tag : 'fance',
                coords : [1,6],
                walkin : true,
                events : null,
                animation : null
            },
             {
                id : 28,
                tag : 'fance',
                coords : [2,6],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 29,
                tag : 'fance',
                coords : [3,6],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 30,
                tag : 'fance',
                coords : [4,6],
                walkin : true,
                events : null,
                animation : null
            },
            
            
            
            
            

            {
                id : 31,
                tag : 'water_ground_tilset',
                coords : [0,7],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 32,
                tag : 'fance',
                coords : [1,7],
                walkin : true,
                events : null,
                animation : null
            },
             {
                id : 33,
                tag : 'fance',
                coords : [2,7],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 34,
                tag : 'fance',
                coords : [3,7],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 35,
                tag : 'fance',
                coords : [4,7],
                walkin : true,
                events : null,
                animation : null
            },






            {
                id : 36,
                tag : 'water_ground_tilset',
                coords : [0,8],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 37,
                tag : 'fance',
                coords : [1,8],
                walkin : true,
                events : null,
                animation : null
            },
             {
                id : 38,
                tag : 'fance',
                coords : [2,8],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 39,
                tag : 'fance',
                coords : [3,8],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 40,
                tag : 'fance',
                coords : [4,8],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 41,
                tag : 'fance',
                coords : [1,3],
                walkin : false,
                events : null,
                animation : null
            },
/* game editor - selection tilset */
            {
                id : 90,
                tag : 'selector',
                coords : [0,2],
                walkin : true,
                events : null, animation : null
            },
            
            
            


        ];

    }
    
    return{
        run : run,
        getLocation : getLocation
    }
    
})();

