import React from 'react'
import { groceryStore } from './JSObjectPractice'

const GroceryStore = () => {
  console.log(groceryStore)
  return (
    <div>
      <h2> My Grocery Store </h2>
      <p>Dairy: {groceryStore.dairy}</p>
      <p>fruit: {groceryStore.fruit[0]}, {groceryStore.fruit[1]}, {groceryStore.fruit[2]} </p>
      <p>Fruit: {groceryStore.fruit.join(', ')}</p>
      <p>Carboydrates: </p>
      <ul>
        {groceryStore.carboydrates.wheat.map(function (item, index) {
          return <li>{item}</li>
        })}
      </ul>
      <p>Carboydrates: </p>
      <ul>
        {groceryStore.carboydrates.wheat.map(() => {})}
      </ul>

    </div>
  )
}

export default GroceryStore