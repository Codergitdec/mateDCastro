const ItemDetail = ({ item }) => {
   
  return (
    <article className="product-detail">
      <img src={item.pictureUrl} alt={item.title}className="product-detail__img" />
        <div className="product-detail__info">
        <h2 className="name">Nombre: {item.title}</h2>
        <h2 className="name">Stock: {item.stock}</h2>
        <h2 className="description">Descripcion: {item.description}</h2>
        <h2 className="color">color: {item.color}</h2>
        <h2 className="color">categoria: {item.category}</h2>


      </div>
    </article>
  )
};

export default ItemDetail;