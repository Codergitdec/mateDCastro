import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from 'react';

const ItemDetail = ({ item }) => {
   const [add, setAdd] = useState(false)
    const onAdd =(count) => {
       
    }
  return (
    
    <div style={{ with: "100%", textAling: "center" }}>
      <div className="ui cards" style={{display: "inline-block"}}>
        <div className="card">
          <div className="image">
            <img src={item.pictureUrl} alt={item.title} />
            </div>
            <div className="content">
              <div className="header">${item.price}</div>
              <div className="meta">{item.category}</div>
              <div className="description">{item.title}</div>
              </div>



      <div className="extra content" style={{height: "auto"}}>
      {
          add ?
          <div className="meta">aaaaaaaaAnadido!!</div>
          :
          <ItemCount /> 
      }
      </div>
      </div>
      </div>
      </div>
    
     )
    
};
export default ItemDetail;