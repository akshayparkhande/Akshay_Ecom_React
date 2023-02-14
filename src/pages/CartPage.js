import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../features/counterSlice";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise = loadStripe('pk_test_51MbGnoSC91nM5njsyv8Aw8uFB7cp0TGMigtCqJhsA2Sco4mJpCeSGXQyvoKQOPTwmFl6Xsg408GLv3JGvfZEbl9Z00lvkQyGuw');

const getStripe = ()=>{
    if(!stripePromise){
      stripePromise = loadStripe('pk_test_51MbGnoSC91nM5njsyv8Aw8uFB7cp0TGMigtCqJhsA2Sco4mJpCeSGXQyvoKQOPTwmFl6Xsg408GLv3JGvfZEbl9Z00lvkQyGuw');
    }
    return stripePromise
}
function Cart() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cartCounter.length);
  const card_data = useSelector((state) => state.cartCounter);
  const [totalAmount, setTotalAmount] = useState(0)
  const [totalAmountWithOffer, setTotalAmountWithOffer] = useState(0)
  
const item =  {
    price : "price_1MbGqdSC91nM5njszSHrm3Co",
    quantity: 1
}

const checkoutOptions = {
  lineItems: [item],
  mode: "payment",
  successUrl: `${window.location.origin}/success`,
  cancelUrl: `${window.location.origin}/cart`
}

const redirectTocheckout =async()=>{
  console.log("redirecttocheckot");
  const stripe = await getStripe();
  const {error} =  await stripe.redirectToCheckout(checkoutOptions);
  console.log("strpe error", error);
}
  useEffect(()=>{
   let initialvalue = 0; 
   let total= card_data.map((elem,ind)=>{
    let toNum = elem.price
      return (+toNum)
    }).reduce((accumulator,currentValue)=>accumulator + currentValue,initialvalue)
    setTotalAmount(total)
    setTotalAmountWithOffer((total-(total*0.25)+200))
  },[card_data])

  return (
    <>
      <div className="cart">
        <div className="container">
          <div className="row">
            <div className="col-12  col-md-8 items">
              <div className="row address">
                <div className="col-4">my Cart({count})</div>
                <div className="col-8">
                  <input type="text" placeholder="address" />
                </div>
              </div>
              {card_data.map((elem, ind) => {
                return (
                  <div className="row cartItems" key={ind}>
                    <div className="col-12 col-md-4 cartElemImg">
                      <img src={elem.thumbnail} alt="" />
                    </div>
                    <div className="col-12  col-md-8 cartElemDetails">
                      <h2>{elem.title}</h2>
                      <h3>sellar name:XYZ</h3>
                      <h3>₹{elem.price}</h3>
                      <button
                        onClick={() => {
                          dispatch(removeItem(elem.id));
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-12 col-md-4">
              <div className="priceDetails">
                <h3>PRICE DETAILS</h3>
                <hr />
                <div className="itemPrice itemD">
                  <div>Price</div>
                  <div>₹{totalAmount}</div>
                </div>
                <div className="discount itemD">
                  <div>discount</div>
                  <div>25%</div>
                </div>
                <div className="deleveryCharge itemD">
                  <div>Delevery Charges</div>
                  <div>₹200</div>
                </div>
                <hr />
                <div className="totalAmount itemD">
                  <div>Total Amount</div>
                  <div>₹{totalAmountWithOffer}</div>
                </div>
                <hr/>
                <div className="checkout">
                  <button onClick={redirectTocheckout}>Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
