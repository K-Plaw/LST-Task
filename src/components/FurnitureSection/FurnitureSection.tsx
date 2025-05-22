import styles from './FurnitureSection.module.css';
import img1 from '../../assets/furniture/card-cover-5.png';
import img2 from '../../assets/furniture/card-cover-4.png';
import img3 from '../../assets/furniture/card-cover-6.png';
import img4 from '../../assets/furniture/card-cover-7.png';

const FurnitureSection = () => {
  const items = [
    {
      id: 1,
      img: img1,
      label: 'FURNITURE',
    },
    {
      id: 2,
      img: img2,
      label: 'Furniture',
    },
    {
      id: 3,
      img: img3,
      label: 'Furniture',
    },
    {
      id: 4,
      img: img4,
      label: 'Furniture',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <div className={styles.card}>
          <img src={items[0].img} alt={items[0].label} />
          <div className={styles.overlay}>
            <span className={styles.items}>5 Items</span>
            <h2>{items[0].label}</h2>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      
      <div className={styles.rightColumn}>
        <div className={styles.box2}>
          <div className={styles.card}>
            <img src={items[1].img} alt={items[1].label} />
            <div className={styles.overlay}>
              <span className={styles.items}>5 Items</span>
              <h2>{items[1].label}</h2>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        
        <div className={styles.box3And4Container}>
          <div className={styles.box3}>
            <div className={styles.card}>
              <img src={items[2].img} alt={items[2].label} />
              <div className={styles.overlay}>
                <span className={styles.items}>5 Items</span>
                <h2>{items[2].label}</h2>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          
          <div className={styles.box4}>
            <div className={styles.card}>
              <img src={items[3].img} alt={items[3].label} />
              <div className={styles.overlay}>
                <span className={styles.items}>5 Items</span>
                <h2>{items[3].label}</h2>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureSection;