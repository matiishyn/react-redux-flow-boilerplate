import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from './modules/app/components/app';

export const Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
