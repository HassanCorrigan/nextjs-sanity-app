import Client from 'config/sanity';
import Layout from 'components/Layout';
import styles from 'styles/pages/product.module.css';

const Product = ({ product }) => {
  const { name, photo, description, price } = product;

  return (
    <Layout>
      <h1>{name}</h1>
      <img className={styles.productPhoto} src={photo} alt={name} />
      <p>{description}</p>
      <p>&euro;{price}</p>
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
  const query = `*[_type=="product" && _id=="${params.product}"] {_id, "photo": image.asset->url, name, description, price}`;
  const product = await Client.fetch(query);

  return {
    props: {
      product: product[0],
    },
  };
}

export default Product;
