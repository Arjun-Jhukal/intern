import { Link } from "react-router-dom";
const Product = ({ image, title, price, category, index }) => {
  return (
    <div className="product__item">
      <div className="product__item__image">
        <img src={image} alt="" />
      </div>
      <div className="product__item__text">
        <span>{category}</span>
        <h1>{title}</h1>
        <span>{price}</span>

        <Link to={`/products/${index}`} className="btn btn__view">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
