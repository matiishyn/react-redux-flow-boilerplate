import React, { Suspense } from 'react';

const AppContainer = React.lazy(() => import('./containers/app'));

export const AppLoadable = props => (
  <Suspense fallback={<div>Loading...</div>}>
    <AppContainer {...props} />
  </Suspense>
);
