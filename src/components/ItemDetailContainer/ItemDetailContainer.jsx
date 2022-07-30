
import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from "react-router-dom";
import data from "../database/data.json";

  const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
    
  
  useEffect(() => {
    const promise = new Promise(resolve => { 
      setTimeout(() => resolve(data), 2000);
      });
      
    promise
    .then(res => {
      const foundItem = res.find(item => item.id === parseInt(id))
        setItem(foundItem);
        }) 
  },[id])

      return(
        <ItemDetail item={item} />
      )
  };
  export default ItemDetailContainer;