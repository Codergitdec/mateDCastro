
const ItemDetail = ({ item }) => {
    return (
      <article className="product-detail">
        <img src={item.pictureUrl} alt={item.title}className="product-detail__img" />
        <div className="product-detail__info">
          <h2 className="name">{item.title}</h2>
          <p className="description">{item.description}</p>
        </div>
      </article>
    )
  };
  
  export default ItemDetail;