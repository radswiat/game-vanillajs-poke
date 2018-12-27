pokemon.tilsets = (function(){
    
    var tilsets = [];
    
    function run(){
        addTilset();
    }
    
    function addTilset(){
         
            tilsets = [
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
                ]
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
                animation : null
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


        ];

    }
    
    function getTilsets(){
        return tilsets;
    }
    
    return {
        run : run,
        getTilsets : getTilsets
    }
    
})();