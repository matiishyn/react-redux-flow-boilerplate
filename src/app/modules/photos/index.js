import React, { Suspense } from 'react';

const PhotosContainer = React.lazy(() => import('./containers/photos'));

export const PhotosLoadable = props => (
  <Suspense fallback={<div>Loading...</div>}>
    <PhotosContainer {...props} />
  </Suspense>
);
