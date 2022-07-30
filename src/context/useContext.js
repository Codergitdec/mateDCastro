import React, { createContext, useState } from "react";
// import { StepTitle } from "semantic-ui-react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([{ 

    }])

/*     const isInCart = (id) => {
    
    }
*/
    
        const addItem = (item, count) =>{

        setItems([...items, {id: item.id, name: item.title, price: item.price, count: count}]);
    }
    return (
        <CartContext.Provider value={{ items, addItem }}>
            {children}
        </CartContext.Provider>
    )
    }
    
