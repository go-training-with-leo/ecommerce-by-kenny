import PropTypes from 'prop-types';
import classNames from 'classnames';

import React, { useState, useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { TIME } from 'utils/constants';

import './style.scss';

const Announce = ({ disable = false }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Announce',
  });
  const [label, setLabel] = useState(t('freeShipInVietnam'));

  useEffect(() => {
    const showInternationalShipping = setInterval(() => {
      setLabel(t('internationalShip'));
    }, TIME.ONE_SECOND * 4);

    const ShowVietnamShipping = setInterval(() => {
      setLabel(t('freeShipInVietnam'));
    }, TIME.ONE_SECOND * 8);

    return () => clearInterval(showInternationalShipping, ShowVietnamShipping);
  }, [t]);

  return (
    <div className={classNames('announce', { active: disable })}>
      <p>{label}</p>
    </div>
  );
};

Announce.defaultProps = {
  disable: false,
};

Announce.propTypes = {
  disable: PropTypes.bool,
};

export default memo(Announce);
