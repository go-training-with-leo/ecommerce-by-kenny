import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Header from 'components/Header';
import Button from 'components/Button';
import Footer from 'components/Footer';
import DoubleBg from 'components/DoubleBg';

import {
  seasonBg,
  newMiniDress,
  newTop,
  newTop2,
  whiteDress,
  orangeDress,
  greenDress,
  backDress,
  backDressMobile,
  frontDress,
  mobileBg,
} from 'assets/images';

import './style.scss';

const Season = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('translation', { keyPrefix: 'Pages.Season' });
  return (
    <div>
      <Header />
      <div className='season'>
        <div className='season__bg'>
          <img src={seasonBg} alt='season background' />
          <img src={mobileBg} alt='season background' />
          <div className='season__bg-intro'>
            <p>{t('smallTitle')}</p>
            <p>{t('bigTitle')}</p>
            <p>{t('intro')}</p>
            <div>
              <Button whiteBg smallPad>
                <p>discover</p>
              </Button>
            </div>
          </div>
        </div>
        <DoubleBg
          imgLeft={newMiniDress}
          imgLeftLink={t('newMiniDress')}
          desLeft={t('desLeft1')}
          imgRight={newTop}
          imgRightLink={t('newTop')}
          desRight={t('desRight1')}
          rightBot
          upperCase
        />
        <DoubleBg
          imgLeft={whiteDress}
          imgRight={newTop2}
          imgLeftLink={t('shopTheLook')}
          imgRightLink={t('newMiniDress')}
        />
        <DoubleBg
          imgLeft={orangeDress}
          imgLeftLink={t('shopTheLook')}
          desLeft={t('desLeft2')}
          leftBot
          imgRight={greenDress}
          imgRightLink={t('shopTheLook')}
          desRight={t('desRight2')}
        />
        <div className='season__inEqualDoubleBg'>
          <img src={backDress} alt='Left image' />
          <img src={frontDress} alt='Right image' />
          <img src={backDressMobile} alt='Left image' />
          <div className='season__inEqualDoubleBg-info'>
            <div>
              <p>{t('loungewear')}</p>
              <p>{t('loungewearDes')}</p>
              <div className='discover-button'>
                <Button whiteBg smallPad>
                  <p>discover</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <p className='season__comeJoin'>{t('comeJoin')}</p>
        <div className='season__social'>
          <div>
            <img src={newTop} alt='celeb image' />
          </div>
          <div>
            <img src={newTop} alt='celeb image' />
          </div>
          <div>
            <img src={newTop} alt='celeb image' />
          </div>
          <div>
            <img src={newTop} alt='celeb image' />
          </div>
          <div>
            <img src={newTop} alt='celeb image' />
          </div>
        </div>
        <div className='season__signup'>
          <p>{t('signup')}</p>
          <p>{t('promo')}</p>
          <div>
            <Button smallPad handleClick={() => navigate('/sign-up')}>
              <p className='signup-label'>sign up</p>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Season;
