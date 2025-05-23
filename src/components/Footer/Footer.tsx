import styles from './Footer.module.css';
import IG from '../../assets/socials/instagram.png';
import FB from '../../assets/socials/facebook.png';
import tweet from '../../assets/socials/twitter.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <h2 className={styles.logo}>Bandage</h2>
        <div className={styles.socials}>
            <a href="https://www.facebook.com/share/15Zx3V1Jw3/" target="_blank" rel="noopener noreferrer">
                <img src={FB} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/praise_lawrence04?igsh=cjc0ZnEyeTE4bGFv" target="_blank" rel="noopener noreferrer">
                <img src={IG} alt="Instagram" />
            </a>
            <a href="https://x.com/PLAW_04" target="_blank" rel="noopener noreferrer">
                <img src={tweet} alt="Twitter" />
            </a>
        </div>
      </div>

      <div className={styles.columns}>
        <div>
          <h4>Company Info</h4>
          <a href="#"><p>About Us</p></a>
          <a href='#'><p>Carrier</p></a>
          <a href='#'><p>We are hiring</p></a>
          <a href='#'><p>Blog</p></a>
        </div>
        <div>
          <h4>Legal</h4>
          <a href='#'><p>About Us</p></a>
          <a href='#'><p>Carrier</p></a>
          <a href='#'><p>We are hiring</p></a>
          <a href='#'><p>Blog</p></a>
        </div>
        <div>
          <h4>Features</h4>
          <a href='#'><p>Business Marketing</p></a>
          <a href='#'><p>User Analytic</p></a>
          <a href='#'><p>Live Chat</p></a>
          <a href='#' ><p>Unlimited Support</p></a>
        </div>
        <div>
        <h4>Resources</h4>
        <a href='#'><p>IOS & Android</p></a>
        <a href='#'><p>Watch a Demo</p></a>
        <a href='#'><p>Customers</p></a>
        <a href='#'><p>API</p></a>
        </div>
        <div className={styles.subscribe}>
          <h4>Get In Touch</h4>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
          <small>Lorem ipsum dolor amet</small>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
