pokemon.locations['01_pallet_town'] = (function(){
    
    var locationData = {};
    var locationSize = [15,15]; // x y
    var locatonPlayer = [6,5]; // player starting location
    var locationTilsetUrl = 'marsh';
    var locationTilsetData = {};
    
    function run(){
        locationSize = [(locationSize[0]+1), (locationSize[1]+1)];
    }
    
    function getLocation(){
        
//locationData["0:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:1"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["1:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:4"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["1:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:6"] = {id : 30,coords : [8,4],walkin : true,overlayer: null};locationData["1:7"] = {id : 33,coords : [11,4],walkin : true,overlayer: null};locationData["1:8"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["1:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["1:10"] = {id : 27,coords : [12,3],walkin : true,overlayer: null};locationData["1:11"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["1:12"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["1:13"] = {id : 26,coords : [11,3],walkin : true,overlayer: {id : 38,coords : [0,4],walkin : false}};locationData["1:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 40,coords : [0,5],walkin : false}};locationData["1:15"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["2:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:1"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["2:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:4"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["2:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:6"] = {id : 36,coords : [14,4],walkin : true,overlayer: null};locationData["2:7"] = {id : 28,coords : [13,3],walkin : true,overlayer: null};locationData["2:8"] = {id : 33,coords : [11,4],walkin : true,overlayer: null};locationData["2:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["2:10"] = {id : 27,coords : [12,3],walkin : true,overlayer: null};locationData["2:11"] = {id : 26,coords : [11,3],walkin : true,overlayer: {id : 38,coords : [0,4],walkin : false}};locationData["2:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 40,coords : [0,5],walkin : false}};locationData["2:13"] = {id : 26,coords : [11,3],walkin : true,overlayer: {id : 39,coords : [1,4],walkin : false}};locationData["2:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,5],walkin : false}};locationData["2:15"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["3:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:1"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["3:2"] = {id : 67,coords : [0,8],walkin : false,overlayer: null};locationData["3:3"] = {id : 60,coords : [0,9],walkin : false,overlayer: null};locationData["3:4"] = {id : 53,coords : [0,10],walkin : false,overlayer: null};locationData["3:5"] = {id : 46,coords : [0,11],walkin : false,overlayer: null};locationData["3:6"] = {id : 36,coords : [14,4],walkin : true,overlayer: {id : 42,coords : [2,4],walkin : false}};locationData["3:7"] = {id : 28,coords : [13,3],walkin : true,overlayer: {id : 44,coords : [2,5],walkin : false}};locationData["3:8"] = {id : 37,coords : [15,4],walkin : true,overlayer: null};locationData["3:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["3:10"] = {id : 27,coords : [12,3],walkin : true,overlayer: null};locationData["3:11"] = {id : 26,coords : [11,3],walkin : true,overlayer: {id : 39,coords : [1,4],walkin : false}};locationData["3:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,5],walkin : false}};locationData["3:13"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["3:14"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["3:15"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["4:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:1"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["4:2"] = {id : 68,coords : [1,8],walkin : false,overlayer: null};locationData["4:3"] = {id : 61,coords : [1,9],walkin : false,overlayer: null};locationData["4:4"] = {id : 54,coords : [1,10],walkin : false,overlayer: null};locationData["4:5"] = {id : 47,coords : [1,11],walkin : false,overlayer: null};locationData["4:6"] = {id : 31,coords : [9,4],walkin : true,overlayer: {id : 43,coords : [3,4],walkin : false}};locationData["4:7"] = {id : 28,coords : [13,3],walkin : true,overlayer: {id : 45,coords : [3,5],walkin : false}};locationData["4:8"] = {id : 37,coords : [15,4],walkin : true,overlayer: null};locationData["4:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["4:10"] = {id : 27,coords : [12,3],walkin : true,overlayer: null};locationData["4:11"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["4:12"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["4:13"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["4:14"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["4:15"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["5:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:1"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["5:2"] = {id : 69,coords : [2,8],walkin : false,overlayer: null};locationData["5:3"] = {id : 62,coords : [2,9],walkin : false,overlayer: null};locationData["5:4"] = {id : 56,coords : [3,10],walkin : false,overlayer: null};locationData["5:5"] = {id : 49,coords : [3,11],walkin : false,overlayer: null};locationData["5:6"] = {id : 25,coords : [10,3],walkin : true,overlayer: null};locationData["5:7"] = {id : 31,coords : [9,4],walkin : true,overlayer: null};locationData["5:8"] = {id : 32,coords : [10,4],walkin : true,overlayer: null};locationData["5:9"] = {id : 19,coords : [4,3],walkin : false,overlayer: null};locationData["5:10"] = {id : 21,coords : [6,3],walkin : false,overlayer: null};locationData["5:11"] = {id : 21,coords : [6,3],walkin : false,overlayer: null};locationData["5:12"] = {id : 21,coords : [6,3],walkin : false,overlayer: null};locationData["5:13"] = {id : 21,coords : [6,3],walkin : false,overlayer: null};locationData["5:14"] = {id : 21,coords : [6,3],walkin : false,overlayer: null};locationData["5:15"] = {id : 21,coords : [6,3],walkin : false,overlayer: null};locationData["6:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:1"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["6:2"] = {id : 71,coords : [4,8],walkin : false,overlayer: null};locationData["6:3"] = {id : 64,coords : [4,9],walkin : true,overlayer: null};locationData["6:4"] = {id : 57,coords : [4,10],walkin : false,overlayer: null};
//locationData["6:5"] = {id : 50,coords : [4,11],walkin : true,transitionWorld : '00_pallet_home_indoor', transitionCoords: [5,7],overlayer: null};locationData["6:6"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:7"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:8"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:9"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:10"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:11"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:12"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:13"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:14"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:15"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["7:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:1"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["7:2"] = {id : 72,coords : [5,8],walkin : false,overlayer: null};locationData["7:3"] = {id : 65,coords : [5,9],walkin : false,overlayer: null};locationData["7:4"] = {id : 58,coords : [5,10],walkin : false,overlayer: null};locationData["7:5"] = {id : 51,coords : [5,11],walkin : false,overlayer: null};locationData["7:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:9"] = {id : 18,coords : [3,3],walkin : false,overlayer: null};locationData["7:10"] = {id : 20,coords : [5,3],walkin : false,overlayer: null};locationData["7:11"] = {id : 23,coords : [8,3],walkin : true,overlayer: null};locationData["7:12"] = {id : 20,coords : [5,3],walkin : false,overlayer: null};locationData["7:13"] = {id : 20,coords : [5,3],walkin : false,overlayer: null};locationData["7:14"] = {id : 20,coords : [5,3],walkin : false,overlayer: null};locationData["7:15"] = {id : 20,coords : [5,3],walkin : false,overlayer: null};locationData["8:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:1"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["8:2"] = {id : 73,coords : [6,8],walkin : false,overlayer: null};locationData["8:3"] = {id : 66,coords : [6,9],walkin : false,overlayer: null};locationData["8:4"] = {id : 59,coords : [6,10],walkin : false,overlayer: null};locationData["8:5"] = {id : 52,coords : [6,11],walkin : false,overlayer: null};locationData["8:6"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["8:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["8:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:11"] = {id : 23,coords : [8,3],walkin : true,overlayer: null};locationData["8:12"] = {id : 24,coords : [9,3], fight:50,walkin : true,overlayer: null};locationData["8:13"] = {id : 24,coords : [9,3],walkin : true,overlayer: null};locationData["8:14"] = {id : 24,coords : [9,3],walkin : true,overlayer: null};locationData["8:15"] = {id : 24,coords : [9,3],walkin : true,overlayer: null};locationData["9:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:1"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["9:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 42,coords : [2,4],walkin : false}};locationData["9:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 44,coords : [2,5],walkin : false}};locationData["9:6"] = {id : 30,coords : [8,4],walkin : true,overlayer: null};locationData["9:7"] = {id : 33,coords : [11,4],walkin : true,overlayer: null};locationData["9:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["9:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:11"] = {id : 23,coords : [8,3],walkin : true,overlayer: null};locationData["9:12"] = {id : 24,coords : [9,3],walkin : true,overlayer: null};locationData["9:13"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 7,coords : [10,1],walkin : false}};locationData["9:14"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["9:15"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["10:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:1"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["10:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 38,coords : [0,4],walkin : false}};locationData["10:3"] = {id : 30,coords : [8,4],walkin : true,overlayer: {id : 40,coords : [0,5],walkin : false}};locationData["10:4"] = {id : 34,coords : [12,4],walkin : true,overlayer: {id : 43,coords : [3,4],walkin : false}};locationData["10:5"] = {id : 34,coords : [12,4],walkin : true,overlayer: {id : 45,coords : [3,5],walkin : false}};locationData["10:6"] = {id : 28,coords : [13,3],walkin : true,overlayer: null};locationData["10:7"] = {id : 37,coords : [15,4],walkin : true,overlayer: null};locationData["10:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["10:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:11"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 7,coords : [10,1],walkin : false}};locationData["10:12"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["10:13"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["10:14"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["10:15"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["11:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["11:1"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["11:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 39,coords : [1,4],walkin : false}};locationData["11:3"] = {id : 36,coords : [14,4],walkin : true,overlayer: {id : 41,coords : [1,5],walkin : false}};locationData["11:4"] = {id : 28,coords : [13,3],walkin : true,overlayer: null};locationData["11:5"] = {id : 28,coords : [13,3],walkin : true,overlayer: null};locationData["11:6"] = {id : 28,coords : [13,3],walkin : true,overlayer: {id : 38,coords : [0,4],walkin : false}};locationData["11:7"] = {id : 28,coords : [13,3],walkin : true,overlayer: {id : 40,coords : [0,5],walkin : false}};locationData["11:8"] = {id : 33,coords : [11,4],walkin : true,overlayer: null};locationData["11:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["11:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["11:11"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["11:12"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["11:13"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["11:14"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["11:15"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["12:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:1"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["12:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:3"] = {id : 31,coords : [9,4],walkin : true,overlayer: {id : 42,coords : [2,4],walkin : false}};locationData["12:4"] = {id : 28,coords : [13,3],walkin : true,overlayer: {id : 44,coords : [2,5],walkin : false}};locationData["12:5"] = {id : 28,coords : [13,3],walkin : true,overlayer: null};locationData["12:6"] = {id : 28,coords : [13,3],walkin : true,overlayer: {id : 39,coords : [1,4],walkin : false}};locationData["12:7"] = {id : 29,coords : [7,4],walkin : true,overlayer: {id : 41,coords : [1,5],walkin : false}};locationData["12:8"] = {id : 37,coords : [15,4],walkin : true,overlayer: null};locationData["12:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["12:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:11"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["12:12"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["12:13"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["12:14"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["12:15"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["13:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["13:1"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["13:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["13:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 43,coords : [3,4],walkin : false}};locationData["13:4"] = {id : 31,coords : [9,4],walkin : true,overlayer: {id : 45,coords : [3,5],walkin : false}};locationData["13:5"] = {id : 35,coords : [13,4],walkin : true,overlayer: null};locationData["13:6"] = {id : 35,coords : [13,4],walkin : true,overlayer: null};locationData["13:7"] = {id : 28,coords : [13,3],walkin : true,overlayer: {id : 42,coords : [2,4],walkin : false}};locationData["13:8"] = {id : 37,coords : [15,4],walkin : true,overlayer: {id : 44,coords : [2,5],walkin : false}};locationData["13:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["13:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["13:11"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["13:12"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["13:13"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["13:14"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["13:15"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["14:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:1"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["14:2"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["14:3"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 10,coords : [13,1],walkin : false}};locationData["14:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:6"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["14:7"] = {id : 31,coords : [9,4],walkin : true,overlayer: {id : 43,coords : [3,4],walkin : false}};locationData["14:8"] = {id : 32,coords : [10,4],walkin : true,overlayer: {id : 45,coords : [3,5],walkin : false}};locationData["14:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["14:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:11"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["14:12"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["14:13"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["14:14"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["14:15"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["15:1"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:2"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:3"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:4"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["15:5"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["15:6"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["15:7"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["15:8"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["15:9"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["15:10"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["15:11"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:12"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:13"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:14"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:15"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};
locationData["0:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:9"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:11"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:13"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:15"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:4"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["1:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:6"] = {id : 30,coords : [8,4],walkin : true,overlayer: null};locationData["1:7"] = {id : 33,coords : [11,4],walkin : true,overlayer: null};locationData["1:8"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["1:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["1:10"] = {id : 27,coords : [12,3],walkin : true,overlayer: null};locationData["1:11"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["1:12"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["1:13"] = {id : 26,coords : [11,3],walkin : true,overlayer: {id : 38,coords : [0,4],walkin : false}};locationData["1:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 40,coords : [0,5],walkin : false}};locationData["1:15"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["2:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["2:4"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["2:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:6"] = {id : 36,coords : [14,4],walkin : true,overlayer: null};locationData["2:7"] = {id : 28,coords : [13,3],walkin : true,overlayer: null};locationData["2:8"] = {id : 33,coords : [11,4],walkin : true,overlayer: null};locationData["2:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["2:10"] = {id : 27,coords : [12,3],walkin : true,overlayer: null};locationData["2:11"] = {id : 26,coords : [11,3],walkin : true,overlayer: {id : 38,coords : [0,4],walkin : false}};locationData["2:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 40,coords : [0,5],walkin : false}};locationData["2:13"] = {id : 26,coords : [11,3],walkin : true,overlayer: {id : 39,coords : [1,4],walkin : false}};locationData["2:14"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,5],walkin : false}};locationData["2:15"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["3:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:2"] = {id : 67,coords : [0,8],walkin : false,overlayer: null};locationData["3:3"] = {id : 60,coords : [0,9],walkin : false,overlayer: null};locationData["3:4"] = {id : 53,coords : [0,10],walkin : false,overlayer: null};locationData["3:5"] = {id : 46,coords : [0,11],walkin : false,overlayer: null};locationData["3:6"] = {id : 36,coords : [14,4],walkin : true,overlayer: {id : 42,coords : [2,4],walkin : false}};locationData["3:7"] = {id : 28,coords : [13,3],walkin : true,overlayer: {id : 44,coords : [2,5],walkin : false}};locationData["3:8"] = {id : 37,coords : [15,4],walkin : true,overlayer: null};locationData["3:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["3:10"] = {id : 27,coords : [12,3],walkin : true,overlayer: null};locationData["3:11"] = {id : 26,coords : [11,3],walkin : true,overlayer: {id : 39,coords : [1,4],walkin : false}};locationData["3:12"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [1,5],walkin : false}};locationData["3:13"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["3:14"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["3:15"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["4:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:2"] = {id : 68,coords : [1,8],walkin : false,overlayer: null};locationData["4:3"] = {id : 61,coords : [1,9],walkin : false,overlayer: null};locationData["4:4"] = {id : 54,coords : [1,10],walkin : false,overlayer: null};locationData["4:5"] = {id : 47,coords : [1,11],walkin : false,overlayer: null};locationData["4:6"] = {id : 31,coords : [9,4],walkin : true,overlayer: {id : 43,coords : [3,4],walkin : false}};locationData["4:7"] = {id : 28,coords : [13,3],walkin : true,overlayer: {id : 45,coords : [3,5],walkin : false}};locationData["4:8"] = {id : 37,coords : [15,4],walkin : true,overlayer: null};locationData["4:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["4:10"] = {id : 27,coords : [12,3],walkin : true,overlayer: null};locationData["4:11"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["4:12"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["4:13"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["4:14"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["4:15"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["5:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:2"] = {id : 69,coords : [2,8],walkin : false,overlayer: null};locationData["5:3"] = {id : 62,coords : [2,9],walkin : false,overlayer: null};locationData["5:4"] = {id : 56,coords : [3,10],walkin : false,overlayer: null};locationData["5:5"] = {id : 49,coords : [3,11],walkin : false,overlayer: null};locationData["5:6"] = {id : 25,coords : [10,3],walkin : true,overlayer: null};locationData["5:7"] = {id : 31,coords : [9,4],walkin : true,overlayer: null};locationData["5:8"] = {id : 32,coords : [10,4],walkin : true,overlayer: null};locationData["5:9"] = {id : 19,coords : [4,3],walkin : false,overlayer: null};locationData["5:10"] = {id : 21,coords : [6,3],walkin : false,overlayer: null};locationData["5:11"] = {id : 21,coords : [6,3],walkin : false,overlayer: null};locationData["5:12"] = {id : 21,coords : [6,3],walkin : false,overlayer: null};locationData["5:13"] = {id : 21,coords : [6,3],walkin : false,overlayer: null};locationData["5:14"] = {id : 21,coords : [6,3],walkin : false,overlayer: null};locationData["5:15"] = {id : 21,coords : [6,3],walkin : false,overlayer: null};locationData["6:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:2"] = {id : 71,coords : [4,8],walkin : false,overlayer: null};locationData["6:3"] = {id : 64,coords : [4,9],walkin : true,overlayer: null};locationData["6:4"] = {id : 57,coords : [4,10],walkin : false,overlayer: null};
locationData["6:5"] = {id : 50,coords : [4,11],walkin : true,transitionWorld : '00_pallet_home_indoor', transitionCoords: [5,7],overlayer: null};locationData["6:6"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:7"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:8"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:9"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:10"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:11"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:12"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:13"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:14"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["6:15"] = {id : 22,coords : [7,3],walkin : true,overlayer: null};locationData["7:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:2"] = {id : 72,coords : [5,8],walkin : false,overlayer: null};locationData["7:3"] = {id : 65,coords : [5,9],walkin : false,overlayer: null};locationData["7:4"] = {id : 58,coords : [5,10],walkin : false,overlayer: null};locationData["7:5"] = {id : 51,coords : [5,11],walkin : false,overlayer: null};locationData["7:6"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["7:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 91,coords : [0,6],walkin : false}};locationData["7:9"] = {id : 18,coords : [3,3],walkin : false,overlayer: null};locationData["7:10"] = {id : 20,coords : [5,3],walkin : false,overlayer: null};locationData["7:11"] = {id : 23,coords : [8,3],walkin : true,overlayer: null};locationData["7:12"] = {id : 20,coords : [5,3],walkin : false,overlayer: null};locationData["7:13"] = {id : 20,coords : [5,3],walkin : false,overlayer: null};locationData["7:14"] = {id : 20,coords : [5,3],walkin : false,overlayer: null};locationData["7:15"] = {id : 20,coords : [5,3],walkin : false,overlayer: null};locationData["8:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:2"] = {id : 73,coords : [6,8],walkin : false,overlayer: null};locationData["8:3"] = {id : 66,coords : [6,9],walkin : false,overlayer: null};locationData["8:4"] = {id : 59,coords : [6,10],walkin : false,overlayer: null};locationData["8:5"] = {id : 52,coords : [6,11],walkin : false,overlayer: null};locationData["8:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 92,coords : [1,6],walkin : false}};locationData["8:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["8:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:11"] = {id : 23,coords : [8,3],walkin : true,overlayer: null};locationData["8:12"] = {id : 24,coords : [9,3], fight:50,walkin : true,overlayer: null};locationData["8:13"] = {id : 24,coords : [9,3],fight:50,walkin : true,overlayer: null};locationData["8:14"] = {id : 24,coords : [9,3],fight:50,walkin : true,overlayer: null};locationData["8:15"] = {id : 24,coords : [9,3],fight:50,walkin : true,overlayer: null};locationData["9:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 42,coords : [2,4],walkin : false}};locationData["9:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 44,coords : [2,5],walkin : false}};locationData["9:6"] = {id : 30,coords : [8,4],walkin : true,overlayer: null};locationData["9:7"] = {id : 33,coords : [11,4],walkin : true,overlayer: null};locationData["9:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["9:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:11"] = {id : 23,coords : [8,3],walkin : true,overlayer: null};locationData["9:12"] = {id : 24,coords : [9,3],fight:50,walkin : true,overlayer: null};locationData["9:13"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 7,coords : [10,1],walkin : false}};locationData["9:14"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["9:15"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["10:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 38,coords : [0,4],walkin : false}};locationData["10:3"] = {id : 30,coords : [8,4],walkin : true,overlayer: {id : 40,coords : [0,5],walkin : false}};locationData["10:4"] = {id : 34,coords : [12,4],walkin : true,overlayer: {id : 43,coords : [3,4],walkin : false}};locationData["10:5"] = {id : 34,coords : [12,4],walkin : true,overlayer: {id : 45,coords : [3,5],walkin : false}};locationData["10:6"] = {id : 28,coords : [13,3],walkin : true,overlayer: null};locationData["10:7"] = {id : 37,coords : [15,4],walkin : true,overlayer: null};locationData["10:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["10:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:11"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 7,coords : [10,1],walkin : false}};locationData["10:12"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["10:13"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["10:14"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["10:15"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["11:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["11:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["11:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 39,coords : [1,4],walkin : false}};locationData["11:3"] = {id : 36,coords : [14,4],walkin : true,overlayer: {id : 41,coords : [1,5],walkin : false}};locationData["11:4"] = {id : 28,coords : [13,3],walkin : true,overlayer: null};locationData["11:5"] = {id : 28,coords : [13,3],walkin : true,overlayer: null};locationData["11:6"] = {id : 28,coords : [13,3],walkin : true,overlayer: {id : 38,coords : [0,4],walkin : false}};locationData["11:7"] = {id : 28,coords : [13,3],walkin : true,overlayer: {id : 40,coords : [0,5],walkin : false}};locationData["11:8"] = {id : 33,coords : [11,4],walkin : true,overlayer: null};locationData["11:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["11:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["11:11"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["11:12"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["11:13"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["11:14"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["11:15"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["12:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:3"] = {id : 31,coords : [9,4],walkin : true,overlayer: {id : 42,coords : [2,4],walkin : false}};locationData["12:4"] = {id : 28,coords : [13,3],walkin : true,overlayer: {id : 44,coords : [2,5],walkin : false}};locationData["12:5"] = {id : 28,coords : [13,3],walkin : true,overlayer: null};locationData["12:6"] = {id : 28,coords : [13,3],walkin : true,overlayer: {id : 39,coords : [1,4],walkin : false}};locationData["12:7"] = {id : 29,coords : [7,4],walkin : true,overlayer: {id : 41,coords : [1,5],walkin : false}};locationData["12:8"] = {id : 37,coords : [15,4],walkin : true,overlayer: null};locationData["12:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["12:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["12:11"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["12:12"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["12:13"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["12:14"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["12:15"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["13:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["13:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["13:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["13:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 43,coords : [3,4],walkin : false}};locationData["13:4"] = {id : 31,coords : [9,4],walkin : true,overlayer: {id : 45,coords : [3,5],walkin : false}};locationData["13:5"] = {id : 35,coords : [13,4],walkin : true,overlayer: null};locationData["13:6"] = {id : 35,coords : [13,4],walkin : true,overlayer: null};locationData["13:7"] = {id : 28,coords : [13,3],walkin : true,overlayer: {id : 42,coords : [2,4],walkin : false}};locationData["13:8"] = {id : 37,coords : [15,4],walkin : true,overlayer: {id : 44,coords : [2,5],walkin : false}};locationData["13:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["13:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["13:11"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["13:12"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["13:13"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["13:14"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["13:15"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["14:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:1"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["14:2"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["14:3"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 10,coords : [13,1],walkin : false}};locationData["14:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:6"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["14:7"] = {id : 31,coords : [9,4],walkin : true,overlayer: {id : 43,coords : [3,4],walkin : false}};locationData["14:8"] = {id : 32,coords : [10,4],walkin : true,overlayer: {id : 45,coords : [3,5],walkin : false}};locationData["14:9"] = {id : 17,coords : [2,3],walkin : false,overlayer: null};locationData["14:10"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["14:11"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["14:12"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["14:13"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["14:14"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["14:15"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["15:1"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:2"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:3"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:4"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["15:5"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["15:6"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["15:7"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["15:8"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["15:9"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["15:10"] = {id : 2,coords : [2,1],walkin : false,overlayer: {id : 3,coords : [6,1],walkin : false}};locationData["15:11"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:12"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:13"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:14"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};locationData["15:15"] = {id : 2,coords : [2,1],walkin : false,overlayer: null};

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
                coords : [1,3],
                walkin : true,
                events : null,
                animation : [
                    [1,3],[5,4],[6,4]
                ],
                animationSpeed : 2000
            },
            {
                id : 17,
                tag : 'fance',
                coords : [2,3],
                walkin : false,
                events : null,
                animation : null
            },
             {
                id : 18,
                tag : 'fance',
                coords : [3,3],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 19,
                tag : 'fance',
                coords : [4,3],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 20,
                tag : 'fance',
                coords : [5,3],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 21,
                tag : 'fance',
                coords : [6,3],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 22,
                tag : 'water_ground_tilset',
                coords : [7,3],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 23,
                tag : 'water_ground_tilset',
                coords : [8,3],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 24,
                tag : 'water_ground_tilset',
                coords : [9,3],
                walkin : true,
                events : null,
                animation : null,
                fight : 50
            },
            {
                id : 25,
                tag : 'water_ground_tilset',
                coords : [10,3],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 26,
                tag : 'water_ground_tilset',
                coords : [11,3],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 27,
                tag : 'water_ground_tilset',
                coords : [12,3],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 28,
                tag : 'water_ground_tilset',
                coords : [13,3],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 29,
                tag : 'water_ground_tilset',
                coords : [7,4],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 30,
                tag : 'water_ground_tilset',
                coords : [8,4],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 31,
                tag : 'water_ground_tilset',
                coords : [9,4],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 32,
                tag : 'water_ground_tilset',
                coords : [10,4],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 33,
                tag : 'water_ground_tilset',
                coords : [11,4],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 34,
                tag : 'water_ground_tilset',
                coords : [12,4],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 35,
                tag : 'water_ground_tilset',
                coords : [13,4],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 36,
                tag : 'water_ground_tilset',
                coords : [14,4],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 37,
                tag : 'water_ground_tilset',
                coords : [15,4],
                walkin : true,
                events : null,
                animation : null
            },
            
            
/* trees tilsets */

            {
                id : 38,
                tag : 'water_ground_tilset',
                coords : [0,4],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 39,
                tag : 'water_ground_tilset',
                coords : [1,4],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 40,
                tag : 'water_ground_tilset',
                coords : [0,5],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 41,
                tag : 'water_ground_tilset',
                coords : [1,5],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 42,
                tag : 'water_ground_tilset',
                coords : [2,4],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 43,
                tag : 'water_ground_tilset',
                coords : [3,4],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 44,
                tag : 'water_ground_tilset',
                coords : [2,5],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 45,
                tag : 'water_ground_tilset',
                coords : [3,5],
                walkin : false,
                events : null,
                animation : null
            },

/* houses tilsets */
        
        
            {
                id : 46,
                tag : 'a_house_1',
                coords : [0,11],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 47,
                tag : 'a_house_1',
                coords : [1,11],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 48,
                tag : 'a_house_1',
                coords : [2,11],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 49,
                tag : 'a_house_1',
                coords : [3,11],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 50,
                tag : 'a_house_1',
                coords : [4,11],
                walkin : true,
                events : null, animation : null
            },
            {
                id : 51,
                tag : 'a_house_1',
                coords : [5,11],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 52,
                tag : 'a_house_1',
                coords : [6,11],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 53,
                tag : 'a_house_1',
                coords : [0,10],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 54,
                tag : 'a_house_1',
                coords : [1,10],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 55,
                tag : 'a_house_1',
                coords : [2,10],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 56,
                tag : 'a_house_1',
                coords : [3,10],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 57,
                tag : 'a_house_1',
                coords : [4,10],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 58,
                tag : 'a_house_1',
                coords : [5,10],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 59,
                tag : 'a_house_1',
                coords : [6,10],
                walkin : false,
                events : null, animation : null
            },
            
            
            
            {
                id : 60,
                tag : 'a_house_1',
                coords : [0,9],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 61,
                tag : 'a_house_1',
                coords : [1,9],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 62,
                tag : 'a_house_1',
                coords : [2,9],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 63,
                tag : 'a_house_1',
                coords : [3,9],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 64,
                tag : 'a_house_1',
                coords : [4,9],
                walkin : true,
                events : null, animation : null
            },
            {
                id : 65,
                tag : 'a_house_1',
                coords : [5,9],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 66,
                tag : 'a_house_1',
                coords : [6,9],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 67,
                tag : 'a_house_1',
                coords : [0,8],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 68,
                tag : 'a_house_1',
                coords : [1,8],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 69,
                tag : 'a_house_1',
                coords : [2,8],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 70,
                tag : 'a_house_1',
                coords : [3,8],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 71,
                tag : 'a_house_1',
                coords : [4,8],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 72,
                tag : 'a_house_1',
                coords : [5,8],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 73,
                tag : 'a_house_1',
                coords : [6,8],
                walkin : false,
                events : null, animation : null
            },






            /* house nbr 2 */
            
            
            
            
            
            {
                id : 74,
                tag : 'a_house_1',
                coords : [7,11],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 75,
                tag : 'a_house_1',
                coords : [8,11],
                walkin : true,
                events : null, animation : null
            },
            {
                id : 76,
                tag : 'a_house_1',
                coords : [9,11],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 77,
                tag : 'a_house_1',
                coords : [10,11],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 78,
                tag : 'a_house_1',
                coords : [7,10],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 79,
                tag : 'a_house_1',
                coords : [8,10],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 80,
                tag : 'a_house_1',
                coords : [9,10],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 81,
                tag : 'a_house_1',
                coords : [10,10],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 82,
                tag : 'a_house_1',
                coords : [7,9],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 83,
                tag : 'a_house_1',
                coords : [8,9],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 84,
                tag : 'a_house_1',
                coords : [9,9],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 85,
                tag : 'a_house_1',
                coords : [10,9],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 86,
                tag : 'a_house_1',
                coords : [7,8],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 87,
                tag : 'a_house_1',
                coords : [8,8],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 88,
                tag : 'a_house_1',
                coords : [9,8],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 89,
                tag : 'a_house_1',
                coords : [10,8],
                walkin : false,
                events : null, animation : null
            },

/* game editor - selection tilset */
            {
                id : 90,
                tag : 'selector',
                coords : [0,2],
                walkin : true,
                events : null, animation : null
            },
            
            
            
/* bilboard */
            {
                id : 91,
                tag : 'selector',
                coords : [0,6],
                walkin : false,
                events : null, animation : [
                    [2,6], [4,6], [6,6], [8,6], [10,6], [12,6], [14,6], [0,7], [2,7], [4,7], [6,7]
                ],
                animationSpeed : null
            },
            {
                id : 92,
                tag : 'selector',
                coords : [1,6],
                walkin : false,
                events : null, animation : [
                    [3,6], [5,6], [7,6], [9,6], [11,6], [13,6], [15,6], [1,7], [3,7], [5,7], [7,7]
                ],
                animationSpeed : null
            },


        ];

    }
    
    return{
        run : run,
        getLocation : getLocation
    }
    
})();

