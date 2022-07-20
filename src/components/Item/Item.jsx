import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    const { id, title, stock, pictureUrl } = item;
    return (
      <div className="card" style={{ width: "15rem" }}>
        <img className="card-img-top" src={pictureUrl} alt={title} />
        <div className="card-body d-flex flex-column justify-content-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{`${stock} unidades disponibles!`}</p>
          <Link to={`/item/${id}`}>
            <button className="btn btn-primary ">
              Ver más detalles
            </button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Item;