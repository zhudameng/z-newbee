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
        color: rgba(0, 0, 0, 0.45);
        a {
          color: rgba(0, 0, 0, 0.45);
          &:hover {
            color: rgba(0, 0, 0, 0.85);
          }
        }
      `}
    >
      {/*Powered by <a href={urls[i18n.language] || urls['en-US']}>znewbee</a>*/}
      由云果产业大脑提供技术支持。
    </div>
  );
};
