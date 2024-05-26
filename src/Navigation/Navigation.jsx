import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';
import clsx from 'clsx';

const getVisitedLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <>
      <nav className={css.navContainer}>
        <ul className={css.navLinks}>
          <li>
            <NavLink to="/" className={getVisitedLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={getVisitedLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
