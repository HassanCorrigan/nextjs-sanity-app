import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useStoreContext } from 'context/StoreContext';
import styles from 'styles/components/cart-button.module.css';

const CartButton = () => {
  const { cartItems } = useStoreContext();
  const [itemNumber, setItemNumber] = useState(0);

  useEffect(() => {
    setItemNumber(cartItems.length);
  }, [cartItems]);

  return (
    <Link href='/cart'>
      <div className={styles.container}>
        <div className={`block ${styles.cartBtn}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            id='ShoppingBag'>
            <path d='M4.051 8.92A1 1 0 015.048 8h13.904a1 1 0 01.997.92l.877 10.92A2 2 0 0118.833 22H5.167a2 2 0 01-1.993-2.16L4.05 8.92z' />
            <path d='M16 11V6a4 4 0 00-4-4v0a4 4 0 00-4 4v5' />
          </svg>
          {itemNumber > 0 && <div className={styles.badge}>{itemNumber}</div>}
        </div>
      </div>
    </Link>
  );
};

export default CartButton;
