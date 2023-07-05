import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
const ProductDetail = ({ data }) => {
  const currentProductId = useParams();
  const currentItem = parseInt(currentProductId.id);
  console.log(data[currentItem]);
  return (
    <>
      <Navbar />

      <div className="product__detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <img src={data[currentItem].image} alt={data[currentItem].title} />
            </div>
            <div className="col-lg-6 col-12">
              <span>{data[currentItem].category}</span>
              <h1>{data[currentItem].title}</h1>
              <span>{data[currentItem].price}</span>
              <p>{data[currentItem].description}</p>

              <button className="btn__cart">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
