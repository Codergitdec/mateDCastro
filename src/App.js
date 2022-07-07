import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return(
  <>
      <Navbar />
      <ItemListContainer Pregunta={"¿Querés comprar un mate?"} />
  </>
  )
}

export default App;