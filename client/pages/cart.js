import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useStoreContext } from 'context/StoreContext';
import Layout from 'components/Layout';
import styles from 'styles/pages/cart.module.css';

const Cart = () => {
  const { cartItems, removeProduct } = useStoreContext();
  const [products, setProducts] = useState(cartItems);

  useEffect(() => {
    setProducts(cartItems);
  }, [cartItems]);

  return (
    <Layout>
      <section className={styles.cartSection}>
        <h1>Cart</h1>
        <div className={styles.products}>
          {products.map(product => (
            <div className={`block ${styles.product}`} key={product._id}>
              <p>{product.name}</p>
              <button
                className={`btn`}
                onClick={() => removeProduct(product._id)}>
                Remove
              </button>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className={styles.emptyCartMessage}>
            <p>Cart is empty</p>
            <Link href='/store'>Go To Store</Link>
          </div>
        )}

        <button
          className={`btn ${styles.checkoutBtn}`}
          onClick={e => {
            e.preventDefault();
            console.log(products);
          }}
          disabled={products.length === 0}>
          Checkout
        </button>
      </section>
    </Layout>
  );
};

export default Cart;
