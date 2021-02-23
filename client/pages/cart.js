import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useStoreContext } from 'context/StoreContext';
import Layout from 'components/Layout';
import styles from 'styles/pages/cart.module.css';

const Cart = () => {
  const { cartItems, removeProduct, updateQuantity } = useStoreContext();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    /** Set products in the cart every time cartItems in state changes. */
    setProducts(cartItems);

    /** Calulate the total and set total state */
    const total = cartItems.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);
    setTotal(total);
  }, [cartItems]);

  const handleCheckoutSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(products, null, 2));
  };

  return (
    <Layout>
      <section className={styles.cartSection}>
        <h1>Cart</h1>

        <div className={styles.products}>
          {products.map(product => (
            <div className={`block ${styles.product}`} key={product._id}>
              <img
                className={styles.productPhoto}
                src={`${product.image}?w=200&h=200&fit=crop&crop=center`}
                alt={`${product.name} product photo`}
              />

              <Link href={`/store/${product._id}`}>
                <a className={styles.name}>{product.name}</a>
              </Link>

              <p className={styles.price}>&euro;{product.price}</p>

              <input
                className={styles.quantityInput}
                type='number'
                name='quantity'
                value={product.quantity}
                min='1'
                max='10'
                onChange={e =>
                  updateQuantity(product._id, Number(e.target.value))
                }
              />

              <button
                className={`btn ${styles.removeBtn}`}
                onClick={() => removeProduct(product._id)}>
                Remove
              </button>
            </div>
          ))}
        </div>

        {total > 0 && (
          <div className={`block ${styles.total}`}>
            Order Total: <span>&euro;{total}</span>
          </div>
        )}

        {products.length === 0 && (
          <div className={styles.emptyCartMessage}>
            <p>Cart is empty</p>
            <Link href='/store'>Go To Store</Link>
          </div>
        )}

        <button
          className={`btn ${styles.checkoutBtn}`}
          onClick={handleCheckoutSubmit}
          disabled={products.length === 0}>
          Checkout
        </button>
      </section>
    </Layout>
  );
};

export default Cart;
