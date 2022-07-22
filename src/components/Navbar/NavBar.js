import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">MateArt</Link>
  <CartWidget/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="nav-link" to="category/Madera">Categoria <span className="sr-only">(Madera)</span></Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/">Modelos</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/">Precios</Link>
      </li>
      <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Materiales
          </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Link className="dropdown-item" to="/">Madera</Link>
          <Link className="dropdown-item" to="/">Cerámica</Link>
          <Link className="dropdown-item" to="/">Metal</Link>
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar