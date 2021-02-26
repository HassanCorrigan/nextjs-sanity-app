import PropTypes from 'prop-types';
import Client from 'config/sanity';
import { useStoreContext } from 'context/StoreContext';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import CartButton from 'components/CartButton';
import styles from 'styles/pages/product.module.css';

const Product = ({ product }) => {
  const { photo, name, description, price, stock } = product;
  const { addProduct } = useStoreContext();

  return (
    <Layout>
      <Meta
        title={name}
        description={description}
        image={photo}
        type='product'
      />
      <section className={styles.productSection}>
        <img className={styles.productPhoto} src={photo} alt={name} />

        <div className={`block ${styles.productDetails}`}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>&euro;{price}</p>
        </div>

        <button
          onClick={() => addProduct(product)}
          className={`btn ${styles.addToCartBtn}`}
          disabled={!product.stock}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
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
          {stock ? <span>Add To Cart</span> : <span>Sold Out</span>}
        </button>
      </section>
      <CartButton />
    </Layout>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.bool.isRequired,
  }),
};

export async function getStaticPaths() {
  const query = '*[_type=="product"] {_id}';
  const products = await Client.fetch(query);
  const paths = products.map(product => `/store/${product._id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const query = `*[_type=="product" && _id=="${params.product}"] {_id, "photo": image.asset->url, name, description, price, stock}`;
  const [product] = await Client.fetch(query);

  return {
    props: {
      product,
    },
  };
}

export default Product;
