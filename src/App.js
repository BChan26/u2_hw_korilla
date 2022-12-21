import React from 'react';
import './App.css';
import Receipt from './components/Receipt'

const receipts = [
  {
    id: 1,
    person: 'Jeremy',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
      drink: 'Korchata',
      cost: 22,
    },
    paid: false,
  },
  {
    id: 2,
    person: 'Tiffany',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
      drink: 'Korchata',
      cost: 19,
    },
    paid: false,
  },
  {
    id: 3,
    person: 'Brittany',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20,
    },
    paid: false,
  },
];

//this ternary is structured with a value ? true:false conditions
//since there is null after ? and before :, nothing happens. We want this because they've already paid their receipt.
//Since the right of the colon is false, then we want the receipt to spit out

function App() {
  return (
    <>
      <main>
        {receipts.map((info) => (
          info.paid ? null :
            <Receipt
            key={receipts.id}
            person={info.person}
            order={info.order}/>
        ))}
      </main>
    </>
  );
}

export default App;
