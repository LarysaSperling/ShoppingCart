import { connect } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../../redux/actions";
import styles from "./styles.module.css";

function CartItem({ item, removeFromCart, updateCartQuantity }) {
  const handleChange = (e) => {
    updateCartQuantity(item.id, e.target.value);
  };

  return (
    <div className={styles.cartItem}>
      <span className={styles.info}>
        {item.name} ${item.price.toFixed(2)}
      </span>

      <input
        className={styles.input}
        type="number"
        min="1"
        value={item.quantity}
        onChange={handleChange}
      />

      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default connect(null, { removeFromCart, updateCartQuantity })(CartItem);