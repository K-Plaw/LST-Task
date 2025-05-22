import styles from './FeaturedPosts.module.css';
import post1 from '../../assets/posts/post1.jpg';
import post2 from '../../assets/posts/post2.jpg';
import post3 from '../../assets/posts/post3.jpg';
import rar from '../../assets/icons/icon arrow-next.png';
import clock from '../../assets/icons/icon-clock.png';
import chart from '../../assets/icons/icon-chart.png';

const posts = [
  {
    id: 1,
    image: post1,
    title: 'Loudest à la Madison #1 (L’intégral)',
    tags: ['Google', 'Trending', 'New'],
    description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
    date: '22 April 2021',
    comments: '10 comments',
  },
  {
    id: 2,
    image: post2,
    title: 'Loudest à la Madison #1 (L’intégral)',
    tags: ['Google', 'Trending', 'New'],
    description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
    date: '22 April 2021',
    comments: '10 comments',
  },
  {
    id: 3,
    image: post3,
    title: 'Loudest à la Madison #1 (L’intégral)',
    tags: ['Google', 'Trending', 'New'],
    description: 'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
    date: '22 April 2021',
    comments: '10 comments',
  },
];

const FeaturedPosts = () => {
  return (
    <section className={styles.container}>
      <p className={styles.subtitle}>Practice Advice</p>
      <h2 className={styles.title}>Featured Posts</h2>

      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <div className={styles.card} key={post.id}>
            <div className={styles.imageContainer}>
              <img src={post.image} alt={post.title} />
              <span className={styles.badge}>NEW</span>
            </div>
            <div className={styles.content}>
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h3>{post.title}</h3>
              <p className={styles.description}>{post.description}</p>
              <div className={styles.meta}>
                <span className={styles.iconText}>
                  <img src={clock} alt="Clock" /> {post.date}
                </span>
                <span className={styles.iconText}>
                  <img src={chart} alt="Chart" /> {post.comments}
                </span>
              </div>
              <a className={`${styles.learnMore} ${styles.iconText}`} href="#">
                Learn More <img src={rar} alt="Arrow" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
