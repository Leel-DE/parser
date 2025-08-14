import { FC, useState } from 'react';
import { navProps } from '../../types/interfaces.ts';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar: FC<navProps> = ({ menuItems }) => {
  const [burgerToggle, setBurgerToggle] = useState(false);
  const location = useLocation();

  const burgerToggles = () => {
    setBurgerToggle(!burgerToggle);
  };

  const getNavLink = (item: string) => {
    switch (item.toLowerCase()) {
      case 'home':
        return '/';
      case 'about':
        return '/about';
      case 'pricing':
        return '/#pricing';
      case 'contact':
        return '/#contact';
      default:
        return `/${item.toLowerCase()}`;
    }
  };

  return (
    <nav className="nav nav-burger">
      <button className={`burger-btn`} onClick={burgerToggles}>
        {!burgerToggle ? 'open' : 'close'}
      </button>
      <ul className={`nav-list flex ${burgerToggle ? 'nav-list--open' : ''}`}>
        {menuItems.length
          ? menuItems.map((navItem) => (
              <li
                className={`nav-list-item mr-2`}
                key={Date.now() + Math.random()}
              >
                <NavLink 
                  to={getNavLink(navItem)}
                  className={({ isActive }) => 
                    isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
                  }
                >
                  {navItem}
                </NavLink>
              </li>
            ))
          : 'no props'}
      </ul>
    </nav>
  );
};

export default NavBar;
