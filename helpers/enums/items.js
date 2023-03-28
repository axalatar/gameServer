module.exports = 
  {
    /*
    format: 
    {
      // id: (id),
      type: (cone, body, engine, payload, other, or buildings),
      stats (only for non other/buildings): 
      {
        durability: #, (max health)
        speed: #, (how many ticks it takes to move one space, so smaller speeds are better)
        maxDist: #, (maximum distance, affected both by objects being heavy and by having lots of fuel)
        power: # (how much damage it deals to enemies/planets)
        sight: # (how far it can see, only really affected by payload)
      },
    }
    */
    
    resource: 
      {
         // id: 'res',
        type: 'other'
      }, //the general resource

    empty: 'empty', //placeholder that means no item

    //cones:


    
    tungstenPackedCone: 
      {
        // id: 'tungC',
        type: 'cone',
        stats: {durability: 15, speed: 15, maxDist: -10, power: 5, sight: 0}
      }, //very expensive

    quickCone:
      {
        // id: 'quickC',
        type: 'cone',
        stats: {durability: -10, speed: -10, maxDist: 20, power: -5, sight: 0} 
      }, //expensive
    
    bluntCone:
      {
        // id: 'bluntC',
        type: 'cone',
        stats: {durability: 0, speed: 5, maxDist: 0, power: 3, sight: 0}
      }, //reasonably expensive
    
    plasticCone: 
      {
        // id: 'plastC',
        type: 'cone',
        stats: {durability: -5, speed: -5, maxDist: 15, power: -8, sight: 0}
      }, //cheap
    
    metalCone: 
      {
        // id: 'metalC',
        type: 'cone',
        stats: {durability: 5, speed: -1, maxDist: 10, power: 5, sight: 0}
      }, //cheap
    

      
    //bodies: 

    

    reinforcedBody: 
      {
        // id: 'reinforB',
        type: 'body',
        stats: {durability: 10, speed: 6, maxDist: 25, power: 0, sight: 0}
      }, //expensive
    
    lightBody: 
      {
        // id: 'lightB',
        type: 'body',
        stats: {durability: 5, speed: 1, maxDist: 50, power: 0, sight: 0}
      }, //expensive

    giantBody: 
      {
        // id: 'giantB',
        type: 'body',
        stats: {durability: 5, speed: 4, maxDist: 85, power: 0, sight: 0}
      }, //somewhat cheap
    
    smallBody: 
      {
        // id: 'smallB',
        type: 'body',
        stats: {durability: 5, speed: 1, maxDist: 35, power: 0, sight: 0}
      }, //cheap


    
    //engines:


    
    efficientEngine: 
      {
        // id: 'efficientE',
        type: 'engine',
        stats: {durability: 0, speed: 15, maxDist: 80, power: 0, sight: 0}
      }, //very expensive

    overchargeEngine: 
      {
        // id: 'overE',
        type: 'engine',
        stats: {durability: 0, speed: -25, maxDist: -35, power: 3, sight: 0}
      }, //expensive
    
    armoredEngine: 
      {
        // id: 'armorE',
        type: 'engine',
        stats: {durability: 10, speed: -10, maxDist: -10, power: 0, sight: 0}
      }, //somewhat cheap
    
    liquidEngine: 
      {
        // id: 'liquidE',
        type: 'engine',
        stats: {durability: 0, speed: -10, maxDist: 0, power: 0, sight: 0}
      }, //cheap
    
    solidEngine: 
      {
        // id: 'solidE',
        type: 'engine',
        stats: {durability: 0, speed: -15, maxDist: -10, power: 0, sight: 0}
      }, //cheap
    
    

    //payloads:



    ram: 
      {
        // id: 'ramP',
        type: 'payload',
        stats: {durability: 15, speed: 45, maxDist: 0, power: 25, sight: 0}
      }, //very expensive

    laser: 
      {
        // id: 'laserP',
        type: 'payload',
        stats: {durability: 0, speed: 0, maxDist: 0, power: 18, sight: 0}
      }, //expensive

    nuclearWarhead: 
      {
        // id: 'nukeP',
        type: 'payload',
        stats: {durability: 0, speed: 5, maxDist: 0, power: 20, sight: 0}
      }, //reasonably expensive

    radar: 
      {
        // id: 'radarP',
        type: 'payload',
        stats: {durability: 0, speed: 0, maxDist: 0, power: 0, sight: 25}
      }, //somewhat cheap
    
    guidedMissiles: 
      {
        // id: 'missileP',
        type: 'payload',
        stats: {durability: 0, speed: 0, maxDist: 0, power: 10, sight: 5}
      }, //cheap
    
    drones: 
      {
        // id: 'droneP',
        type: 'payload',
        stats: {durability: -10, speed: 0, maxDist: 0, power: 15, sight: 0}
      }, //cheap
    

    
    //other: (mostly things only used to craft other items)



    tungsten:
      {
        // id: 'tungsten',
        type: 'other',
      },
    tungstenSheet:
      {
        // id: 'tungstenSheet',
        type: 'other',
      },
    plastic:
      {
        // id: 'plastic',
        type: 'other',
      },
    sheetMetal:
      {
        // id: 'sheetMetal',
        type: 'other',
      },
    circuitBoard:
      {
        // id: 'circuitBoard',
        type: 'other',
      },
    uraniumRod:
      {
        // id: 'uraniumRod',
        type: 'other',
      },



    //buildings: (these are built in a factory, and have a function to turn them into real buildings from items)

    //wBi == w(arehouse) B(uilding) i(tem)
    warehouse:
      {
        // id: 'wBi',
        type: 'building',
        building: 'warehouse'
      },

    factory:
      {
        // id: 'fBi',
        type: 'building',
        building: 'factory'
      },

    quarry:
      {
        // id: 'qBi',
        type: 'building',
        building: 'quarry'
      },

    spaceport:
      {
        // id: 'sBi',
        type: 'building',
        building: 'spaceport'
      }
    
  }