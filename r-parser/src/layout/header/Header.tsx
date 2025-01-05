import { FC } from 'react';
import NavBar from '../../components/NavBar/NavBar.tsx';
import logo from '../../assets/logo.svg';

const Header: FC = () => {
  const navBarItems: string[] = [
    'About',
    'login',
    'logOut',
    'Welcome',
    'Price',
  ];
  return (
    <section className="nav-section">
      <div className="nav-wrapper flex justify-between container items-center my-5 mx-auto px-5">
        <div className="nav-logo">
          <img src={logo} alt="Logo" className="nav-logo-img w-11" />
        </div>
        <div className="nav-menu-items-holder">
          <NavBar menuItems={navBarItems} />
        </div>
      </div>
    </section>
  );
};

export default Header;
