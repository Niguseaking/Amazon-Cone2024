import React, { useContext, useState } from "react";
import classes from "./Payment.module.css"; // Consistent naming
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/Axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/Firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/Action.Type"; 


function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  console.log(user);
  // const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  // Total Price calculation
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const handleChange = (e) => {
    //console.log(e);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };
  const handlePyment = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      // Step1: contact back end or function to get the client secret
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
      //console.log(response.data);
      //step2: client side(reactside conformation using stripe)
      const clientSecret = response.data?.clientSecret;

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          // each card element or card numbers
          card: elements.getElement(CardElement),
        },
      });
      //console.log(confirmation)
      //console.log(paymentIntent)
      //step3: adfter the conformation order firestore save, clear basket
      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      //make empty basket
      dispatch({ type: Type.EMPTY_BASKET });
      setProcessing(false);
      navigate("/orders", { state: { msg: "You have placed new order" } });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };
  return (
    <LayOut>
      {/*header*/}
      <div className={classes.payment_header}>Checkout({totalItem}) items</div>
      {/*payment method*/}
      <section className={classes.payment}>
        {/*address*/}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 Amazon lane</div>
            <div>Nashville, TN</div>
          </div>
        </div>
        <hr />
        {/*product*/}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* and refer https://docs.stripe.com/sdks/stripejs-react */}
        {/*card form */}

        <div className={classes.flex}>
          <h3>payment methods</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePyment}>
                {/*error*/}

                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/*card element */}
                <CardElement onChange={handleChange} />
                {/*price */}
                <div className={classes.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order | </p>
                      <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>please wait ...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
