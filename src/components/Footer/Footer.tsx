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
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div>
          <h4>Legal</h4>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div>
          <h4>Features</h4>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div>
          <h4>Resources</h4>
          <p>IOS & Android</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>API</p>
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
