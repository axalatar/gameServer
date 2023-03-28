const items = require('../items')

module.exports = 
  {
    /*
    format: 
    {
      // id: (id),
      recipe: [[item, amount]],
    }
    */

    //cones:


    
    tungstenPackedCone: 
      {
        // id: 'tungC',
        recipe: [[items.tungsten, 20], [items.tungstenSheet, 5]]
      }, //very expensive

    quickCone:
      {
        // id: 'quickC',
        recipe: [[items.tungsten, 3], [items.plastic, 4], [items.sheetMetal, 5]]
      }, //expensive
    
    bluntCone:
      {
        // id: 'bluntC',
        recipe: [[items.tungsten, 8], [items.sheetMetal, 5]]
      }, //reasonably expensive
    
    plasticCone: 
      {
        // id: 'plastC',
        recipe: [[items.plastic, 8]]
      }, //cheap
    
    metalCone: 
      {
        // id: 'metalC',
        recipe: [[items.sheetMetal, 8]]
      }, //cheap
    

      
    //bodies: 

    

    reinforcedBody: 
      {
        // id: 'reinforB',
        recipe: [[items.sheetMetal, 8], [items.tungstenSheet, 4], [items.tungsten, 2]]
      }, //expensive
    
    lightBody: 
      {
        // id: 'lightB',
        recipe: [[items.plastic, 6], [items.tungstenSheet, 6]]
      }, //expensive

    giantBody: 
      {
        // id: 'giantB',
        recipe: [[items.sheetMetal, 15]]
      }, //somewhat cheap
    
    smallBody: 
      {
        // id: 'smallB',
        recipe: [[items.sheetMetal, 6]]
      }, //cheap


    
    //engines:


    
    efficientEngine: 
      {
        // id: 'efficientE',
        recipe: [[items.circuitBoard, 2], [items.tungstenSheet, 8], [items.plastic, 4]]
      }, //very expensive

    overchargeEngine: 
      {
        // id: 'overE',
        recipe: [[items.circuitBoard, 2], [items.tungstenSheet, 4], [items.sheetMetal, 5], [items.uraniumRod, 2]]
      }, //expensive
    
    armoredEngine: 
      {
        // id: 'armorE',
        recipe: [[items.tungstenSheet, 5], [items.tungsten, 6]]
      }, //somewhat cheap
    
    liquidEngine: 
      {
        // id: 'liquidE',
        recipe: [[items.plastic, 4], [items.sheetMetal, 5]]
      }, //cheap
    
    solidEngine: 
      {
        // id: 'solidE',
        recipe: [[items.sheetMetal, 8], [items.plastic, 2]]
      }, //cheap
    
    

    //payloads:



    ram: 
      {
        // id: 'ramP',
        recipe: [[items.tungsten, 15], [items.sheetMetal, 10]]
      }, //very expensive

    laser: 
      {
        // id: 'laserP',
        recipe: [[items.circuitBoard, 4], [items.uraniumRod, 4]]
      }, //expensive

    nuclearWarhead: 
      {
        // id: 'nukeP',
        recipe: [[items.tungstenSheet, 4], [items.uraniumRod, 5]]
      }, //reasonably expensive

    radar: 
      {
        // id: 'radarP',
        recipe: [[items.circuitBoard, 4], [items.sheetMetal, [4]]]
      }, //somewhat cheap
    
    guidedMissiles: 
      {
        // id: 'missileP',
        recipe: [[items.circuitBoard, 2], [items.tungsten, 4]]
      }, //cheap
    
    drones: 
      {
        // id: 'droneP',
        recipe: [[items.sheetMetal, 5], [items.circuitBoard, 4]]
      }, //cheap
    

    
    //other: (mostly things only used to craft other items)



    tungsten:
      {
        // id: 'tungsten',
        recipe: [[items.sheetMetal, 2], [items.resource, 5]]
      },
    tungstenSheet:
      {
        // id: 'tungstenSheet',
        recipe: [[items.tungsten, 5]]
      },
    plastic:
      {
        // id: 'plastic',
        recipe: [[items.resource, 6]]
      },
    sheetMetal:
      {
        // id: 'sheetMetal',
        recipe: [[items.resource, 5]]
      },
    circuitBoard:
      {
        // id: 'circuitBoard',
        recipe: [[items.uraniumRod, 1], [items.tungstenSheet, 1], [items.resource, 3]]
      },
    uraniumRod:
      {
        // id: 'uraniumRod',
        recipe: [[items.resource, 15], [items.tungstenSheet, 4]]
      },



    //buildings



    warehouse:
      {
        // id: 'wB',
        recipe: [[items.resource, 20], [items.tungstenSheet, 2]]
      },

    factory:
      {
        // id: 'fB',
        recipe: [[items.sheetMetal, 10], [items.uraniumRod, 2]]
      },

    quarry:
      {
        // id: 'qB',
        recipe: [[items.resource, 15], [items.tungsten, 3]]
      },

    spaceport:
      {
        // id: 'sB',
        recipe: [[items.uraniumRod, 4], [items.circuitBoard, 4], [items.tungsten, 6]]
      }
  }