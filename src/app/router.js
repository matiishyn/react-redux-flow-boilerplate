import { AppLoadable } from 'app/modules/app';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const Router = () => (
  <BrowserRouter>
    <AppLoadable />
  </BrowserRouter>
);
