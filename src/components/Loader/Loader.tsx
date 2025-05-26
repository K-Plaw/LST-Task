import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle} style={{ "--i": 0 } as React.CSSProperties}></div>
      <div className={styles.circle} style={{ "--i": 1 } as React.CSSProperties}></div>
      <div className={styles.circle} style={{ "--i": 2 } as React.CSSProperties}></div>
      <div className={styles.circle} style={{ "--i": 3 } as React.CSSProperties}></div>
      <div className={styles.circle} style={{ "--i": 4 } as React.CSSProperties}></div>
      <p>LOADING...</p>
    </div>
  );
};

export default Loader;
