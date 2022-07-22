
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import data from "../database/data.json";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(data), 2000);
  });
 
  useEffect(() => {
    promise.then((res) => setItems(data));
  },[]);
  
  return (
    <>
      <div className="mt-5">
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;