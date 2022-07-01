import { css } from '@emotion/css';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const PoweredBy = () => {
  const { i18n } = useTranslation();
  const urls = {
    'en-US': 'https://www.znewbee.com',
    'zh-CN': 'https://cn.znewbee.com',
  };
  return (
    <div
      className={css`
        text-align: center;
        padding-right: 160px;
        font-size: 15px;
        color: rgba(0, 22,20, 0.45);
        a {
          color: rgba(0, 22, 20, 0.45);
          &:hover {
            color: rgba(0, 22, 20, 0.85);
          }
        }
      `}
    >
      {/*Powered by <a href={urls[i18n.language] || urls['en-US']}>znewbee</a>*/}
      由&nbsp;<a href={'https://www.gaoyuanyunguo.com/'}><u>云果产业大脑</u></a>&nbsp;提供技术支持.
    </div>
  );
};
