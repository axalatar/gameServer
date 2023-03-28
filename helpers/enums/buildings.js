
items = require('./items')
empty = items.empty

const emptySlot = {item: empty, amount: 0, puttable: true, gettable: true}
const lockedSlot = {item: empty, amount: 0, puttable: false, gettable: false}

module.exports = 
  {
    
    //format:
    //  {
    //    inventory: [[(starting item), (how many of the starting item, always 0 for an 'empty' item), 
    //    (whether or not items can be put into it by players), (whether or not items can be taken out
    //    by players)] (one for each slot in the inventory) ] 
    //
    //    id: first letter of building, plus a capital B after for building
    //  }

    
    warehouse: 
      {
        inventory: [{item: 'resource', amount: 1, puttable: true, gettable: true}, emptySlot, emptySlot, emptySlot, emptySlot], 
        id: 'warehouse',
      }, 
    
    factory: 
      {
        inventory: [{item: 'warehouse', amount: 1, puttable: true, gettable: true}, lockedSlot, lockedSlot, lockedSlot, lockedSlot],
        id: 'factory' //this warehouse item is just for testing!
      },

    spaceport: 
      {
        inventory: [emptySlot],
        id: 'spaceport'
      },
    
    quarry: 
      {
        inventory: [emptySlot],
        id: 'quarry'
      },

    empty: 
      {
        inventory: [],
        id: '-'
      } //if there is no building
  }