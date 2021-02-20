import Link from 'next/link';
import Client from 'config/sanity';
import Layout from 'components/Layout';
import CartButton from 'components/CartButton';
import styles from 'styles/pages/store.module.css';

const Store = ({ products }) => {
  const handleAddToCart = e => {
    e.preventDefault();
    console.log('Clicked');
  };

  return (
    <Layout>
      <section className={styles.storeSection}>
        <h1>Store</h1>
        <div className={styles.products}>
          {products.map(product => (
            <Link href={`/store/${product._id}`} key={product._id}>
              <div className={`block ${styles.product}`}>
                <img
                  className={styles.productPhoto}
                  src={`${product.image}?w=200&h=200&fit=crop&crop=center`}
                  alt=''
                />
                <div className={styles.productBody}>
                  <div className={styles.productInfo}>
                    <p className={styles.name}>{product.name}</p>
                    <p className={styles.description}>{product.description}</p>
                  </div>

                  <div className={styles.productActions}>
                    <p className={styles.price}>&euro;{product.price}</p>
                    <button
                      onClick={handleAddToCart}
                      className={styles.addToCartBtn}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        id='AddToCard'>
                        <path d='M4.051 8.92A1 1 0 015.048 8h13.904a1 1 0 01.997.92l.877 10.92A2 2 0 0118.833 22H5.167a2 2 0 01-1.993-2.16L4.05 8.92z' />
                        <path d='M16 11V6a4 4 0 00-4-4v0a4 4 0 00-4 4v5' />
                      </svg>
                      <span>Add to cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <CartButton />
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const query =
    '*[_type=="product"]{_id, "image": image.asset->url, name, description, price} | order(date desc)';
  const products = await Client.fetch(query);

  return {
    props: {
      products,
    },
  };
}

export default Store;
