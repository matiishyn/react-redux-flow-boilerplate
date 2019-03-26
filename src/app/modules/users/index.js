import React, { lazy, Suspense } from 'react';

const Container = lazy(() => import('./containers/users'));

export const Users = props => (
  <Suspense fallback={<div>Loading...</div>}>
    <Container {...props} />
  </Suspense>
);
