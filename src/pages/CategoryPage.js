import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToDesc } from "../features/productSlice";
import data from ".././Products";
import { useEffect, useState } from "react";

function Products() {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);

  // useEffect(() => {
  //   let res = data.filter((elem, ind) => {
  //     return elem.catogeries === "Electronics";
  //   });
  //   setProductData(res);
  // }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products?skip=5&limit=60")
      .then((res) => res.json())
      .then((json) => {
        setProductData(json.products)
      });
  }, []);
  if(productData){
    return (
      <>
        <div className="products">
          <h2>Products</h2>
          <div className="container">
            {productData.map((elem, ind) => {
              return (
                <div className="card mb-3" key={ind}>
                  <div className="row g-0">
                    <div className="col-md-4 cardImgBox">
                      <img
                        src={elem.images[0]}
                        className="img-fluid rounded-start"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{elem.title}</h5>
                        <h4>{elem.brand}</h4>
                        <p>{elem.description}</p>
                        <h4>₹{elem.price}</h4>
                        <div className="buybtn">
                          <Link to={`/singleproduct/${ind}`}>
                            <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                              dispatch(addToDesc(elem));
                            }}
                          >
                            {" "}
                            Buy
                          </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  
  }
  }
export default Products;
