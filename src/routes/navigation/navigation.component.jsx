import { Link, Outlet } from 'react-router-dom';
import { Fragment, useContext, useEffect } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { useSelector } from 'react-redux';

import { CartContext } from '../../contexs/cart.context';
import { selectCurrentUser } from '../../store/user/user.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { signOutUser } from '../../utils/firebase/firebase.util';

import './navigation.style.scss';

const optionsNavegation = [
  { name: 'SHOP', location: 'shop' },
  { name: 'CONTACT', location: '#' },
  { name: 'SIGN IN', location: 'auth' },
  { name: 'ICON', location: '#' },
];
let allItems;

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isOpenCartDropDown, setIsOpenCartDropDown } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  useEffect(() => {
    allItems = [...document.querySelectorAll('.nav-item')];
  }, [currentUser]);

  const handlerChangeOption = e => {
    const currentItem = e.target.closest('.nav-item');
    if (!currentItem) return;
    allItems.forEach(item => (item.style.opacity = 0.5));
    currentItem.style.opacity = 1;
  };

  const handlerGetBackNormal = e => {
    allItems.forEach(item => (item.style.opacity = 1));
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
          {optionsNavegation.map((item, i) => {
            if (currentUser && item.name === 'SIGN IN') {
              return (
                <span
                  key={i}
                  className="nav-item sign-out"
                  onClick={signOutHandler}
                >
                  SIGN OUT
                </span>
              );
            } else {
              return item.name === 'ICON' ? (
                <Link
                  key={i}
                  className="nav-item"
                  to={item.location}
                  onClick={() => {
                    setIsOpenCartDropDown(!isOpenCartDropDown);
                  }}
                >
                  <CartIcon />
                </Link>
              ) : (
                <Link key={i} className="nav-item" to={item.location}>
                  {item.name}
                </Link>
              );
            }
          })}
        </nav>
        {isOpenCartDropDown ? <CartDropdown /> : ''}
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
