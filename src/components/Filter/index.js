import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Checkbox from 'components/Checkbox';

import { plus, minus } from 'assets/images';

import './style.scss';

const Filter = ({ shop = false }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Filter',
  });

  const { type } = useParams();

  const colorFilter = [
    t('beige'),
    t('blue'),
    t('black'),
    t('brown'),
    t('green'),
    t('red'),
    t('metallic'),
    t('white'),
    t('cream'),
    t('pink'),
    t('orange'),
    t('yellow'),
    t('lilac'),
    t('floral'),
  ];

  const sizeFilter = [t('freesize'), 'XS', 'S', 'M', 'L', 'XL'];

  const categoriesList = [
    {
      label: t('newArrivals'),
      value: 'new-arrivals',
    },
    {
      label: t('backInStock'),
      value: 'back-in-stock',
    },
    {
      label: t('dresses'),
      value: 'dresses',
    },
    {
      label: t('tops'),
      value: 'tops',
    },
    {
      label: t('skirts'),
      value: 'skirts',
    },
    {
      label: t('shorts'),
      value: 'shorts',
    },
    {
      label: t('pants'),
      value: 'pants',
    },
    {
      label: t('jackets'),
      value: 'jackets',
    },
    {
      label: t('jumpsuits'),
      value: 'jumpsuits',
    },
    {
      label: t('twoPieceSets'),
      value: 'two-piece-sets',
    },
    {
      label: t('sales'),
      value: 'sales',
    },
  ];

  const sortList = [
    t('newest'),
    t('bestSellers'),
    t('priceHighest'),
    t('priceLowest'),
  ];

  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [sortSelect, setSortSelect] = useState(0);
  const [toggleColor, setToggleColor] = useState(false);
  const [toggleSize, setToggleSize] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleSort, setToggleSort] = useState(false);

  const handleFilter = (func, arr, index) => {
    if (arr.includes(index)) {
      func([
        ...arr.slice(0, arr.indexOf(index)),
        ...arr.slice(arr.indexOf(index) + 1, arr.length),
      ]);
    } else func((prev) => [...prev, index]);
  };

  const handleClearFilter = () => {
    setColor([]);
    setSize([]);
  };

  return (
    <div className={classNames('filter', { shopNav: shop })}>
      <div className='filter-categories'>
        <p className='title'>{t('categories')}</p>
        {categoriesList.map((item, index) => (
          <Link
            to={`/catalouge/${item.value}`}
            key={index}
            className={classNames('shop-nav-link', {
              active: !shop && item.value === type,
            })}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className='filter-collections'>
        <p className='title'>{t('collections')}</p>
        <Link className='shop-nav-link' to='/'>
          {t('essentialsEdit')}
        </Link>
        <Link className='shop-nav-link' to='/'>
          {t('springSummer')}
        </Link>
        <Link className='shop-nav-link' to='/'>
          {t('fallWinter')}
        </Link>
      </div>
      <div className={classNames('filter-filtering', { disable: shop })}>
        <p className='title'>{t('filter')}</p>
        <div className='filter-filtering-type'>
          <div className='type-filter'>
            <div className='label' onClick={() => setToggleColor(!toggleColor)}>
              <img src={toggleColor ? plus : minus} alt='icon image' />
              <p>{t('color')}</p>
            </div>
            {!toggleColor && (
              <div className='items'>
                {colorFilter.map((item, index) => (
                  <div
                    onClick={() => handleFilter(setColor, color, index)}
                    key={index}
                  >
                    <span>
                      <Checkbox filter toggle={color.includes(index)} />
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className='type-filter'>
            <div className='label' onClick={() => setToggleSize(!toggleSize)}>
              <img src={toggleSize ? plus : minus} alt='icon image' />
              <p>{t('size')}</p>
            </div>
            {!toggleSize && (
              <div className='items size-filter'>
                {sizeFilter.map((item, index) => (
                  <div
                    onClick={() => handleFilter(setSize, size, index)}
                    key={index}
                  >
                    <span>
                      <Checkbox filter toggle={size.includes(index)} />
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {(!toggleSize || !toggleColor) && (
            <div className='handle-filter'>
              <p onClick={handleClearFilter}>{t('clearFilters')}</p>
              <div className='button'>{t('apply')}</div>
            </div>
          )}
        </div>
      </div>

      <div className={classNames('filter-sort', { disable: shop })}>
        <p className='title'>{t('sort')}</p>
        <div>
          {sortList.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>

      <div className={classNames('filter-mobile', { disable: shop })}>
        <div className='filter-mobile-nav'>
          <p>{t('newArrivals')}</p>
          <div className='filter-mobile-nav-option'>
            <div
              className='label'
              onClick={() => setToggleFilter(!toggleFilter)}
            >
              <img src={!toggleFilter ? plus : minus} alt='icon image' />
              <p>{t('filter')}</p>
            </div>
            <div className='label' onClick={() => setToggleSort(!toggleSort)}>
              <img src={!toggleSort ? plus : minus} alt='icon image' />
              <p>{t('sort')}</p>
            </div>
          </div>
        </div>
        {toggleFilter && (
          <div>
            <div className='type-filter'>
              <div
                className='label'
                onClick={() => setToggleColor(!toggleColor)}
              >
                <img src={!toggleColor ? plus : minus} alt='icon image' />
                <p>{t('color')}</p>
              </div>
              {toggleColor && (
                <div className='items'>
                  {colorFilter.map((item, index) => (
                    <div
                      onClick={() => handleFilter(setColor, color, index)}
                      key={index}
                    >
                      <span>
                        <Checkbox filter toggle={color.includes(index)} />
                      </span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className='line'></div>
            <div className='type-filter'>
              <div className='label' onClick={() => setToggleSize(!toggleSize)}>
                <img src={!toggleSize ? plus : minus} alt='icon image' />
                <p>{t('size')}</p>
              </div>
              {toggleSize && (
                <div className='items size-filter'>
                  {sizeFilter.map((item, index) => (
                    <div
                      onClick={() => handleFilter(setSize, size, index)}
                      key={index}
                    >
                      <span>
                        <Checkbox filter toggle={size.includes(index)} />
                      </span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {toggleSort && (
          <div className='sort-mobile'>
            <div>
              {sortList.map((item, index) => (
                <p
                  key={index}
                  className={classNames({ active: sortSelect === index })}
                  onClick={() => setSortSelect(index)}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Filter.defaultProps = {
  shop: false,
};

Filter.propTypes = {
  shop: PropTypes.bool,
};

export default Filter;
