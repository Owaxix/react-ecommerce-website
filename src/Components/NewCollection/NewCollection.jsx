import React from "react";
import "./NewCollection.css";
import newCollection from "../Assets/new_collections";
import Item from "../Item/Item";

export const NewCollection = () => {
  return (
    <div className="newCollection">
      <h1>New Collection</h1>
      <hr />
      <div className="newCollection-item">
        {newCollection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default NewCollection;
