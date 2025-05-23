import styles from './Header.module.css';
import phone from '../../assets/socials/phone.svg';
import mail from '../../assets/socials/email.svg';
import IG from '../../assets/socials/Instagram.svg';
import FB from '../../assets/socials/facebook.svg';
import YT from '../../assets/socials/YouTube.svg';
import tweet from '../../assets/socials/twitter.svg';
import person from '../../assets/icons/person.png'
import search from '../../assets/icons/search.png'
import heart from '../../assets/icons/heart.png'
import cart from '../../assets/icons/cart.png'

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Top Bar - Hidden on mobile */}
      <div className={styles.topBar}>
        <div className={styles.contact}>
        <span><img src={phone} alt='📞' />(225) 555-0118</span>
          <span><img src={mail} alt='✉️' /> michelle.rivera@example.com</span>
        </div>&nbsp;
        <div className={styles.promo}>
          <span>Follow Us and get a chance to win 80% off</span>
        </div>
        <div className={styles.social}>
          <span>Follow Us:</span>
          <a href="https://www.instagram.com/praise_lawrence04?igsh=cjc0ZnEyeTE4bGFv"><img src={IG} alt='📸'/></a>
          <a href="https://www.youtube.com/@praiselawrence6653"><img src={YT} alt='YT'/></a>
          <a href="https://www.facebook.com/share/15Zx3V1Jw3/"><img src={FB} alt='FB'/></a>
          <a href="https://x.com/PLAW_04"><img src={tweet} alt='🐦'/></a>
        </div>
      </div>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.brand}>Bandage</div>
        <div className={styles.mobileNav}>
          <input type="checkbox" id={styles.menuToggle} className={styles.menuToggle}/>
          <label htmlFor={styles.menuToggle} className={styles.menuButton}>
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul className={styles.navLinks}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className={styles.actions}>
          <a href="#"><img src={person} alt='👤'/>Login / Register</a>
          <a href="#"><img src={search} alt='s'/> 1</a>
          <a href="#"><img src={cart} alt='🛒'/> 1</a>
          <a href="#"><img src={heart} alt='🤍'/> 1</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;