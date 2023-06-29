import "./styles.css";
import React, { useState } from "react";
import Tolist from "./components/Tolist";
import Inputarea from "./components/Inputarea";

export default function App() {

  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  };

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter(
        (item, index) => {
          return index !== id;
        }
      )
    })
  }



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Inputarea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <Tolist
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}

        </ul>
      </div>
    </div>
  );
}
