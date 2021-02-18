import Link from 'next/link';
import Client from 'config/sanity';
import { formatDate } from 'utils/date';
import Layout from 'components/Layout';
import styles from 'styles/index.module.css';

const Home = ({ posts }) => {
  return (
    <Layout>
      <section className={styles.welcomeSection}>
        <h1>Home</h1>
      </section>
      <section className={styles.recentPostsSection}>
        <h1>Recent Posts</h1>
        <div>
          {posts.map((post, index) => (
            <Link href={`/posts/${post.slug}`} key={index}>
              <a>
                <h2>{post.title}</h2>
                <span>{formatDate(post.date)}</span>
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
    '*[_type=="post"]{"slug": slug.current, title, date} | order(date desc)';
  const posts = await Client.fetch(query);

  return {
    props: {
      posts,
    },
  };
}

export default Home;
