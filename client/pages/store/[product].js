import Client from 'config/sanity';
import Layout from 'components/Layout';
import styles from 'styles/product.module.css';

const Product = ({ product }) => {
  return (
    <Layout>
      <h1>{product.name}</h1>
      <img
        className={styles.productPhoto}
        src={product.image.url}
        alt={product.name}
      />
    </Layout>
  );
};

export async function getStaticPaths() {
  const query = '*[_type=="product"] {_id}';
  const products = await Client.fetch(query);
  const paths = products.map(product => `/store/${product._id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const query = `*[_type=="product" && _id=="${params.product}"] {_id, "image": image.asset->{url}, name, details, price}`;
  const product = await Client.fetch(query);

  return {
    props: {
      product: product[0],
    },
  };
}

export default Product;
