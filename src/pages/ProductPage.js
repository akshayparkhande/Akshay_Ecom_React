import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counterSlice";
import { Link } from "react-router-dom";
function SingleProduct() {
  const dispatch = useDispatch();
  const cartDetail = useSelector((state) => state.cartCounter);
  const productData = useSelector((state) => state.productData);
  const textRef = useRef(null);
  const ratingRef = useRef(null);
  const [imageSrc, setImageSrc] = useState({ src: productData[0].thumbnail });
  const [comment, setComment] = useState([
    { review: productData[0].description, rating: productData[0].rating },
  ]);
  const [chekCart, setCart] = useState([]);
  useEffect(() => {
    let elemId = cartDetail.map((elem) => {
      return elem.id;
    });
    setCart(elemId);
  }, [cartDetail]);
  if (productData[0]) {
    const { images, title, price, rating, review, id, description } =
      productData[0];

    const submitComment = () => {
      setComment([
        ...comment,
        { review: textRef.current.value, rating: ratingRef.current.value },
      ]);
    };
    return (
      <>
        <div className="productDetails">
          <div className="container">
            <div className="productTop">
              <div className="sideimages">
                {images.map((elem, ind) => {
                  return (
                    <div className="img_box" key={ind}>
                      <img
                        src={elem}
                        alt=""
                        onClick={(e) =>
                          setImageSrc({ src: e.target.currentSrc })
                        }
                      />
                    </div>
                  );
                })}
              </div>
              <div className="singleImage">
                <div className="imagebox">
                  <img src={imageSrc.src} alt="" />
                </div>
              </div>
            </div>
            <div className="cartDetails">
              <h4>{title}</h4>
              <h5 className="ratingBox">
                {rating}
                <sub>*</sub>
              </h5>
              <div className="priceBar">
                <h4>₹{price}</h4>
                <h4 id="stikeThrough">₹12000</h4>
                <h4>(25%OFF)</h4>
              </div>
              <div className="inclusive_text">inclusive of all taxes</div>
              <div className="cartBtn">
                {chekCart.includes(id) ? (
                  <Link to="/cart">
                    <button id="buy">Buy</button>
                  </Link>
                ) : (
                  <Link to='/cart'>
                    <button
                    id="buy"
                    onClick={() => {
                      dispatch(increment(productData[0]));
                    }}
                  >
                    Buy
                  </button>
                  </Link>
                )}
                {chekCart.includes(id) ? (
                  <Link to="/cart">
                    <button id="buy">Go to cart</button>
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      dispatch(increment(productData[0]));
                    }}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
              <hr />
              <div className="productFullDetail">
                <h4>Product Details</h4>
                <p>
                  {description}
                  {/* 1. Battery life is good; last me more than a day on normal usage
                  2. Performance is very good; I played COD on it max settings and
                  ipad handle it like a piece of cake. 3. Screen is large enough
                  to do multitasking; I personally use it to watch lecture on
                  2/3rd of screen and take notes or solve question on the
                  remaining 1/3rd of screen. 4.Camera quality is decent, not too
                  good. 5. Weight distribution is very good; you can hold it with
                  one hand easily 6. Display quality is decent. I have use amoled
                  on my phone so it feels a bit downgrade but in normal usage you
                  won't even notice it. */}
                </p>
              </div>
              <hr />
              <div className="deliveryOptions">
                <h4>Delivery Options</h4>
                <input type="text" placeholder="pin code" />
                <p className="note">
                  Please enter PIN code to check delivery time & Pay on Delivery
                  Availability
                </p>
                <div className="payinfo">100% Original Products</div>
                <div className="payinfo">
                  Pay on delivery might be available
                </div>
                <div className="payinfo">
                  Easy 30 days returns and exchanges
                </div>
              </div>
              <hr />
              <div className="best_offers">
                <div className="best_price">
                  <h4>BEST OFFERS</h4>
                  <h5>
                    Best Price <span>₹12000</span>
                  </h5>
                  <ul>
                    <li>
                      Applicable on: Orders above Rs. 1499 (only on first
                      purchase)
                    </li>
                    <li>Coupon code: DJP40</li>
                    <li>
                      Coupon Discount: Rs. 40 off (check cart for final savings)
                    </li>
                  </ul>
                </div>
                <h5 className="emi_option">EMI Option Available</h5>
                <div>EMI starts from ₹500/month</div>
                <div className="product_code">
                  Product Code: <span>cp0844th</span>
                </div>
                <div className="seller">
                  Seller: <span>xyz</span>
                </div>
              </div>
              <hr />
              <div className="card_rating">
                <div className="title">
                  <h4>Rating</h4>
                  <span>*</span>
                </div>
                <div className="rating_bars">
                  <ul>
                    <li>
                      <div className="rating_length">
                        <span>5</span>
                        <span>*</span>
                        <div className="progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            aria-label="Danger example"
                            style={{ width: "68%" }}
                            aria-valuenow="68"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="rating_count">68</div>
                    </li>
                    <li>
                      <div className="rating_length">
                        <span>4</span>
                        <span>*</span>
                        <div className="progress">
                          <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            aria-label="Danger example"
                            style={{ width: "55%" }}
                            aria-valuenow="55"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="rating_count">55</div>
                    </li>
                    <li>
                      <div className="rating_length">
                        <span>3</span>
                        <span>*</span>
                        <div className="progress">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            aria-label="Danger example"
                            style={{ width: "45%" }}
                            aria-valuenow="45"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="rating_count">45</div>
                    </li>
                    <li>
                      <div className="rating_length">
                        <span>2</span>
                        <span>*</span>
                        <div className="progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            aria-label="Danger example"
                            style={{ width: "35%" }}
                            aria-valuenow="35"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="rating_count">35</div>
                    </li>
                    <li>
                      <div className="rating_length">
                        <span>1</span>
                        <span>*</span>
                        <div className="progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            aria-label="Danger example"
                            style={{ width: "10%" }}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="rating_count">10</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="riview">
                <h6>Share your valuable riview</h6>
                <div className="reviewform">
                  <input
                    type="text"
                    id="text"
                    placeholder="Review"
                    ref={textRef}
                  />
                  <input
                    type="number"
                    min="1"
                    max="5"
                    id="num"
                    placeholder="Rating"
                    ref={ratingRef}
                  />
                  {/* <input
                    type="submit"
                    value="Post"
                    id="submit"
                    // onClick={submitComment}
                  /> */}
                  <button onClick={submitComment} id="submit">
                    post
                  </button>
                </div>
              </div>
              {comment.map((elem, ind) => {
                return (
                  <div className="review_desc" key={ind}>
                    <div className="riview_by_custm">
                      <div className="star">{elem.rating}*</div>
                      <p>{elem.review}</p>
                    </div>
                    <div className="customer_info">@customername</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2>data not available</h2>
      </>
    );
  }
}

export default SingleProduct;
