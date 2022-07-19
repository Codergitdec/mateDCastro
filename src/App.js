import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Navbar from "./components/Navbar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return(

<>
      <BrowserRouter>
        <Navbar />

        <Routes>
         
          <Route index element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
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