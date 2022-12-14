import React, { useState, memo } from 'react';
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Filter from 'components/Filter';

import { logout } from 'global/redux/auth/slice';
import { clearAddress } from 'global/redux/address/slice';
import { resetProduct } from 'global/redux/product/slice';
import { useClickOutside } from 'utils/helpers';

import { xmark, backLongArrow } from 'assets/images';

import './style.scss';

const MobileNav = ({ toggle, setToggle }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Header',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = localStorage.getItem('isLogin');

  const [toggleShop, setToggleShop] = useState(false);

  const handleToggleShop = () => {
    setToggleShop(!toggleShop);
  };

  const handleLogout = () => {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin === 'true') {
      localStorage.removeItem('isLogin');
      localStorage.removeItem('token');
      dispatch(resetProduct());
      dispatch(logout());
      dispatch(clearAddress());
      setToggle(!toggle);
    } else navigate('/sign-in');
  };

  let mobileNavRef = useClickOutside(() => setToggle(false));

  return (
    <div
      ref={mobileNavRef}
      className={classNames({
        'mobile-nav': true,
        active      : toggle,
      })}
    >
      {!toggleShop && (
        <div>
          <div className='intro'>
            <Link to='/'>Élemush</Link>
            <div>
              <img
                onClick={() => setToggle(false)}
                src={xmark}
                alt='icon image'
              />
            </div>
          </div>
          <div className='nav'>
            <Link to='/catalouge/new-arrivals'>{t('newArrivals')}</Link>
            <p onClick={handleToggleShop}>{t('shop')}</p>
            <Link to='/season'>{t('shopWinter')}</Link>
            <Link to='/account'>{t('account')}</Link>
            <p onClick={handleLogout}>{isLogin ? t('logout') : t('login')}</p>
          </div>
        </div>
      )}
      {toggleShop && (
        <div className='shop-nav'>
          <div className='shop-nav__header'>
            <img
              onClick={handleToggleShop}
              src={backLongArrow}
              alt='icon image'
            />
            <p>SHOP</p>
          </div>
          <Filter shop />
        </div>
      )}
    </div>
  );
};

export default memo(MobileNav);
