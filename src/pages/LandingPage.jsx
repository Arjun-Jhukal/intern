import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

const LandingPage = () => {
  const [product, setProduct] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.trim() === "") {
      alert("Input must be filled");
      setSearchValue("");
    } else {
      const filteredProducts = product ? product.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())) : [];
      setProduct(filteredProducts);
    }
  };

  return (
    <>
      <Navbar searchValue={searchValue} onChange={handleInputChange} onSubmit={handleSubmit} />
      <div className="product">
        <div className="container">
          <div className="row">
            {product &&
              product.map((item, index) => (
                <div className="col-lg-4  col-6" key={index}>
                  <Product title={item.title} price={item.price} category={item.category} image={item.image} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
