
import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from "react-router-dom";
import data from "../database/detail.json";

  const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
    
    const promise = new Promise(resolve => { 
      setTimeout(() => resolve(data), 2000);
      });
  
    useEffect(() => {
    promise
    .then(res => {
      const foundItem = res.find(item => item.id === parseInt(id))
        setItem(foundItem);
        }) 
      },[])

      return(
        <ItemDetail item={item} />
    
      )
    };


  export default ItemDetailContainer;


 