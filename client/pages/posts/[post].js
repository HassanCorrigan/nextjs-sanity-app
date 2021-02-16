import Client from 'config/sanity';
import { formatDate } from 'utils/date';
import Layout from 'components/Layout';
import styles from 'styles/post.module.css';

const Post = ({ post }) => {
  return (
    <Layout>
      <section>
        <article className={styles.post}>
          <h1 className={styles.title}>{post.title}</h1>
          <span className={styles.meta}>
            {formatDate(post.date)} - {post.author.name}
          </span>

          {post.cover && (
            <img className={styles.cover} src={post.cover.url} alt='' />
          )}
        </article>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const query = '*[_type=="post"] {_id}';
  const posts = await Client.fetch(query);
  const paths = posts.map(post => `/posts/${post._id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const query = `*[_type=="post" && _id=="${params.post}"] {_id, title, date, "cover": cover.asset->{url}, author->{name}}`;
  const post = await Client.fetch(query);

  return {
    props: {
      post: post[0],
    },
  };
}

export default Post;
