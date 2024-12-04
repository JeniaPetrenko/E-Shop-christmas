import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const activeClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? styles.active : "";

const Navbar = () => {
  return (
    <header className={styles.navbarHeader}>
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.menuItem}>
            <NavLink className={activeClass} to="/">
              Home
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink className={activeClass} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
