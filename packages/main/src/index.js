import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';
import { apps } from './mircoApps';
import NavBar from './navbar/index.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
);

registerMicroApps(apps,{
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
});

setDefaultMountApp('/sub-react')
// 启动 qiankun
start();