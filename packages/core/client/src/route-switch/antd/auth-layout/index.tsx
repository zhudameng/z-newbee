import { css } from '@emotion/css';
import React from 'react';
import { PoweredBy } from '../../../powered-by';
import { useSystemSettings } from '../../../system-settings';

export function AuthLayout(props: any) {
  const { data } = useSystemSettings();
  return (
    <div
      style={{
        position:'absolute',
        backgroundSize:'cover',
        backgroundImage:`url('http://zhudameng.natapp1.cc/storage/uploads/login-bg.png')`,
        width:'100%',
        height: '100%',
      }}
    >
      <div
        style={{
          position:'absolute',
          left:0,
          right:0,
          bottom:0,
          top:0,
          margin:'auto',
          maxWidth:400,
          marginRight:'15%',
          paddingTop: '55vh',
        }}
      >
        {/*<h1 style={{textAlign:'center'}}>{data?.data?.title}</h1>*/}
        {props.children}
        <div
          className={css`
          position: absolute;
          left:0,
          right:0,
          bottom:0,
          top:0,
          margin:'auto',
        `}
        >
        </div>
      </div>

    </div>
  );
}
