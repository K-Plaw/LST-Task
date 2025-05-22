import styles from './BetterExperience.module.css';

const BetterExperience = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subheading}>Designing Better Experience</p>
        <h1 className={styles.heading}>
          Problems trying to resolve <br />
          the conflict between
        </h1>
        <p className={styles.description}>
          Problems trying to resolve the conflict between the two major realms of Classical physics.
        </p>
        <p className={styles.price}>$16.48</p>
        <button className={styles.cta}>ADD YOUR CALL TO ACTION</button>
      </div>
    </section>
  );
};

export default BetterExperience;
