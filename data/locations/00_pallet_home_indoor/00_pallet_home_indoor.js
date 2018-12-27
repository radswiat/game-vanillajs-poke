pokemon.locations['00_pallet_home_indoor'] = (function(){
    
    var locationData = {};
    var locationSize = [10,8]; // x y
    var locatonPlayer = [5,7]; // player starting location
    var locationTilsetUrl = 'indoor';
    var locationTilsetData = {};
    
    function run(){
        locationSize = [(locationSize[0]+1), (locationSize[1]+1)];
    }
    
    function getLocation(){
    

//locationData["0:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["1:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: null};locationData["1:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["2:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: null};locationData["2:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:4"] = {id : 29,coords : [14,3],walkin : false,overlayer: null};locationData["2:5"] = {id : 28,coords : [13,3],walkin : false,overlayer: null};locationData["2:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["3:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: null};locationData["3:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:1"] = {id : 25,coords : [10,3],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["4:2"] = {id : 24,coords : [9,3],walkin : false,overlayer: null};locationData["4:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["5:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: null};locationData["5:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};
//locationData["5:8"] = {id : 20,coords : [5,3],walkin : true,transitionWorld : '01_pallet_town', transitionCoords: [6,5],overlayer: null};locationData["6:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["6:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: null};locationData["6:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};
//locationData["6:8"] = {id : 21,coords : [6,3],walkin : true,transitionWorld : '01_pallet_town', transitionCoords: [6,5],overlayer: null};locationData["7:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:1"] = {id : 25,coords : [10,3],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["7:2"] = {id : 24,coords : [9,3],walkin : false,overlayer: null};locationData["7:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["8:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: null};locationData["8:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["9:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: null};locationData["9:3"] = {id : 27,coords : [12,3],walkin : false,overlayer: null};locationData["9:4"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["9:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: {id : 4,coords : [7,1],walkin : false}};locationData["10:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: null};locationData["10:3"] = {id : 27,coords : [12,3],walkin : false,overlayer: null};locationData["10:4"] = {id : 26,coords : [11,3],walkin : true,overlayer: null};locationData["10:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:6"] = {id : 30,coords : [15,3],walkin : false,overlayer: null};locationData["10:7"] = {id : 29,coords : [14,3],walkin : false,overlayer: null};locationData["10:8"] = {id : 28,coords : [13,3],walkin : false,overlayer: null};
   
locationData["0:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["1:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: {id : 36,coords : [6,4],walkin : false}};locationData["1:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: {id : 37,coords : [7,4],walkin : true}};locationData["1:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 29,coords : [14,3],walkin : false}};locationData["1:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 28,coords : [13,3],walkin : false}};locationData["2:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["2:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: {id : 38,coords : [8,4],walkin : false}};locationData["2:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: {id : 39,coords : [9,4],walkin : true}};locationData["2:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["3:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: null};locationData["3:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["3:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:1"] = {id : 25,coords : [10,3],walkin : false,overlayer: null};locationData["4:2"] = {id : 24,coords : [9,3],walkin : false,overlayer: null};locationData["4:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["4:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 42,coords : [11,5],walkin : true}};locationData["4:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [10,5],walkin : true}};locationData["4:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["5:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: {id : 33,coords : [2,4],walkin : false}};locationData["5:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: {id : 34,coords : [3,4],walkin : true}};locationData["5:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 44,coords : [10,4],walkin : false}};locationData["5:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 45,coords : [11,4],walkin : false}};locationData["5:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["6:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: {id : 40,coords : [9,5],walkin : false}};locationData["6:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["6:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 46,coords : [12,4],walkin : false}};locationData["6:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 47,coords : [13,4],walkin : false}};locationData["6:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};
locationData["6:8"] = {id : 15,coords : [0,3],walkin : true, transitionWorld : '01_pallet_town', transitionCoords: [6,5],overlayer: {id : 95,coords : [5,4],walkin : true}};locationData["7:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:1"] = {id : 25,coords : [10,3],walkin : false,overlayer: null};locationData["7:2"] = {id : 24,coords : [9,3],walkin : false,overlayer: null};locationData["7:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["7:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 41,coords : [10,5],walkin : true}};locationData["7:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 42,coords : [11,5],walkin : true}};locationData["7:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["8:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: null};locationData["8:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["8:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["9:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: {id : 27,coords : [12,3],walkin : false}};locationData["9:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: {id : 26,coords : [11,3],walkin : true}};locationData["9:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["10:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: {id : 27,coords : [12,3],walkin : false}};locationData["10:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: {id : 26,coords : [11,3],walkin : true}};locationData["10:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};
//locationData["0:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:1"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:2"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:3"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["0:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["1:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: {id : 96,coords : [6,4],walkin : false}};locationData["1:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: {id : 97,coords : [7,4],walkin : true}};locationData["1:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["1:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 29,coords : [14,3],walkin : false}};locationData["1:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 28,coords : [13,3],walkin : false}};locationData["1:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["2:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: {id : 98,coords : [8,4],walkin : false}};locationData["2:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: {id : 99,coords : [9,4],walkin : true}};locationData["2:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["2:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 30,coords : [15,3],walkin : false}};locationData["2:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["3:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: null};locationData["3:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["3:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["3:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:1"] = {id : 25,coords : [10,3],walkin : false,overlayer: null};locationData["4:2"] = {id : 24,coords : [9,3],walkin : false,overlayer: null};locationData["4:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["4:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["4:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["5:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: {id : 93,coords : [2,4],walkin : false}};locationData["5:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: {id : 94,coords : [3,4],walkin : true}};locationData["5:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["5:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["6:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: null};locationData["6:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["6:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["6:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};
//locationData["6:8"] = {id : 15,coords : [0,3],walkin : true,transitionWorld : '01_pallet_town', transitionCoords: [6,5],overlayer: {id : 95,coords : [5,4],walkin : true}};locationData["7:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:1"] = {id : 25,coords : [10,3],walkin : false,overlayer: null};locationData["7:2"] = {id : 24,coords : [9,3],walkin : false,overlayer: null};locationData["7:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["7:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["7:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["8:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: null};locationData["8:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: null};locationData["8:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["8:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["9:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: {id : 27,coords : [12,3],walkin : false}};locationData["9:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: {id : 26,coords : [11,3],walkin : true}};locationData["9:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["9:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:0"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:1"] = {id : 23,coords : [8,3],walkin : false,overlayer: null};locationData["10:2"] = {id : 22,coords : [7,3],walkin : false,overlayer: {id : 27,coords : [12,3],walkin : false}};locationData["10:3"] = {id : 16,coords : [1,3],walkin : true,overlayer: {id : 26,coords : [11,3],walkin : true}};locationData["10:4"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 30,coords : [15,3],walkin : false}};locationData["10:5"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 29,coords : [14,3],walkin : false}};locationData["10:6"] = {id : 15,coords : [0,3],walkin : true,overlayer: {id : 28,coords : [13,3],walkin : false}};locationData["10:7"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};locationData["10:8"] = {id : 15,coords : [0,3],walkin : true,overlayer: null};
   
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
                animation : null
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
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 20,
                tag : 'fance',
                coords : [5,3],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 21,
                tag : 'fance',
                coords : [6,3],
                walkin : true,
                events : null,
                animation : null
            },
            {
                id : 22,
                tag : 'water_ground_tilset',
                coords : [7,3],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 23,
                tag : 'water_ground_tilset',
                coords : [8,3],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 24,
                tag : 'water_ground_tilset',
                coords : [9,3],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 25,
                tag : 'water_ground_tilset',
                coords : [10,3],
                walkin : false,
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
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 28,
                tag : 'water_ground_tilset',
                coords : [13,3],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 29,
                tag : 'water_ground_tilset',
                coords : [14,3],
                walkin : false,
                events : null,
                animation : null
            },
            {
                id : 30,
                tag : 'water_ground_tilset',
                coords : [15,3],
                walkin : false,
                events : null,
                animation : null
            },



/* transparent objects */

            {
                id : 31,
                tag : 'selector',
                coords : [0,4],
                walkin : true,
                events : null, animation : null
            },
            {
                id : 32,
                tag : 'selector',
                coords : [1,4],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 33,
                tag : 'selector',
                coords : [2,4],
                walkin : false,
                events : null, 
                animation : [
                    [0,5], [1,5], [2,5],[3,5],[4,5], [5,5], [6,5], [7,5], [8,5], [8,5]
                ]
            },
            {
                id : 34,
                tag : 'selector',
                coords : [3,4],
                walkin : true,
                events : null, animation : null
            },
            {
                id : 35,
                tag : 'selector',
                coords : [5,4],
                walkin : true,
                events : null, animation : null
            },
            {
                id : 36,
                tag : 'selector',
                coords : [6,4],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 37,
                tag : 'selector',
                coords : [7,4],
                walkin : true,
                events : null, animation : null
            },
            {
                id : 38,
                tag : 'selector',
                coords : [8,4],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 39,
                tag : 'selector',
                coords : [9,4],
                walkin : true,
                events : null, animation : null
            },
            
            
            
            {
                id : 40,
                tag : 'clock',
                coords : [9,5],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 41,
                tag : 'pufa',
                coords : [10,5],
                walkin : true,
                events : null, animation : null
            },
            {
                id : 42,
                tag : 'pufa',
                coords : [11,5],
                walkin : true,
                events : null, animation : null
            },
            {
                id : 43,
                tag : 'cup',
                coords : [12,5],
                walkin : true,
                events : null, animation : null
            },
            {
                id : 44,
                tag : 'table',
                coords : [10,4],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 45,
                tag : 'table',
                coords : [11,4],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 46,
                tag : 'table',
                coords : [12,4],
                walkin : false,
                events : null, animation : null
            },
            {
                id : 47,
                tag : 'table',
                coords : [13,4],
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
        ];

    }
    
    return{
        run : run,
        getLocation : getLocation
    }
    
})();

