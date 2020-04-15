import React, { useEffect, lazy, Suspense } from 'react';

import { Route } from 'react-router-dom';

import Spinner from '../../components/spinner/spinner.component';

const CollectionOverview = lazy(() =>
  import('../../components/collection-overview/collection-overview.container')
);
const CollectionPage = lazy(() => import('../collection/collection.container'));

const ShopPage = ({ fetchCollectionsStartAsync, match }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Route exact path={match.path} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Suspense>
    </div>
  );
};

export default ShopPage;
