import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { login } from 'global/redux/auth/slice';

import { loginUser } from 'global/redux/auth/request';
import { saveLoginToken } from 'utils/helpers';

import Input from 'components/Input';
import Header from 'components/Header';
import Button from 'components/Button';
import signInVal from './validation';
import Footer from 'components/Footer';

//import { isLogin } from 'utils/helpers';

import './style.scss';

const SignIn = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.SignIn',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    watch,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode    : 'all',
    resolver: yupResolver(signInVal),
  });

  useEffect(() => {
    if (localStorage.getItem('isLogin') === 'true') {
      navigate('/');
    }
  });

  const formSubmit = async (data) => {
    let res = await loginUser(data);
    saveLoginToken(res.data.data.accessToken);
    dispatch(login(res.data.data));
    alert('Login success');
    localStorage.setItem('isLogin', true);
    reset();
  };

  return (
    <div>
      <Header disableAnnounce login />
      <div className='container'>
        <form className='login' onSubmit={handleSubmit(formSubmit)}>
          <label>{t('title')}</label>
          <Input
            register={register}
            error={errors.email?.message}
            label={t('email')}
            name='email'
            inputCheck={watch('email')}
          />
          <Input
            register={register}
            error={errors.password?.message}
            label={t('password')}
            name='password'
            type='password'
            inputCheck={watch('password')}
          />
          <div className='login__button'>
            <Button type='submit'>
              <p>{t('submit')}</p>
            </Button>
          </div>
        </form>
        <div className='forgot'>
          <Link to='/reset-password'>{t('resetPsw')}</Link>
          <Link to='/sign-up'>{t('signup')}</Link>
        </div>
      </div>
      <Footer lineTop />
    </div>
  );
};

export default SignIn;
