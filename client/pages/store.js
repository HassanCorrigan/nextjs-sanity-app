import Link from 'next/link';
import Client from 'config/sanity';
import Layout from 'components/Layout';
import styles from 'styles/store.module.css';

const Store = ({ products }) => {
  return (
    <Layout>
      <section>
        <h1>Store</h1>
        <div>
          {products.map(product => (
            <Link href={`/store/${product._id}`} key={product._id}>
              <a>
                <img
                  className={styles.productPhoto}
                  src={product.image.url}
                  alt=''
                />
                <h2>{product.name}</h2>
                <p>{product.details}</p>
                <p>&euro;{product.price}</p>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const query =
    '*[_type=="product"]{_id, "image": image.asset->{url}, name, details, price} | order(date desc)';
  const products = await Client.fetch(query);

  return {
    props: {
      products,
    },
  };
}

export default Store;
