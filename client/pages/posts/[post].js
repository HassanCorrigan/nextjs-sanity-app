import BlockContent from '@sanity/block-content-to-react';
import Client from 'config/sanity';
import { formatDate } from 'utils/date';
import Layout from 'components/Layout';
import styles from 'styles/pages/post.module.css';

const Post = ({ post }) => {
  const { title, date, author, cover, content } = post;

  return (
    <Layout>
      <section className={styles.postSection}>
        <article className={styles.post}>
          <h1 className={styles.title}>{title}</h1>

          <img className={styles.cover} src={cover} alt='' />

          <div className={`block ${styles.meta}`}>
            <img
              className={styles.profilePhoto}
              src={author.photo}
              alt='Author profile photo'
            />

            <div>
              <p className={styles.author}>{author.name}</p>
              <p className={styles.date}>{formatDate(date)}</p>
            </div>
          </div>

          <BlockContent className={styles.content} blocks={content} />
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
  const query = `*[_type=="post" && slug.current=="${params.post}"] {
    title, 
    "cover": cover.asset->url, 
    content[]{
      ..., asset->{
        ..., "_key": _id
      }
    }, 
    author->{name, "photo": photo.asset->url}, 
    date
  }`;

  const [post] = await Client.fetch(query);

  return {
    props: {
      post,
    },
  };
}

export default Post;
