
import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from "react-router-dom"
import details from "../database/detail.json";
const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { params } = useParams();

    const promise = new Promise((resolve) => {
   
   setTimeout(() => resolve(details), 2000);
   });
  
    useEffect(() => {
     promise.then((res) => {
       const foundItem = res.filter(item => item.id == params.id)
      setItem(foundItem);
      })
      
   }, [])
    return
      <ItemDetail item={item} />;
    
  };


export default ItemDetailContainer;