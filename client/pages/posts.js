import Link from 'next/link';
import Client from 'config/sanity';
import Layout from 'components/Layout';
import styles from 'styles/posts.module.css';

const Posts = ({ posts }) => {
  return (
    <Layout>
      <section>
        <h1>Posts</h1>
        <div>
          {posts.map((post, index) => (
            <Link href={`/posts/${post.slug}`} key={index}>
              <a className={styles.post}>
                <img className={styles.cover} src={post.cover.url} alt='' />
                <h2 className={styles.title}>{post.title}</h2>
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
    '*[_type=="post"]{title, "slug": slug.current, date, "cover": cover.asset->{url}, author->{name}} | order(date desc)';
  const posts = await Client.fetch(query);

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
