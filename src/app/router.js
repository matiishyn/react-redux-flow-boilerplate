import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from 'app/modules/app/components/app';

export const Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
