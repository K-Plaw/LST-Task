import styles from './BestServices.module.css';
import img1 from '../../assets/services/easy-wins.svg';
import img2 from '../../assets/services/Concrete.svg';
import img3 from '../../assets/services/hack-growth.svg';


const services = [
  {
    icon: img1,
    title: 'Easy Wins',
    description: 'Get your best looking smile now!',
  },
  {
    icon: img2,
    title: 'Concrete',
    description: 'Defalcate is most focused in helping you discover your most beautiful smile',
  },
  {
    icon: img3,
    title: 'Hack Growth',
    description: 'Overcame any hurdle or any other problem.',
  },
];

const BestServices = () => {
  return (
    <section className={styles.servicesSection}>
      <p className={styles.subheading}>Featured Products</p>
      <h2 className={styles.heading}>THE BEST SERVICES</h2>
      <p className={styles.description}>
        Problems trying to resolve the conflict between
      </p> <br /><br />
      <div className={styles.services}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestServices;
