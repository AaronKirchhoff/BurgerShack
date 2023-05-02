const campingGear = [
  { name: 'Tent', subitems: [
    { name: 'Tent stakes' },
    { name: 'Tent poles' },
    { name: 'Tarp'},
    { name: 'Hammok'}
  ]},
  { name: 'Sleeping bags', subitems: [
    { name: 'Pillows' },
    { name: 'Sleeping pads' }
  ]},
  { name: 'Cookware', subitems: [
    { name: 'Stove' },
    { name: 'Fuel' },
    { name: 'Pots and pans' }
  ]},
  { name: 'Camp Fire', subitems: [
    { name: 'fire wood' },
    { name: 'kindling' },
    { name: 'matches'},
    { name: 'hatchet'},
    { name: 'saw'}
  ]}
];

// its kinda like we are iterating through an object and adding what we find to an array. and if we find something that is also an object, we call the function again recursivley to iterate thourhg that, objects within an object. 
function getItems(itemList) {
  let result = [];
  
  itemList.forEach(item => {
    result.push(item.name);
    
    if (item.subitems) {
      result = result.concat(getItems(item.subitems).map(subitem => ' ' + subitem));
    }
  });
  
  return result;
}

const packingList = getItems(campingGear);
console.log(packingList);