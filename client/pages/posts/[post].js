import BlockContent from '@sanity/block-content-to-react';
import Client from 'config/sanity';
import { formatDate } from 'utils/date';
import Layout from 'components/Layout';
import styles from 'styles/post.module.css';

const Post = ({ post }) => {
  const { title, date, author, cover, content } = post;
  const { projectId, dataset } = Client.config();
  return (
    <Layout>
      <section>
        <article className={styles.post}>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.meta}>
            {formatDate(date)} - {author}
          </span>

          <img className={styles.cover} src={cover} alt='' />
          <BlockContent
            className={styles.content}
            blocks={content}
            projectId={projectId}
            dataset={dataset}
          />
        </article>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const query = '*[_type=="post"] {"slug": slug.current}';
  const posts = await Client.fetch(query);
  const paths = posts.map(post => `/posts/${post.slug}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const query = `*[_type=="post" && slug.current=="${params.post}"] {title, "cover": cover.asset->url, content, "author": author->name, date}`;
  const post = await Client.fetch(query);

  return {
    props: {
      post: post[0],
    },
  };
}

export default Post;
