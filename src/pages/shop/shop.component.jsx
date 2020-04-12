import React, { useEffect } from 'react';

import { Route } from 'react-router-dom';

import { default as CollectionOverview } from '../../components/collection-overview/collection-overview.container';
import { default as CollectionPage } from '../collection/collection.container';

const ShopPage = ({ fetchCollectionsStartAsync, match }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div>
      <Route exact path={match.path} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
