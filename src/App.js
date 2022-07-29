
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Navbar from "./components/Navbar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./context/useContext"
import Cart from './views/Cart';
function App() {
  return(

<>
      <CartProvider>
      <BrowserRouter>
        <Navbar />
        
<div>

</div>
        <Routes>
         
          <Route index element={<ItemListContainer />} /> 
          <Route path="/category" element={<ItemListContainer />} ></Route>
          <Route path="/category/:name" element={<ItemListContainer />} ></Route>
          <Route path="/item/:id" element={<ItemDetailContainer />} ></Route>
          <Route path="/cart" element={<Cart />} ></Route>
          <Route
            path="*"
            element={
              <div style={{ backgroundColor: "red" }}> ERROR 404 NOT FOUND</div>
            }
          />
        </Routes>
        
      </BrowserRouter>
      </CartProvider>
    </>


 
  );
}

export default App;
