import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";
import styles from "./styles.module.css";

function ProductList({ products, addToCart }) {
  return (
    <div className={styles.productList}>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id} className={styles.productItem}>
          <span>
            {product.name} ${product.price.toFixed(2)}
          </span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, { addToCart })(ProductList);