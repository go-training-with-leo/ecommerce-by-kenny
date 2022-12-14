import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Stack from 'components/Stack';

import { whiteX } from 'assets/images';

import './style.scss';

const Checkbox = ({ children, filter, toggle }) => {
  return (
    <div>
      {!filter && (
        <Stack row center>
          <input type='checkbox' className={classNames('checkbox')} />
          {children}
        </Stack>
      )}

      {filter && (
        <div className={classNames('filter-checkbox', { on: toggle })}>
          <div>
            <img src={whiteX} alt='x img' />
          </div>
        </div>
      )}
    </div>
  );
};

Checkbox.defaultProps = {
  filter: false,
  toggle: false,
};

Checkbox.propTypes = {
  filter: PropTypes.bool,
  toggle: PropTypes.bool,
};

export default Checkbox;
