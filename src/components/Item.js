import React, { useState } from "react";

function Item({ name, category }) {
  const [addedCart, setAddedCart] = useState(false)

  const handleAddCart = () => {
    setAddedCart(!addedCart)
  }

  const liClass = addedCart ? "in-cart" : ""


  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddCart}>{liClass? 'Remove From Cart': 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
