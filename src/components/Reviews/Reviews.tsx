import styles from './Reviews.module.css';
import userImg from '../../assets/testimonials/user.png';
import star from '../../assets/icons/star.png';
import blankStar from '../../assets/icons/star-outline.png';
import img1 from '../../assets/testimonials/img1.png';
import img2 from '../../assets/testimonials/img2.png';
import img3 from '../../assets/testimonials/img3.png';
import img4 from '../../assets/testimonials/img4.png';
import img5 from '../../assets/testimonials/img5.png';
import img6 from '../../assets/testimonials/img6.png';
import img7 from '../../assets/testimonials/img7.png';
import img8 from '../../assets/testimonials/img8.png';
import img9 from '../../assets/testimonials/img9.png';

const WhatTheySay = () => {
  return (
    <section className={styles.container}>
        <div className={styles.innerWrapper}>
            <div className={styles.testimonial}>
            <h2>What they say about us</h2>
            <img src={userImg} alt="Elizabeth Ugochukwu" className={styles.avatar} />
            <div className={styles.stars}>
                <img src={star} alt="★" />
                <img src={star} alt="★" />
                <img src={star} alt="★" />
                <img src={star} alt="★" />
                <img src={blankStar} alt="☆" />
            </div>
            <p className={styles.review}>
                Slate helps you see how many more days you need to work to reach your financial goal.
            </p>
            <p className={styles.name}>Regina Miles</p>
            <p className={styles.role}>Designer</p>
            </div>

            <div className={styles.grid}>
            {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map((img, i) => (
                <img src={img} key={i} alt={`gallery-${i}`} className={styles.gridImg} />
            ))}
            </div>
        </div>
    </section>

  );
};

export default WhatTheySay;
