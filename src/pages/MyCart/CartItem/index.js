import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatCurrency } from 'utils/helpers';

import { xmark, more } from 'assets/images';

import './style.scss';

const CartItem = ({ data, handleRemove }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Cart' });

  return (
    <div className='cart-items'>
      <div className='cart-items-img'>
        <img src={data.image} alt='dress image' />
      </div>
      <div className='cart-items-info'>
        <div>
          <p>{data.name}</p>
          <img onClick={handleRemove} src={xmark} alt='close-delete icon' />
        </div>
        <p>{formatCurrency(t('unit'), data.price)}</p>
        <div>
          <p>{t('color')}: </p>
          <div>
            <p>{data.color}</p> <img src={more} alt='more icon' />
          </div>
        </div>
        <div>
          <p>{t('size')}: </p>
          <div>
            <p>{data.size}</p> <img src={more} alt='more icon' />
          </div>
        </div>
        <div>
          <p>{t('quantity')}: </p>
          <div>
            <p>{data.quantity}</p> <img src={more} alt='more icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
