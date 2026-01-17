import React from "react";
import focaccia from "../assets/pizzas/focaccia.jpg";
import funghi from "../assets/pizzas/funghi.jpg";
import margherita from "../assets/pizzas/margherita.jpg";
import spinaci from "../assets/pizzas/spinaci.jpg";
import salamino from "../assets/pizzas/salamino.jpg";
import prosciutto from "../assets/pizzas/prosciutto.jpg";
import PizzaComponent from "./PizzaComponent";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: focaccia,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: margherita,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: spinaci,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: funghi,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: salamino,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: prosciutto,
    soldOut: false,
  },
];

function Menu() {

    return (
      <main className="menu">
        <h2>Our menu</h2>
        <p>
          Authentic italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <PizzaComponent pizzaObj={pizza} key={pizza.name}/>
            // <li className="pizza" key={pizza.name}>
            //   <img src={pizza.photoName} alt={pizza.name} />
            //   <div>
            //     <h3>{pizza.name}</h3>
            //     <p>{pizza.ingredients}</p>
            //     <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
            //   </div>
            // </li>
          ))}
        </ul>
      </main>
    );
}

export default Menu