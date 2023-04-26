
export const groceryStore = {
  dairy: "milk",
  meat: "beef",
  vegetable: "broccoli",
  fruit: ["strawberry", "mango", "peach"],
  carboydrates: {wheat: ['pasta', 'bread', 'doughnuts'], corn: "polenta" }
};

export const store = {
  pizzas: [
    {
      id: 1,
      customer: 1,
      base: "marinara",
      toppings: ["cheese", "pineapple", "pepperoni"]
    },
    {
      id: 2,
      customer: 1,
      base: "marinara",
      toppings: ["cheese", "bacon"]
    },
    {
      id: 3,
      customer: 2,
      base: "marinara",
      toppings: ["cheese", "spinach", "pepperoni"]
    },
    {
      id: 4,
      customer: 3,
      base: "marinara",
      toppings: ["cheese", "mushrooms", "ham"]
    }
  ],
  customers: [
    {
      id: 1,
      name: "Sabrina",
      address: "665 SE Salem RD Riverdale, MA"
    },
    {
      id: 2,
      name: "Salem",
      address: "665 SE Salem RD Riverdale, MA"
    }
  ]
};

store.pizzas[2].toppings = ['pepperoni', 'sausage', 'mushrooms', 'anchovies', 'apple']

  // return obj.hasOwnProperty([str]) ? delete obj[str] : "Object does not have property"
function finder (obj, str) {
  obj.hasOwnProperty([str]) ? delete obj[str] : console.log("Object does not have property")

  // if (obj.hasOwnProperty([str])) {
  //   delete obj[str]
  // } else {
  //   return "Object does not have property"
  // }
  return obj
}

// console.log(finder(groceryStore, 'dairy'));
// should delete meat property
// console.log(finder(groceryStore, 'candy'))
// should print "Object does not have that property"
groceryStore.seafood = "shrimp"
// console.log(groceryStore)


// 3
const person1 = {
	name: "Bob",
	age: 12,
	occupation: "student",
	friends: ["alice", "bill", "carol"],
	interests: { music: "gregorian  chant", sports: ["shuffle board", "ping pong", "roller derby"]}
}

// if the property of the object is being carried in a variable, we have to put it in brackets. but if the object is represented by a variable, you can still use the . dot notation obj.occupation
function finder2(obj, str) {
  if (obj.occupation == str) {
    return obj.interests.sports[2]
  } else {
    return obj.interests.music
  }
}

console.log(finder2(person1, "student"));
console.log(finder2(person1, "professor"))

