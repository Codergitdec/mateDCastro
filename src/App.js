
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Navbar from "./components/Navbar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Category from "./components/Category/Category.jsx";

function App() {
  return(

<>
      <BrowserRouter>
        <Navbar />
        
<div>

</div>
        <Routes>
         
          <Route index element={<ItemListContainer />} /> 
          <Route path="/category" element={<ItemListContainer />} ></Route>
          <Route path="/category/:name" element={<ItemListContainer />} ></Route>
          <Route path="/category/:title" element={<ItemListContainer />} ></Route>
          <Route path="/item/:id" element={<ItemDetailContainer />} ></Route>
          <Route
            path="*"
            element={
              <div style={{ backgroundColor: "red" }}> ERROR 404 NOT FOUND</div>
            }
          />
        </Routes>
        
      </BrowserRouter>
    </>


 
  );
}

export default App;
