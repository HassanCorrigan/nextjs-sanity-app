import Link from 'next/link';
import Client from 'config/sanity';
import { formatDate } from 'utils/date';
import Layout from 'components/Layout';
import styles from 'styles/pages/index.module.css';

const Home = ({ recentPosts, featuredProducts }) => {
  return (
    <Layout>
      <section className={styles.welcomeSection}>
        <h1>Home</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa enim
          qui, repellendus tempora numquam, neque alias iste amet tenetur
          accusantium debitis consectetur quaerat commodi fugit cumque.
          Voluptate reiciendis aliquam illum! Iure, perferendis dolor officiis
          nulla quo odit esse maiores nostrum a voluptatum pariatur sunt
          inventore quisquam explicabo nemo libero asperiores ipsum delectus
          maxime numquam beatae incidunt laboriosam! Consequuntur, iure porro.
          In necessitatibus harum obcaecati autem, sint rerum rem magni id iusto
          earum, ratione exercitationem a placeat, impedit deleniti accusantium!
          Numquam ex corrupti libero expedita pariatur sunt reiciendis delectus
          quo ipsa. Vel, amet a repellendus est architecto provident doloremque
          et nostrum dolorem nesciunt inventore accusamus optio impedit
          voluptatem explicabo eveniet consequuntur ullam maxime tempora ex.
          Aliquam, labore? Ea voluptatibus soluta neque. Harum a sed at, iure
          voluptatibus deserunt tenetur tempore cupiditate laboriosam aut
          labore. Quasi quos animi voluptatem reiciendis facilis quisquam
          voluptate dolorem fuga tempora delectus ad, id consequatur modi
          excepturi?
        </p>
      </section>
      <section className={styles.recentPostsSection}>
        <h1>Recent Posts</h1>
        <div className={styles.posts}>
          {recentPosts.map((post, index) => (
            <Link href={`/posts/${post.slug}`} key={index}>
              <div className={`block ${styles.post}`}>
                <img
                  className={styles.coverImage}
                  src={`${post.cover}?w=450&h=300&fit=crop&crop=center`}
                  alt=''
                />
                <div className={styles.postContent}>
                  <p className={styles.postTitle}>{post.title}</p>
                  <div className={styles.postMeta}>
                    <img
                      className={styles.profilePhoto}
                      src={`${post.author.photo}?w=50&h=50&fit=crop&crop=center`}
                      alt='Post author profile photo'
                    />
                    <div>
                      <p className={styles.author}>{post.author.name}</p>
                      <p className={styles.date}>{formatDate(post.date)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className={styles.featuredProductsSection}>
        <h1>Featured Products</h1>
        <div>
          {featuredProducts.map(product => (
            <Link href={`/store/${product._id}`} key={product._id}>
              <div className={`block ${styles.product}`}>
                <img
                  className={styles.productPhoto}
                  src={`${product.productPhoto}?w=200&h=200&fit=crop&crop=center`}
                  alt=''
                />
                <div className={styles.productInfo}>
                  <p className={styles.name}>{product.name}</p>
                  <p className={styles.price}>&euro;{product.price}</p>
                  <p>{product.description}</p>
                  <svg
                    className={styles.arrow}
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    id='ArrowRight'>
                    <path d='M4 12h16' />
                    <path d='M13 5l7 7-7 7' />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const postsQuery =
    '*[_type=="post"][0..3]{"slug": slug.current, "cover": cover.asset->url, title, author->{name, "photo": photo.asset->url}, date} | order(date desc)';
  const productsQuery =
    '*[_type=="product" && featured==true && stock==true]{_id, "productPhoto": image.asset->url, name, description, price}';

  const recentPosts = await Client.fetch(postsQuery);
  const featuredProducts = await Client.fetch(productsQuery);

  return {
    props: {
      recentPosts,
      featuredProducts,
    },
  };
}

export default Home;
