import { Link, Outlet } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.style.scss';

const Navigation = () => {
  let AllItems;

  const optionsNavegation = [
    { name: 'SHOP', location: 'shop' },
    { name: 'CONTACT', location: '#' },
    { name: 'SIGN IN', location: 'sign-in' },
    { name: 'ICON', location: '#' },
  ];

  useEffect(() => {
    AllItems = [...document.querySelectorAll('.nav-item')];
  }, []);

  const handlerChangeOption = e => {
    const currentItem = e.target.closest('.nav-item');
    if (!currentItem) return;
    AllItems.forEach(item => (item.style.opacity = 0.5));
    currentItem.style.opacity = 1;
  };

  const handlerGetBackNormal = e => {
    AllItems.forEach(item => (item.style.opacity = 1));
  };

  return (
    <Fragment>
      <header className="header">
        <Link className="logo-container" to={'/'}>
          <CrwnLogo className="logo" />
        </Link>
        <nav
          className="nav"
          onMouseOver={handlerChangeOption}
          onMouseOut={handlerGetBackNormal}
        >
          {optionsNavegation.map((item, i) => (
            <Link key={i} className="nav-item" to={item.location}>
              {item.name}
            </Link>
          ))}
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
