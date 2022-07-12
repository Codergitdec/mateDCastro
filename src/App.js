import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Navbar from "./components/Navbar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return(
  <>
      <Navbar />
      <ItemListContainer Pregunta={"¿Querés comprar un mate?"} />
      <ItemCount />
  </>
  )
}

export default App;