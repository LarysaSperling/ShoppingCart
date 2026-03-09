import { connect } from "react-redux";
import CartItem from "../cartItem";
import styles from "./styles.module.css";

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className={styles.cart}>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);