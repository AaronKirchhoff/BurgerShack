
const groceryStore = {
  dairy: "milk",
  meat: "beef",
  vegetable: "broccoli",
  fruit: ["strawberry", "mango", "peach"],
  carboydrates: {wheat: ['pasta', 'bread', 'doughnuts'], corn: "polenta" }
}

function finder (obj, str) {
  if (obj.hasOwnProperty([str])) {
    delete obj[str]
  } else {
    return "Object does not have property"
  }
  return obj
}

console.log(finder(groceryStore, 'dairy'));
// should delete meat property
console.log(finder(groceryStore, 'candy'))
// should print "Object does not have that property"
groceryStore.seafood = "shrimp"
console.log(groceryStore)
