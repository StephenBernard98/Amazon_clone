import "./Product.css";
import { useStateValue } from "./StateProvider";
const Product = ({ id, title, price, rating, image }) => {
  const [{}, dispatch] = useStateValue();
  
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    })
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <strong>${price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p>&#9733;</p>;
            })}
        </div>
      </div>
      <img src={image} alt=""/>
     <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
