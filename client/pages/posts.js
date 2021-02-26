import Link from 'next/link';
import PropTypes from 'prop-types';
import Client from 'config/sanity';
import { formatDate } from 'utils/date';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import styles from 'styles/pages/posts.module.css';

const Posts = ({ posts }) => {
  return (
    <Layout>
      <Meta title='Posts' />
      <section className={styles.postsSection}>
        <h1>Posts</h1>

        <div className={styles.posts}>
          {posts.map((post, index) => (
            <Link href={`/posts/${post.slug}`} key={index}>
              <div className={`block ${styles.post}`}>
                <img className={styles.coverImage} src={post.cover} alt='' />

                <div className={styles.postContent}>
                  <h2 className={styles.title}>{post.title}</h2>

                  <div className={styles.meta}>
                    <img
                      className={styles.profilePhoto}
                      src={`${post.author.photo}?w=120&h=120&fit=crop&crop=center`}
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
    </Layout>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      cover: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.shape({
        name: PropTypes.string,
        photo: PropTypes.string,
      }),
      date: PropTypes.string,
    })
  ),
};

Posts.defaultProps = {
  posts: [],
};

export async function getStaticProps() {
  const query =
    '*[_type=="post"]{"slug": slug.current, "cover": cover.asset->url, title, author->{name, "photo": photo.asset->url}, date} | order(date desc)';
  const posts = await Client.fetch(query);

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
