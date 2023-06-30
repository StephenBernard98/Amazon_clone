import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
const CheckoutProduct = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(id, title, price, rating, image)
  const removeFromBasket = () => {
     dispatch({
      type: "REMOVE_FROM_BASKET",
      id
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>${price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p>&#9733;</p>;
            })}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
