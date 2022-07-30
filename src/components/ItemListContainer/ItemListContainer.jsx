import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import data from "../database/data.json";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000);
    });
    promise.then((res) => {
      const products = res;
      if (name) {
      setItems(products.filter((product) => parseInt(product.category) === parseInt(name)));
    } else {
    setItems(products);
  }
});
  },[name]);
  
  return (
    <>
      <div className="mt-5">
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
