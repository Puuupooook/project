import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = ({ icon }) => {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>

        <img className={styles.logo} src={icon} alt="Logo" />


        <div className={styles.navCenter}>
          <Link className={styles.navItem} to="/home">Home</Link>
          <Link className={styles.navItem} to="/catalog">Catalog</Link>
          <Link className={styles.navItem} to="/about">About us</Link>
          <Link className={styles.navItem} to="/feedback">Feedback</Link>
        </div>

        <button className={styles.iconButton}>🛒</button>
      </nav>
    </div>
  );
};

export default Nav;
