import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counterSlice";
import { addToDesc } from "../features/productSlice";
import data from "../Products.js";
import ShowMore from "../components/ShowMore";
import { useEffect, useState } from "react";

function BodySection() {
  const dispatch = useDispatch();

  const [phoneData, setPhoneData] = useState([]);
  const [electronicItem, setElectronicItem] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?skip=0&limit=60")
      .then((res) => res.json())
      .then((resData) => {
        let filterData = resData.products.filter((elem) => {
          return elem.category === "smartphones";
        });
        setPhoneData(filterData);
        let filterElectronicData = resData.products.filter((elem) => {
          return elem.category === "furniture";
        });

        let decorationItem = resData.products.filter((elem) => {
          return elem.category === "tops";
        });
        let temp = filterElectronicData.concat(decorationItem);
        setElectronicItem(temp);
      });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let images = [
    { src: "/ec/images/mobile.jpg" },
    { src: "/ec/images/cloths.jpg" },
    { src: "/ec/images/mobile2.jpg" },
    { src: "/ec/images/office.jpg" },
    { src: "/ec/images/smartp.jpg" },
    { src: "/ec/images/kitchen.jpg" },
    { src: "/ec/images/toys.jpg" },
  ];
  return (
    <>
      <div className="container-fluid mainBody ">
        <Slider {...settings}>
          {images.map((elem, ind) => {
            return (
              <div className="sliderImg" key={ind}>
                <img src={elem.src} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="topbrand">
        <h2>Top Brands</h2>
        <div className="container">
          <div className="row">
            {phoneData.map((elem, ind) => {
              return (
                <div className="col-12 col-sm-4 col-md-3">
                  <div className="card" key={ind}>
                    <div className="img_cont">
                      <div className="imgBox">
                        <img src={elem.thumbnail} className="card-img-top" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h6 className="card-title">{elem.title}</h6>
                      {elem.description.length > 35 && (
                        <p className="cardInfo">
                          {elem.description.length > 10 ? (
                            <ShowMore desc={elem.description} />
                          ) : (
                            elem.description
                          )}
                        </p>
                      )}

                      <div className="priceBox">
                        <div className="offerPrice">{elem.price}</div>
                        <div className="mainPrice">₹800</div>
                      </div>
                      <div className="buybtn">
                        <Link className="link" to={`/singleproduct/${ind}`}>
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
              );
            })}
          </div>
        </div>
      </div>
      <div className="newproducts">
        <div className="container">
          <h2>New Products</h2>
          <div className="row">
            {electronicItem.map((elem, ind) => {
              return (
                <div className="col-6 col-sm-4 col-md-3 ">
                  <div class="card">
                    <div className="name">{elem.title}</div>
                    <img src={elem.thumbnail} class="cardimg" />
                    <div className="price-cart">
                      <div className="price">
                        ₹{elem.price} <span>₹{elem.price}</span>
                      </div>
                      <Link className="link" to="/cart">
                        <button onClick={() => dispatch(increment(elem))}>
                          <i class="fa-solid fa-cart-plus"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BodySection;
